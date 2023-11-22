<template lang="pug">
  div
    navbar

    div.container-fluid
      div.row
        div.col-md-offset-3.col-md-6.text-center(style="margin-top: 5rem;")
          h1(style="padding-bottom: 2rem; color: #888;") Make email for
      div.row
        div.col-md-offset-3.col-md-6.text-center
          form.form-inline(v-on:submit="handleSubmit")
            select.form-control.input-lg
              option(v-for="route in app.routes" v-bind:value="route.path") {{ route.name }}
            button(type="submit" style="padding-left: 3rem; padding-right: 3rem; margin-left: 1rem;").btn.btn-primary.btn-lg Go
    

</template>

<script>
  import navbar from './components/navbar.vue'
  import mixins from './mixins'
  import { app } from './app-constants'
  import routes from './routes'

  export default {

    name: 'home',

    mounted: function() {
    },

    components: {
      'navbar': navbar,
    },

    mixins: [mixins],

    methods: {

      changeLocation: function(route) {
        window.location.pathname = `/${route}`;
      },

      handleSubmit: function(evt) {
        evt.preventDefault();
        const selectedIndex = document.querySelector('.form-control').options.selectedIndex;
        const route = this.app.routes[selectedIndex];
        this.navigate(route.path);
      },

      handleChange: function(evt) {
        this.changeLocation(evt.target.value);
      }
    },

    data: function() {

      return {
        app
      };
    }
  }

</script>


