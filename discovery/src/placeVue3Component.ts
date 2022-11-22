import { createApp } from "vue";

const placeVue3Component = (component: any, element: Element) =>
  createApp(component).mount(element);

export default placeVue3Component;
