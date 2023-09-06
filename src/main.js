import Vue from 'vue';
import routes from './routes';

const app = new Vue({
  el: '#app',

  mounted: function() {
    this.currentRoute = this.getPathname();
    console.log('mounted - this.currentRoute', this.currentRoute);
  },

  updated: function() {
    this.currentRoute = this.getPathname();
    console.log('updated - this.currentRoute', this.currentRoute);
  },

  methods: {
    getPathname: function() {
      var rawPathname = window.location.pathname;

      if (window.location.href == 'https://pjsinco.github.io/roundupper/') {
        return rawPathname.substring('/roundupper/'.length);
      }

      return rawPathname;
    },
  },

  data: {
    currentRoute: null,
  },

  computed: {
    ViewComponent() {
      console.log('routes[this.currentRoute]', routes[this.currentRoute]);
      return routes[this.currentRoute];
    },
  },

  render(h) {
    return h(this.ViewComponent);
  },
});

window.addEventListener('popstate', () => {
  var pathname = window.location.pathname;

  if (window.location.href == 'https://pjsinco.github.io/roundupper/') {
     pathname = pathname.substring('/roundupper/'.length);
  }


  app.currentRoute = pathname;
});