<style lang="scss">

  $first-color: #1ccacd;
  //$second-color: #e40066;
  $second-color: #ff3366;
  $third-color: #8a1c7c;
  $font-color-light: #888;
  $light-gray: #f3f3f3;
  $dark-gray: #4a4a4a;
  $border-radius: 1px;
  
  @import './assets/sass/variables';
  @import './../node_modules/animate.css/animate.min.css';
  @import './assets/sass/tooltipped';
  @import './assets/sass/toast';
  
  html,
  body {
    height: 100%;
  }

  #app {

  }

  body:after {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    width: 1px;
    background-color: #d0d0d0;
  }

  body.no-rule:after {
    background-color: transparent;
  }

  #rendered {
      text-align: center;
  }
  
  #highlight {
      display: inline-block;
      padding-top: 1em;
      padding-right: 2em;
      padding-bottom: 1em;
      padding-left: 2em;
  }
  
  .page-heading {
  
      margin-top: 1em;
      margin-bottom: 0;
      padding-bottom: 1em;
      text-align: left;
      font-size: 1.5em;
      font-weight: 200;
      color: gray;
      line-height: 1;
      
      &:after {
          content: "";
          position: absolute;
          left: -30rem;
          width: 42rem;
          height: 1px;
          display: block;
          margin-top: .5em;
          margin-left: 0;
          
          background: firebrick;
      }
  
  }
  
  .btn:focus {
      outline: none;
  }
  
  label {
      font-weight: 400;
      color: gray;
  }
  
  hr {
      /*border-top: 1px dashed #929292;*/
      border-top: 1px dashed #ccc;
  }
  
  .checkbox-inline > label:last-child {
      margin-left: 2em;
  }
  
  .image-group {
    background: rgba($first-color, 0.09);
    margin-bottom: 1.25rem;
    margin-top: 1.75rem;
    padding: 1.25rem;
  
    h3 {
      margin-top: 0;
      margin-bottom: 1.25rem;
    }
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease;
  }
  
  .fade-enter, 
  .fade-leave-to {
    opacity: 0;
  }

  .stick {
    position: fixed !important;
    //top: 1rem;
    height: 100%;
    width: 50%;
    overflow-y: scroll;
  }

  .workspace {
    position: relative;
    //height: 100%;
    height: calc(100% - 52px);
    display: flex;
    justify-content: space-between;
  }

  .column {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
  }

  .split-left {
    left: 0;
    z-index: 1;
    //box-shadow: 3px 0 4px 2px rgba(0, 0, 0, 0.05);
    //background-color: #f5f5f5;
    //border-right: 1px solid #d0d0d0;
  }

  .split-right {
    right: 0;
    width: 50%;
    padding: 2rem;
  }

  .graph-paper {
    font-size: 93.8%;    
    background-color: #ffffff; 
    background-image: 
      linear-gradient(to right, rgba(240,248,255,.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(240,248,255,.8) 1px, transparent 1px);
    background-size: .75em .75em;  
    background-position: 0 -0.5em; 

  }

  .text-center {
    text-align: center;
  }

  .no-padding {
    padding: 0 !important;
  }


  .form {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 2rem;
  }

  .sidebar {
    //position: absolute;
  }

  .navbar {
    position: relative;
    z-index: 1;
  }

  .navbar-center {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }

  .navbar-center label {
    margin-right: 8px;
  }

  .blank {
    height: 100%;
  }

  .clearfix:after {
    content: "";
    display: table;
    clear: both;
  }

  select:not([multiple]) {
    padding: .5rem;
    padding-right: 2rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    line-height: 1.4;
    background-position: right 50%;
    background-repeat: no-repeat;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);
  }

  /**
   * Toast overrides
   *
   */
  .toast-container > div {
    border-radius: $border-radius;
  }
  
  /**
   * Bootstrap overrides
   *
   */
  body {
    font-family: $body-font;
  }

  .help-block {
    font-size: 90%;
    color: rgba(115, 115, 115, 0.57);
  }

  .btn {
    border-radius: $border-radius;
  }

  .btn-default.focus,
  .btn-default:focus {
    background-color: #fff;
    border-color: #adadad;
  }

  .btn-primary.focus,
  .btn-primary:focus {
    background-color: $second-color;
    border-color: $second-color;
  }

  .btn-info,
  .btn-info:focus {
    background-color: $first-color;
    border-color: $first-color;
  }

  .btn-info:hover,
  .btn-info:active,
  .btn-info:hover {
    background-color: darken($first-color, 4%);
    border-color: darken($first-color, 4%);  
  }
  
  .btn-primary {
    background-color: $second-color;
    border-color: $second-color;  
  }

  .btn-primary:hover,
  .btn-primary:active {
    background-color: darken($second-color, 4%);
    border-color: darken($second-color, 4%);  
  }

  .btn-danger:hover,
  .btn-danger:active {
    background-color: darken($second-color, 4%);
    border-color: darken($second-color, 4%);
  }

  .btn-danger,
  .btn-danger.focus, 
  .btn-danger:focus, {
    background-color: $second-color;
    border-color: $second-color;
  }

  .navbar {
    border-radius: 0px;
    margin-bottom: 0;
  }
  
  .navbar-inverse {
    background-color: $light-gray;
    border-color: $light-gray;
  }

  .navbar label,
  .navbar-inverse .navbar-nav>li>a,
  .navbar-inverse .navbar-brand {
    color: $dark-gray;
  }

  .navbar-inverse .navbar-brand:focus, 
  .navbar-inverse .navbar-brand:hover {
    color: $second-color;
  }

 .navbar-inverse .navbar-nav>.open>a, 
 .navbar-inverse .navbar-nav>.open>a:focus, 
 .navbar-inverse .navbar-nav>.open>a:hover {
    background-color: darken($light-gray, 4%);
    border-color: darken($light-gray, 4%);
  }

  .dropdown-menu>li>a {
    color: $dark-gray;
  }

  .navbar-inverse .navbar-nav>li>a:focus, 
  .navbar-inverse .navbar-nav>li>a:hover {
    color: $dark-gray;
  }

  .dropdown-menu>li>a:focus, 
  .dropdown-menu>li>a:hover {
    //background-color: rgba($light-gray, .44);
    background-color: transparent;
    color: $second-color;
  }

  .navbar-inverse .navbar-nav > .open > a, 
  .navbar-inverse .navbar-nav > .open > a:focus, 
  .navbar-inverse .navbar-nav > .open > a:hover {
    color: $dark-gray;
  }

  .btn-group-vertical>.btn.active, 
  .btn-group-vertical>.btn:active, 
  .btn-group-vertical>.btn:focus, 
  .btn-group-vertical>.btn:hover, 
  .btn-group>.btn.active, 
  .btn-group>.btn:active, 
  .btn-group>.btn:focus, 
  .btn-group>.btn:hover {
    z-index: auto;
  }

  .form-control {
    border-radius: $border-radius;
    box-shadow: none;
    -webkit-box-shadow: none;
  }

  .form-control:focus {
    border-color: $first-color;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba($first-color, .6);
  }


</style>
