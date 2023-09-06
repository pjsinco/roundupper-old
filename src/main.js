import Vue from 'vue';
import routes from './routes';

const app = new Vue({
  el: '#app',

  mounted: function() {
    this.currentRoute = window.location.pathname;
    console.log('this.currentRoute', this.currentRoute);
  },

  updated: function() {
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
