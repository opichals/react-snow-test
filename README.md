# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm run build

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

**For the best production performance:** Add a build bundler plugin like "@snowpack/plugin-webpack" to your `snowpack.config.js` config file.

#### npm run build with webpack bundling and minification

```
$ npm run build

> @ build /Dev/sandbox/react-snow
> snowpack build

[snowpack] ! building source…
[snowpack] ✔ build complete [0.02s]
[snowpack] installing dependencies...
[snowpack] ✔ install complete! [0.72s]
[snowpack]
  ⦿ web_modules/                 size       gzip       brotli
    ├─ react-dom.js              127.47 KB  40.93 KB   35.99 KB
    └─ react.js                  0.26 KB    0.15 KB    0.14 KB
  ⦿ web_modules/common/ (Shared)
    └─ index-e66f0a38.js         8.99 KB    3.54 KB    3.16 KB

[snowpack] ! verifying build...
[snowpack] ✔ verification complete
[snowpack] ! writing build to disk...
[snowpack] ✔ build complete [0.02s]
                                           Asset       Size  Chunks                         Chunk Names
assets/logo-d264c5adf9650c78ea3f951b10fb965a.svg   2.27 KiB          [emitted] [immutable]
              css/index.461153ee575a98cd75b3.css  311 bytes       0  [emitted] [immutable]  index
                                js/2.a43405b3.js  179 bytes       2  [emitted] [immutable]
                            js/index.cfdcaf41.js    132 KiB       0  [emitted] [immutable]  index
                    js/vendors~index.f5ac4fb3.js   17.5 KiB       1  [emitted] [immutable]  vendors~index
[snowpack] ▶ Build Complete!
```

### npm test

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.
