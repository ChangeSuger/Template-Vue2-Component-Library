import MyComponent from './MyComponent.vue';

MyComponent.install = function (Vue) {
  Vue.component(MyComponent.name, MyComponent);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(MyComponent.name, MyComponent);
}

export default MyComponent;