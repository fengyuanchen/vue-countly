/*!
 * vue-countly v1.0.0
 * https://github.com/fengyuanchen/vue-countly#readme
 *
 * Copyright 2019-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-01-23T06:12:13.975Z
 */

function VueCountly(Vue, Countly, options) {
  Object.defineProperty(Vue, 'Countly', {
    value: Countly
  });
  Object.defineProperty(Vue.prototype, '$Countly', {
    value: Countly
  });
  Countly.init(options);
}

export default VueCountly;
