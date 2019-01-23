import Vue from 'vue/dist/vue';
import Countly from 'countly-sdk-web';
import VueCountly from '../src';

const options = {
  app_key: 'MY_APP_KEY',
  url: 'https://countly.example.com',
};

Vue.use(VueCountly, Countly, options);

describe('vue-countly', () => {
  it('should register the `Vue.Countly` property', () => {
    expect(Vue.Countly).to.equal(Countly);
  });

  it('should register the `Vue.prototype.$Countly` property', () => {
    expect(Vue.prototype.$Countly).to.equal(Countly);
  });

  it('should apply the passed options', (done) => {
    new Vue({
      template: '<div>Hello, Countly!</div>',
      created() {
        expect(this.$Countly.app_key).to.equal(options.app_key);
        expect(this.$Countly.url).to.equal(options.url);
        done();
      },
    }).$mount();
  });
});
