# Action Item: Modern Frontend Tooling with Vite

In this Action Item, you will:

- set up Vite as your development server and build tool
- configure legacy transpiling so modern code can still target older browsers
- use code splitting to load non-critical functionality on demand
- inspect Vite's production minification and cache-busted output
- generate compressed assets and compare their transfer sizes

The difficulty increases gradually, and we recommend you complete the items in the given order.

Our objective: go from a simple static website with HTML and JavaScript to a setup similar to the modern tooling used by current frontend teams, but using Vite instead of Webpack.

## Challenges

- [ ] 1. EASY - Set up `npm` to manage dependencies
- [ ] 2. EASY - Set up `Vite` to serve and bundle your code
- [ ] 3. EASY - Add legacy transpiling for broader browser compatibility
- [ ] 4. MEDIUM - Use dynamic imports for code splitting
- [ ] 5. MEDIUM - Inspect minified production output and hashed filenames
- [ ] 6. MEDIUM - Generate compressed assets and measure the savings

## Bonus Challenges

- [ ] 1. EASY - Add a bundle visualizer and identify the largest output file
- [ ] 2. MEDIUM - Split shared utilities into their own reusable chunk
- [ ] 3. MEDIUM - Add a performance budget and fail the build if bundles get too large
- [ ] 4. HARD - Rebuild the same exercise with React or Vue on top of Vite
- [ ] 5. VERY HARD - Compare the same app in Vite and Webpack and explain the tradeoffs

### Getting Started

The reference solution in this repository lives in the `vite-solution` folder.

If you want to run the finished project directly:

```bash
cd vite-solution
npm install
npm run dev
```

Then open the local URL shown by Vite in the terminal.

To inspect the production build:

```bash
npm run build
npm run report
```

You should see a production `dist` folder and an asset report showing original, gzip, and Brotli sizes.

## Check Your Progress with Validation Commands

There are no automated tests in this version of the exercise. Instead, validate each task with the following commands:

```bash
npm run build
```

and

```bash
npm run report
```

By the end of the exercise, both commands should complete successfully, and the browser network tab should show that the lazy-loaded feature is only fetched when the user requests it.

-----

### Step by Step Instructions

Follow the instructions below to build a modern frontend codebase with Vite around transpiling, bundling, code splitting, minifying, and compression.

------

<details closed>
<summary>CLICK ME! - Walkthrough: 1. Set up npm</summary>
<br>

1. Initialize the project in a new folder:

```bash
npm init -y
```

2. Add a `.gitignore` file so generated files do not end up in source control:

```bash
echo node_modules > .gitignore
echo dist >> .gitignore
```

3. Create a basic source structure:

```bash
mkdir src
mkdir scripts
```

4. Confirm that `package.json` exists and that your project folder is ready for dependencies.

#### Solution: Task 1

The completed reference setup is available in the `vite-solution` folder.

</details>

----

<details closed>
<summary>CLICK ME! - Walkthrough: 2. Set up Vite to serve and bundle your code</summary>
<br>

Vite gives you a fast development server and a production build based on Rollup.

1. Install Vite:

```bash
npm install --save-dev vite
```

2. Add the scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

3. Create an `index.html` file in the project root with a mount point and a module script:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite Build Pipeline</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

4. Create `src/main.js` and render some simple content into `#root`.

5. Start the development server:

```bash
npm run dev
```

6. Build the app for production:

```bash
npm run build
```

You should now have a `dist` folder containing bundled production output.

#### Solution: Task 2

See the working example in `vite-solution/index.html`, `vite-solution/src/main.js`, and `vite-solution/package.json`.

</details>

----

<details closed>
<summary>CLICK ME! - Walkthrough: 3. Add legacy transpiling for broader browser compatibility</summary>
<br>

Vite already transforms source code for modern browsers, but you can extend it to produce legacy bundles for older targets.

1. Install the legacy plugin:

```bash
npm install --save-dev @vitejs/plugin-legacy
```

2. Create `vite.config.mjs`:

