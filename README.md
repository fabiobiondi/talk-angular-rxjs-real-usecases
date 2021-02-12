# RxJS Examples for Angular

- Login, Guards & Interceptors with BehaviorSubject
  
- nested http
- v pipe async
- V http multiple simultanee
- v form async validator
- subscribe components Output

| File      | Goal  | RxJS topic
| ----------- | ----------- | ----------- |
|  `user.validators.service.ts`  | RxJS Async Validtor for Reactive Forms<br> (used in `login.component.ts`)   |`timer`, `switchmap`       | 
| `authentication.service.ts`   | Use Subject to store and share data |   `BehaviorSubject`, `map`  
| `auth.guard.ts` |  Guard Example to protect routes <br> (used in `app-routing.module.ts`)         | Return `Observable`s in router guards| 
| `if-logged.directive.ts`   | Directive to render DOM when user is logged <br> (used in `navbar.component.ts`)| `distinctUntilChanged`, `takeUntil`, `Subject`| 
| `if-role.directive.ts`   | Directive to render DOM by role <br> (used in `navbar.component.ts`) | `distinctUntilChanged`, `takeUntil`, `Subject`| 
| `admin.component` | Multiple HTTP requests  |  `forkjoin`    

