import Vue from 'vue';
import routes from './routes';

const app = new Vue({
  el: '#app',

  mounted: function () {
    console.log('hxy');
    this.currentRoute = window.location.pathname;
  },

  updated: function () {
    this.currentRoute = window.location.pathname;
  },

  methods: {},

  data: {
    currentRoute: window.location.pathname,
  },

  computed: {
    ViewComponent() {
      return routes[this.currentRoute];
    },
  },

  render(h) {
    return h(this.ViewComponent);
  },
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
