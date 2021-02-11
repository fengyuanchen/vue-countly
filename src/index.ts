import { App } from 'vue';

export default function VueCountly(
  app: App,
  Countly: Record<string, any>,
  options?: Record<string, any>,
): void {
  app.provide('$Countly', Countly);
  app.mixin({
    inject: ['$Countly'],
  });
  Countly.init(options);
}
