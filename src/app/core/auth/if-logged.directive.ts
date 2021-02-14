import {Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {distinctUntilChanged, filter, takeUntil} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Directive({
  selector: '[appIfLogged]'
})
export class IfLoggedDirective implements OnInit, OnDestroy {
  private destroy$ = new Subject();

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    const distinctAuth = this.authService.isLogged$
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroy$),
      );
    this.manageLoggedUser(distinctAuth);
    this.manageUnloggedUser(distinctAuth);
  }

  private manageUnloggedUser(distinctAuth: Observable<boolean>): void {
    distinctAuth.pipe(
      filter(isLogged => !isLogged)
    ).subscribe(() => {
      this.view.clear();
    });
  }

  private manageLoggedUser(distinctAuth: Observable<boolean>): void {
    distinctAuth.pipe(
      filter(isLogged => isLogged)
    ).subscribe(() => {
      this.view.createEmbeddedView(this.template);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