```javascript
import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    legacy({
      targets: ["defaults"],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
  ],
});
```

3. In your source code, use modern syntax such as optional chaining and nullish coalescing:

```javascript
const label = courseConfig?.title ?? "Untitled course";
```

4. Run the build again:

```bash
npm run build
```

5. Inspect the output and identify which files were added to support legacy browsers.

Ask yourself:

- what part of this setup is transpiling syntax?
- what part is adding compatibility helpers or polyfills?
- why is that different from bundling?

#### Solution: Task 3

See `vite-solution/vite.config.mjs` and the modern syntax used in `vite-solution/src/main.js`.

</details>

----

<details closed>
<summary>CLICK ME! - Walkthrough: 4. Use code splitting with dynamic imports</summary>
<br>

Code splitting allows you to keep non-critical functionality out of the main startup path.

1. Create a second module, for example `src/heavyFeature.js`.

2. Load it only when a user interacts with the page:

```javascript
document.getElementById("load-report").addEventListener("click", async () => {
  const { renderOptimizationReport } = await import("./heavyFeature.js");
  renderOptimizationReport();
});
```

3. Build the app again:

```bash
npm run build
```

4. Inspect `dist/assets` and confirm that Vite created a separate chunk for the lazily loaded module.

5. Run the app and use the browser network tab to confirm that the chunk is only requested after clicking the button.

#### Solution: Task 4

See the dynamic import in `vite-solution/src/main.js` and the lazily loaded module in `vite-solution/src/heavyFeature.js`.

</details>

----

<details closed>
<summary>CLICK ME! - Walkthrough: 5. Inspect minification and cache-busted output</summary>
<br>

Vite minifies production assets by default and emits hashed filenames that support long-term caching.

1. Build the app:

```bash
npm run build
```

2. Inspect the `dist/assets` folder.

You should notice:

- short, compressed production code
- hashed file names such as `index-abc123.js`
- a different output structure from development mode

3. Compare the build output with the source files and answer:

- what changed because of bundling?
- what changed because of minification?
- why do hashed filenames matter for browser caching?

4. Record the size of at least one JavaScript asset before and after production optimization.

#### Solution: Task 5

Run the reference solution in `vite-solution` and inspect its generated `dist` directory after `npm run build`.

</details>

----

<details closed>
<summary>CLICK ME! - Walkthrough: 6. Generate compressed assets and measure the savings</summary>
<br>

Compression reduces the number of bytes transferred over the network. In this exercise, you will generate `.gz` and `.br` versions of the build output.

1. Extend `vite.config.mjs` with a build plugin that emits compressed assets.

2. Build the app again:

```bash
npm run build
```

3. Create a reporting script to compare original, gzip, and Brotli sizes:

```json
{
  "scripts": {
    "report": "node scripts/report-assets.js"
  }
}
```

4. Run the report:

```bash
npm run report
```

5. Record the sizes for at least one HTML file and one JavaScript file.

6. Explain the difference between:

- minification, which changes the asset itself
- compression, which changes how efficiently the asset is transferred

#### Solution: Task 6

See the compression plugin in `vite-solution/vite.config.mjs` and the reporting helper in `vite-solution/scripts/report-assets.js`.

</details>

----

## Reflection Questions

1. Why might a team choose Vite over a custom Webpack configuration for a teaching project?
2. Which optimization changes developer experience the most, and which changes runtime performance the most?
3. Why should code splitting be driven by real usage patterns instead of applied everywhere?
4. Why are minified size and compressed size both worth measuring?
5. If a page gets more JavaScript chunks after optimization, how can that still improve performance?

## Next Steps

1. Run `npm run preview` and inspect the production version locally.
2. Add a bundle visualizer or performance budget as a bonus exercise.
3. Try the same workflow with React or Vue on top of Vite and compare the output.

### Getting Help

If students get stuck, ask them to verify each phase separately:

1. does the dev server run?
2. does the build complete?
3. does the lazy chunk appear?
4. do `.gz` and `.br` files exist after the build?

The reference implementation in `vite-solution` answers all four.