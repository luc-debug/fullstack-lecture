# Module Systems

## Historical Context

In the early days of JavaScript, there was no standardized module system because JavaScript was initially designed as a simple scripting language not a full-fledged programming language. Developers had to rely on various patterns and libraries to manage dependencies and organize their code. CommonJS emerged as a popular module system for server-side JavaScript, particularly with the rise of Node.js. It allowed developers to use `require` and `module.exports` to define and import modules. However, CommonJS was not designed with the browser in mind, and it had limitations when it came to asynchronous loading and optimization.
To address these issues, the ECMAScript specification introduced ES Modules (ESM) in ES6 as a standardized module system for JavaScript. ES Modules provide a more modern and efficient way to manage dependencies and organize code, with features like static imports, tree shaking, and native support in browsers. There are two types of ES Modules: static and dynamic. Static ES Modules have their dependencies resolved at parse time (before execution), while dynamic ES Modules are loaded on-demand at runtime using the `import()` function.

> As a best practice, it is recommended to use ES Modules for modern JavaScript development, especially for frontend applications, due to their advantages in terms of performance, optimization, and browser support. However, CommonJS is still widely used in Node.js environments and may be necessary for certain legacy projects.

## Differences between CommonJS and ES Modules

|                  | CommonJS | ES Modules (static) | ES Modules (dynamic) |
| ---------------- | -------- | ------------------- | -------------------- |
| Non-Blocking     | ❌       | ✅                  | ✅                   |
| Optimized output | ❌       | ✅                  | ❌                   |
| Browser          | ❌       | ✅                  | ✅                   |

**Non-Blocking:** This means that the module loading process does not block the execution of other code. In CommonJS, modules are loaded synchronously, which can lead to blocking if a module takes a long time to load. This is no downside on the backend with Node.js as file access is typically fast.  
In contrast, ES Modules (both static and dynamic) are loaded asynchronously, allowing other code to execute while the modules are being loaded. This is needed because http requests can be slow in contrary to file access, and we don't want to block the main thread while waiting for the modules to load.

**Optimized output:** This means that the module system allows for optimizations during the bundling process leveraged by tree shaking which effectively reduces bundle sizes. CommonJS does not support tree shaking, which means that all code in a module is included in the final bundle, even if it is not used. This can lead to larger bundle sizes and slower load times.  
In contrast, static ES Modules support tree shaking, which allows bundlers to remove unused code from the final bundle. Dynamic ES Modules (`import()`) are loaded on-demand at runtime, so bundlers cannot statically analyze what will be imported — making tree shaking impossible for those imports

**Browser:** This means that the module system is natively supported in browsers without the need for a bundler or transpiler. CommonJS is not natively supported in browsers, which means that it requires a bundler like Webpack or Browserify to be used in frontend applications.  
In contrast, ES Modules are natively supported in modern browsers, allowing developers to use them directly in frontend applications without the need for a bundler or transpiler. This can simplify the development process and reduce the need for additional tooling.
