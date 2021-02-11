import { createApp, h } from 'vue';
import * as Countly from 'countly-sdk-web';
import VueCountly from '../src';

describe('VueCountly', () => {
  it('should inject the `$Countly` property into all components within the application', (done) => {
    const options = {
      app_key: 'MY_APP_KEY',
      url: 'https://countly.example.com',
    };
    const app = createApp({
      mounted() {
        expect(this.$Countly).toBe(Countly);
        expect(this.$Countly.app_key).toBe(options.app_key);
        expect(this.$Countly.url).toBe(options.url);
        done();
      },
      render() {
        return h('div', 'Hello, Countly!');
      },
    });

    app.use(VueCountly, Countly, options);
    app.mount(document.body);
  });
});
