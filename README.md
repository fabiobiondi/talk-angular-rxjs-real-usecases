# RxJS Examples for Angular

In this repository you will find some RxJS examples to use in Angular

> This is part of my talk "RxJS: real world scenarios"

| File      | Goal  | RxJS topic
| ----------- | ----------- | ----------- |
| `users.component` | **ROUTED COMPONENT:** <br>Multiple HTTP requests  |  `forkjoin` <br> `map` |
| `users-details.component` | **ROUTED COMPONENT:** <br> Handle Observable sequence to get user details by router params|  `switchmap` <br> `map` <br> `activatedRoute.params` |
| `login.component` | **ROUTED COMPONENT:** <br> Example of Reactive forms with async validator |  |
| `user.validators.service.ts`  | **ASYNC VALIDATOR SERVICE:** <br>Async Validator<br> (used in `login.component.ts`)   |`timer` <br> `switchmap`       | 
| `auth.service.ts`   | **SERVICE:** <br>Simulate JWT (login / logout / role / token) by using RxJS Subject to store and share data |   `BehaviorSubject` <br> `map`  
| `auth.interceptor.ts`   | **HTTP INTERCEPTOR:** <br>Send token to HTTP request |   `withLatestFrom` <br> `mergeMap` <br> `first` <br> `iif` <br> `delay` <br> `catchError` <br> `of` <br> `throwError`  
| `auth.guard.ts` |  **ROUTER GUARD:** <br>Guard Example to protect routes <br> (used in `app-routing.module.ts`)         | Return `Observable`s in router guards| 
| `if-logged.directive.ts`   | **DIRECTIVE:** <br>Directive to render DOM when user is logged <br> (used in `navbar.component.ts`)| `distinctUntilChanged` <br> `takeUntil` <br> `Subject`| 
| `if-roleId.directive.ts`   | **DIRECTIVE:** <br>Directive to render DOM by roleId <br> (used in `navbar.component.ts`) | `distinctUntilChanged` <br> `takeUntil` <br> `Subject`| 
| `demo-async-pipe.component.ts` | **ROUTED COMPONENT:** <br> How to use async pipe to get the role name by using the roleId |  |
| `role-name.pipe.ts` | **ASYNC PIPE:** <br> async pipe to get the roleName by using the roleId |  `timer` <br> `switchMap` <br> `map` |
| `meteo.component.ts`   | **ROUTED COMPONENT:** <br> How to use RxJS operators in Reactive Forms| `filter` <br> `debounceTime` <br> `distinctUntilChanged` <br> `switchMap` <br> `map` <br> `catchError` <br> | 

## Note:

The application is not organized in `ngModule`s in order to keep it as simple as possibile and to focus on RxJS
