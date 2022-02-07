# vue-countly

> [Countly](https://resources.count.ly/docs/countly-sdk-for-web) plugin for [Vue 2](https://v2.vuejs.org).

## Installation

```shell
npm install --save-dev vue@2 countly-sdk-web@21 vue-countly@1
```

In browser:

```html
<script src="/path/to/vue.js"></script><!-- Vue is required -->
<script src="/path/to/countly.js"></script><!-- Countly is required -->
<script src="/path/to/vue-countly.js"></script>
```

## Usage

```js
import Vue from 'vue';
import Countly from 'countly-sdk-web';
import VueCountly from 'vue-countly';

Vue.use(VueCountly, Countly, {
  app_key: 'YOUR_APP_KEY',
  url: 'https://yourdomain.com',
});

console.log(Vue.Countly === Countly);
// > true

new Vue({
  // ...
  created() {
    console.log(this.$Countly === Countly);
    // > true

    // Track sessions automatically (recommended)
    this.$Countly.q.push(['track_sessions']);

    // Track web page views automatically (recommended)
    this.$Countly.q.push(['track_pageview']);
  },
});
```

In browser:

```html
<script>Vue.use(VueCountly, Countly);</script>
```

## Options

See the available [initialization config options](https://resources.count.ly/docs/countly-sdk-for-web#section-setup-properties) of Countly.

```js
Vue.use(VueCountly, Countly, options);
```

## Browser support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Edge (latest)
- Internet Explorer 9+

## Versioning

Maintained under the [Semantic Versioning guidelines](https://semver.org).

## License

[MIT](https://opensource.org/licenses/MIT)
