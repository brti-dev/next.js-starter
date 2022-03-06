This is a starter for a Next.js app bootstrapped with TypeScript. It includes CSS for a responsive app, light and dark themes based on `prefers-color-scheme` media query, a design system with tested common UI components, and helper React hooks.

## Getting Started

If using as a starter for a new app:

```bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/dr-spaceman/next.js-starter"
```

To merge config to an existing app, see section on merging below.

After initializing the app run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Run Tests

Tests use Jest and React Testing Library to test UI components and units. Use `npm run test` to initialize tests.

## Config

Currently configured for [static export](https://nextjs.org/docs/advanced-features/static-html-export). To deploy another way:

1. In `next.config.js` set `trailingSlash` to `false`.
2. Run `next build` instead of `npm run build`

## Merging after changes to this repo

1. Add this remote to the other project repo, eg. `git remote add starter ./path_to_this_repo/next.js-starter/.git`
2. Pull the files `git pull starter`
3. Merge the files: Merge everything `git merge starter/main` OR a selection `git checkout starter/main <FILES OR PATHS>`

## UI Component Documentation

This started comes packaged with a selection of common UI components. See [UI Components documentation](https://next-js-starter-3nqkw5h5m-dr-spaceman.vercel.app/components/) for instructions on the use of a some of the components available.

## Used to Build

- [mattberti.com](https://mattberti.com)
- [brandonpaillant.com](https://brandenpaillant.com)
- [Boat Daddy](https://boatdaddy.app)
- [Customer Direct](https://customerdirect.net)
