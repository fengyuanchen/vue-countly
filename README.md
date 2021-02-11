# vue-countly

[![Build Status](https://img.shields.io/github/workflow/status/fengyuanchen/vue-countly/ci/main.svg)](https://github.com/fengyuanchen/vue-countly/actions) [![Coverage Status](https://img.shields.io/codecov/c/github/fengyuanchen/vue-countly.svg)](https://codecov.io/gh/fengyuanchen/vue-countly) [![Downloads](https://img.shields.io/npm/dm/vue-countly.svg)](https://www.npmjs.com/package/vue-countly) [![Version](https://img.shields.io/npm/v/vue-countly.svg)](https://www.npmjs.com/package/vue-countly) [![Gzip Size](https://img.shields.io/bundlephobia/minzip/vue-countly.svg)](https://unpkg.com/vue-countly/dist/vue-countly.js)

> [Countly](https://resources.count.ly/docs/countly-sdk-for-web) plugin for Vue 3.

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

```shell
npm install vue countly-sdk-web vue-countly
```

In browser:

```html
<script src="/path/to/vue.js"></script><!-- Vue.js is required -->
<script src="/path/to/countly.js"></script><!-- Countly is required -->
<script src="/path/to/vue-countly.js"></script>
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
