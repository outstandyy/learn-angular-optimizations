# learn-angular-optimizations

We can divide angular optimizations into 2 groups:
- Network optimizations: improve mostly the load time (latency / bandwidth)
- Runtime optimizations: improve runtime performance (change detection / rendering)

**Network optimizations**

1. Lazy loading (router)

2. Minification / Dead Code Elimination

3. Compression (gzip / brotli)

Resources:
- "Building an Angular Application for Production": blog.mgechev.com/2016/06/26/tree-shaking-angular2-production-build-rollup-javascript/
- "2.5X Smaller Angular Applications with Google Closure Compiler": blog.mgechev.com/2016/07/21/even-smaller-angular2-applications-closure-tree-shaking/
- hacks.mozilla.org/2015/11/better-than-gzip-compression-with-brotli/

4. AOT compilation

5. Pre-fetching Resources (preload, prefetch, preconnect, dns-prefetch, prerender)
- preload: download and cash asap (for resources now)
- prefetch: download and cash on idle (for next page resources)
- dns-prefetch: resolve dns before
- preconnect: connect to domain before
- prerender: asks browser load url address and prerender it on "invisible tab" (you know that user will go to this page)

6. Caching

7. Service Workers

Resources:
- Angular Service Worker (angular.io/guide/service-worker-intro) — Aims to automate the process of managing Service Workers. It also contains Service Worker for caching static assets and one for generating application shell: developers.google.com/web/updates/2015/11/app-shell?hl=en.


**Runtime optimizations**

1. OnPush CD + Immutable

2. Smart + Dumb components

3. `*ngFor` with `trackBy`

4. Pure pipes instead of method calls in tenplates

5. Pure pipes with caching (`@memo`)

6. Async pipes

7. Detaching CD

8. Informative configurations: linting, bundle size budgets

9. Use enableProdMode

10. WebWorkers

11. SSR








**Resources**
- https://github.com/mgechev/angular-performance-checklist
- https://www.youtube.com/watch?v=WdSXDGtd9lY&ab_channel=AngularMeetupZurich
