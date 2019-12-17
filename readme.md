# MDX + Next.js + MDX Runtime

This project is a simple example to show that using `@mdx-js/runtime` within NextJS is raising the following error.

```
Module not found: Can't resolve '@mdx-js/runtime' in '~/code/mdx-runtime-error-nextjs/pages'
```

Run the steps below to see the error:
- `yarn install`
- `yarn dev`
- Visit `http:localhost:3000` to view the Index page loading correctly.
- Visit `http:localhost:3000/hello` to view the Hello page loading correctly.
- Visit `http:localhost:3000/runtime` to view the "Module not found" error.

**NOTE:** `@mdx-js` is installed within `node_modules` and includes the `/runtime/dist` directory.
