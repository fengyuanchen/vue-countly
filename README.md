# vue-countly

[![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/vue-countly.svg)](https://codecov.io/gh/fengyuanchen/vue-countly) [![Downloads](https://img.shields.io/npm/dm/vue-countly.svg)](https://www.npmjs.com/package/vue-countly) [![Version](https://img.shields.io/npm/v/vue-countly.svg)](https://www.npmjs.com/package/vue-countly) [![Gzip Size](https://img.shields.io/bundlephobia/minzip/vue-countly.svg)](https://unpkg.com/vue-countly/dist/vue-countly.js)

> [Countly](https://resources.count.ly/docs/countly-sdk-for-web) plugin for Vue 3. For Vue 2, check out the [`v1`](https://github.com/fengyuanchen/vue-countly/tree/v1) branch.

## Main files

```text
dist/
├── vue-countly.js         (UMD, default)
├── vue-countly.min.js     (UMD, compressed)
├── vue-countly.esm.js     (ECMAScript Module)
├── vue-countly.esm.min.js (ECMAScript Module, compressed)
└── vue-countly.d.ts       (TypeScript Declaration File)
```

## Getting started

### Installation

Using npm:

```shell
npm install vue@3 countly-sdk-web@21 vue-countly@2
```

Using pnpm:

```shell
pnpm add vue@3 countly-sdk-web@21 vue-countly@2
```

Using Yarn:

```shell
yarn add vue@3 countly-sdk-web@21 vue-countly@2
```

Using CDN:

```html
<script src="https://unpkg.com/vue@3"></script><!-- Vue.js is required -->
<script src="https://unpkg.com/countly-sdk-web@21"></script><!-- Countly is required -->
<script src="https://unpkg.com/vue-countly@2"></script>
```

### Usage

```js
import { createApp, defineComponent } from 'vue';
import Countly from 'countly-sdk-web';
import VueCountly from 'vue-countly';

const app = createApp({
  created() {
    console.log(this.$Countly === Countly);
    // > true

    // Track sessions automatically (recommended)
    this.$Countly.q.push(['track_sessions']);

    // Track web page views automatically (recommended)
    this.$Countly.q.push(['track_pageview']);
  },
});

// Inject the `$Countly` property into all components within the application.
app.use(VueCountly, Countly, {
  app_key: 'YOUR_APP_KEY',
  url: 'https://yourdomain.com/',
});
app.mount(document.body);
```

> See the available [initialization config options](https://support.count.ly/hc/en-us/articles/360037441932-Web-analytics-JavaScript-#setup-properties) of Countly.

## Browser support

Same as Vue 3.

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org/).

## License

[MIT](https://opensource.org/licenses/MIT) © [Chen Fengyuan](https://chenfengyuan.com/)
