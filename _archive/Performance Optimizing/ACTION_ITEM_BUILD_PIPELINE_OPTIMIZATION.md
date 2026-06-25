# Action Item: Build Pipeline Optimization

In this Action Item, students will:

- set up transpiling so modern JavaScript can run in target browsers
- bundle application code for development and production
- split code into smaller chunks that load on demand
- minify production assets to reduce parse and download cost
- compress built assets and compare the impact on transfer size

This version is designed for university teaching. It keeps the hands-on format of the original exercise while putting more emphasis on concepts, measurement, and short written analysis.

## Learning Outcomes

By the end of this exercise, students should be able to:

1. explain the difference between transpiling, bundling, code splitting, minifying, and compression
2. configure a basic frontend build pipeline with Babel and a bundler
3. use dynamic imports to defer non-critical functionality
4. compare build artifacts before and after optimization
5. justify build-tool choices with evidence from bundle size and network data

## Recommended Format

- Audience: second-year or third-year web development students
- Suggested duration: one lab plus one follow-up homework session
- Submission mode: individual or pairs
- Suggested tooling: Webpack and Babel
- Acceptable alternatives: Vite, Rollup, Parcel, or esbuild, as long as students explain the equivalent concepts

## Challenges

- [ ] 1. EASY - Configure transpiling for modern JavaScript
- [ ] 2. EASY - Bundle the application into production assets
- [ ] 3. MEDIUM - Add code splitting with dynamic imports
- [ ] 4. MEDIUM - Enable minification and compare output sizes
- [ ] 5. MEDIUM - Add compression and measure transfer savings

## Bonus Challenges

- [ ] 1. EASY - Add a bundle analyzer and identify the largest dependency
- [ ] 2. MEDIUM - Extract shared vendor code into a separate chunk
- [ ] 3. MEDIUM - Add a build performance budget that fails oversized builds
- [ ] 4. HARD - Compare the same setup in Webpack and Vite, then write a short reflection

### Deliverables

Students should submit:

1. a repository with a working build pipeline
2. a short report of 500 to 800 words answering the conceptual questions in this action item
3. evidence of optimization in the form of screenshots, terminal output, or recorded bundle sizes

### Suggested Evidence Checklist

- a screenshot or copy of the final production build output
- proof that at least one feature loads through a separate chunk
- a before-and-after comparison for minified output size
- a before-and-after comparison for compressed transfer size
- a short explanation of which optimizations affect execution, file size, and network transfer

## Getting Started

Use a small starter application with at least:

- one main entry file
- one secondary feature that is not needed on initial page load
- one HTML file that mounts the application

Examples of a secondary feature include:

- an admin panel
- a charting module
- a help modal
- a search autocomplete widget

Before students make any changes, ask them to record a baseline:

1. file size of the unoptimized JavaScript bundle
2. number of JavaScript files loaded on first page visit
3. whether the code uses syntax that older browsers would reject

## Suggested Scripts

You can give students these script names as a baseline contract:

```json
{
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production",
    "analyze": "webpack --profile --json > stats.json"
  }
}
```

If your course already uses another toolchain, keep the script names and swap the implementation behind them.

## Check Progress with Validation

Students should validate each stage with a concrete observation, not just a successful command.

Recommended checks:

```bash
npm run build
```

Confirm that:

- a production folder such as `dist` or `build` is created
- the application still runs correctly in the browser
- production output differs from development output

For code splitting, students should also verify that a second chunk is only requested when the relevant feature is used.

-----

### Step by Step Instructions

Follow the tasks below to build a modern frontend pipeline around the concepts of transpiling, bundling, code splitting, minifying, and compression.

------

<details closed>
<summary>CLICK ME! - Walkthrough: 1. Configure transpiling</summary>
<br>

Modern JavaScript syntax is convenient for developers, but older browsers may not understand it. In this task, students configure a transpiler so authoring syntax and delivery syntax can be different.

1. Install the tooling:

```bash
npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env
```

2. Create a `webpack.config.js` file with an entry point and a Babel rule:

```javascript
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
```

3. Add a source example that uses modern syntax such as optional chaining, nullish coalescing, or arrow functions.

4. Run the production build:

```bash
npm run build
```

5. Ask students to inspect the output file and answer:

- what syntax changed during transpilation?
- what syntax did not change?
- why is transpiling not the same thing as polyfilling?

#### Instructor note

The main conceptual checkpoint is that students understand transpiling changes source code syntax, while polyfills supply missing runtime features.

</details>

----

<details closed>
<summary>CLICK ME! - Walkthrough: 2. Bundle the application</summary>
<br>

Bundling combines modules and their dependency graph into deployable assets.

1. Install the HTML plugin so the bundled output can be injected into a template:

```bash
npm install --save-dev html-webpack-plugin webpack-dev-server
```

