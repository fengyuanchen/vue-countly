import { App } from 'vue';

export default function VueCountly(
  app: App,
  Countly: Record<string, any>,
  options?: Record<string, any>,
): void {
  app.config.globalProperties.$Countly = Countly;
  Countly.init(options);
}
