export default function VueCountly(Vue, Countly, options) {
  Object.defineProperty(Vue, 'Countly', {
    value: Countly,
  });
  Object.defineProperty(Vue.prototype, '$Countly', {
    value: Countly,
  });
  Countly.init(options);
}