2. Extend the configuration:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
    ],
  },
};
```

3. Add a `public/index.html` file with a single root element.

4. Run the app in development and then build for production:

```bash
npm run dev
npm run build
```

5. Ask students to explain:

- what problem bundling solves
- what the bundler learns from the import graph
- why development and production builds should not be identical

#### Instructor note

Look for students who can distinguish the authoring structure of the codebase from the final deployable structure.

</details>

----

<details closed>
<summary>CLICK ME! - Walkthrough: 3. Add code splitting</summary>
<br>

Code splitting reduces the amount of JavaScript that must be downloaded and parsed on initial page load.

1. Move a non-critical feature into a separate module, for example `src/heavyFeature.js`.

2. Load that feature only when it is needed:

```javascript
document.getElementById("open-report").addEventListener("click", async () => {
  const { openReport } = await import("./heavyFeature");
  openReport();
});
```

3. Extend the build so shared code can also be split when appropriate:

```javascript
optimization: {
  splitChunks: {
    chunks: "all",
  },
},
```

4. Build the application again and inspect the output directory.

5. Open the browser network tab and confirm that:

- the main bundle loads on initial page render
- the lazy chunk loads only after the user triggers the feature

6. Ask students to reflect on the tradeoff:

- when does code splitting improve performance?
- when can too many chunks make performance worse?

#### Instructor note

This is a good place to ask students to connect network latency, request overhead, parse cost, and route-level or interaction-level loading strategies.

</details>

----

<details closed>
<summary>CLICK ME! - Walkthrough: 4. Enable minification</summary>
<br>

Minification removes whitespace, shortens identifiers when safe, and simplifies output so the final assets are smaller and faster to parse.

1. Switch the build to production mode if not already enabled:

```javascript
mode: "production",
```

2. If you also bundle CSS, add a CSS minimizer. If you only use JavaScript, the default production optimization in Webpack is enough for this task.

3. Build the app and compare file sizes between development and production output.

4. Ask students to inspect the result and answer:

- what changes are visible in a minified file?
- why is minification still useful even when compression is also enabled?
- why should source maps be handled carefully in production?

5. Require students to record at least one numerical comparison, for example:

- development bundle size versus production bundle size
- parsed bundle size versus minified bundle size

#### Instructor note

Students often confuse minification with compression. The key distinction is that minification changes the asset itself, while compression changes how that asset is transferred.

</details>

----

<details closed>
<summary>CLICK ME! - Walkthrough: 5. Add compression</summary>
<br>

Compression reduces the amount of data transferred over the network. This is usually applied when assets are served, but many teams also pre-generate compressed files during the build.

1. Install a compression plugin:

```bash
npm install --save-dev compression-webpack-plugin
```

2. Generate compressed assets during the production build:

```javascript
const CompressionPlugin = require("compression-webpack-plugin");

plugins: [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "public", "index.html"),
  }),
  new CompressionPlugin({
    algorithm: "gzip",
  }),
],
```

3. For advanced cohorts, add a second build artifact using Brotli and compare it with gzip.

4. Run the build and inspect the output directory.

5. Ask students to measure and explain:

- original file size
- minified file size
- gzip size
- Brotli size, if implemented

6. Require a short written explanation of which stage affects:

- browser compatibility
- number of files requested
- bytes transferred over the network

#### Instructor note

Students should leave this task knowing that compression is typically negotiated between client and server, and that generating `.gz` or `.br` files does not help unless the server is configured to serve them correctly.

</details>

----

## Reflection Questions

Use these as submission prompts or in-class discussion questions:

1. Why might a team transpile code even if they only target modern browsers?
2. Why is bundling still relevant in an ecosystem with native ES modules?
3. What makes a module a good candidate for code splitting?
4. Why should minified size and compressed size both be reported?
5. Which optimization in this activity had the biggest measurable effect, and why?

## Assessment Rubric

You can adapt the weighting to your course, but the following split works well for lab-based assessment:

- 35% correct build configuration and working output
- 25% correct implementation of code splitting and optimization features
- 25% quality of explanation and conceptual accuracy
- 15% evidence, measurements, and clarity of submission

## Common Misconceptions to Watch For

- Transpiling and bundling are not the same process.
- Minification does not replace compression.
- Compression alone does not improve parse or execution cost.
- Code splitting is not always beneficial if it creates too many small requests.
- A successful build does not prove the optimization is effective; students should measure the result.

## Extension Ideas

If you want to turn this into a two-week action item, add one or more of the following:

- compare Webpack with Vite or esbuild
- add a bundle visualizer and remove one large dependency
- introduce image optimization and discuss whether it belongs in the same pipeline
- add a CI check that fails when bundles exceed a defined budget

## Next Steps

1. Ask students to present one optimization decision and defend it with data.
2. Revisit the build later in the course when covering caching, HTTP, or performance budgets.
3. Compare this handcrafted setup with the defaults used by a framework such as Next.js or Vite.

## Teaching Note

The strongest submissions usually show two things clearly:

1. students can implement the tooling
2. students can explain why each optimization exists and how to verify its impact

That second point is the part worth grading most heavily in a university setting.