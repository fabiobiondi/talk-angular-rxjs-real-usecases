# RxJS Examples for Angular

- Login, Guards & Interceptors with BehaviorSubject
  
- nested http
- v pipe async
- V http multiple simultanee
- v form async validator
- subscribe components Output

| File      | Goal  | RxJS topic
| ----------- | ----------- | ----------- |
| `login.component.ts`      | RxJS Async Validtor for Reactive Forms |`timer`, `switchmap`       | 
| `authentication.service.ts`   | Use Subject to store and share data |   `BehaviorSubject`, `map`  
| `auth.guard.ts`   |  Guard Example to protect routes         | Used in `AppRoutingModule` to protect `AdminComponent`| 
| `if-logged.directive.ts`   | Directive to hide elements when user is not logged | `distinctUntilChanged`, `takeUntil`, `Subject`| 
| `if-role.directive.ts`   | Directive to show elements by role | `distinctUntilChanged`, `takeUntil`, `Subject`| 
| `admin.component` | Multiple HTTP requests  |  `forkjoin`    

