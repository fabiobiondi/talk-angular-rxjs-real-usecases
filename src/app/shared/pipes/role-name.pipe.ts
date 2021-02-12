import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Role } from '../../model/role';

@Pipe({
  name: 'roleNamePipe'
})
export class GetRoleNamePipePipe implements PipeTransform {

  constructor(private http: HttpClient) {}

  transform(roleId: number, index: number = 0): Observable<string> {
    return timer(500 * index)
      .pipe(
        switchMap(() => this.http.get<Role>('http://localhost:3000/roles/' + roleId)),
        map(user => user.roleName)
      );
  }
}
