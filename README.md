# RxJS Examples for Angular

- Login, Guards & Interceptors with BehaviorSubject
  
- nested http
- v pipe async
- V http multiple simultanee
- v form async validator
- subscribe components Output

| File      | Goal  | RxJS topic
| ----------- | ----------- | ----------- |
| `users.component` | Multiple HTTP requests  |  `forkjoin`, `map` |
| `users-details.component` |  Handle Observable sequence |  `switchmap`, `map`, `activatedRoute.params` |
| `user.validators.service.ts`  | RxJS Async Validator for Reactive Forms<br> (used in `login.component.ts`)   |`timer`, `switchmap`       | 
| `auth.service.ts`   | Use Subject to store and share data |   `BehaviorSubject`, `map`  
| `auth.interceptor.ts`   | Send token to HTTP request |   `withLatestFrom`, `mergeMap`, `first`, `iif`, `delay`, `catchError`, `of`, `throwError`  
| `auth.guard.ts` |  Guard Example to protect routes <br> (used in `app-routing.module.ts`)         | Return `Observable`s in router guards| 
| `if-logged.directive.ts`   | Directive to render DOM when user is logged <br> (used in `navbar.component.ts`)| `distinctUntilChanged`, `takeUntil`, `Subject`| 
| `if-roleId.directive.ts`   | Directive to render DOM by roleId <br> (used in `navbar.component.ts`) | `distinctUntilChanged`, `takeUntil`, `Subject`| 

| x | x | x |
| x | x | x |
| x | x | x |
| x | x | x |
