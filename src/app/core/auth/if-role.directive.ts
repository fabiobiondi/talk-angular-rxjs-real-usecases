import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {MonoTypeOperatorFunction, Observable, Subject} from 'rxjs';
import {distinctUntilChanged, filter, takeUntil} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {UserRoles} from './auth';

@Directive({
  selector: '[appIfRole]'
})
export class IfRoleDirective implements OnInit, OnDestroy {
  @Input() appIfRole: UserRoles;
  private destroy$ = new Subject();

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.manageValidRole();
    this.manageInvalidRole();
  }

  private createAuthObservable(authFilter: MonoTypeOperatorFunction<string>): Observable<string> {
    return this.authService.role$
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroy$),
        authFilter
      );
  }

  private manageValidRole(): void {
    const validRoleFilter: MonoTypeOperatorFunction<string> = filter(role => this.appIfRole === role);
    this.createAuthObservable(validRoleFilter)
      .subscribe(() => {
        this.view.createEmbeddedView(this.template);
      });
  }

  private manageInvalidRole(): void {
    const invalidRoleFilter: MonoTypeOperatorFunction<string> = filter(role => this.appIfRole !== role);
    this.createAuthObservable(invalidRoleFilter)
      .subscribe(() => {
        this.view.clear();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
