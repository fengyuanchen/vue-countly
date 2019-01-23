/*!
 * vue-countly v1.0.0
 * https://github.com/fengyuanchen/vue-countly#readme
 *
 * Copyright 2019-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-01-23T06:12:13.975Z
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueCountly = factory());
}(this, function () { 'use strict';

  function VueCountly(Vue, Countly, options) {
    Object.defineProperty(Vue, 'Countly', {
      value: Countly
    });
    Object.defineProperty(Vue.prototype, '$Countly', {
      value: Countly
    });
    Countly.init(options);
  }

  return VueCountly;

}));
