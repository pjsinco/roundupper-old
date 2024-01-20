<template lang="pug">
div.blank
  navbar(templateName="AOA General")
    select-template(slot="select" v-on:template-selected="handleTemplateSelect")
      option(value="aoa-general-graf" selected) Text
      option(value="aoa-general-button") Button
      option(value="aoa-general-header") Header
      option(value="aoa-general-image") Image

  transition(name="fade" appear mode="out-in")
    component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")

  include ./views/includes/toast
</template>

<script>

  import navbar from './components/navbar.vue'
  import selectTemplate from './components/select-template.vue'
  import graf from './components/aoa/general/graf.vue'
  import button from './components/aoa/general/button.vue'
  import header from './components/aoa/general/header.vue'
  import image from './components/aoa/general/image.vue'

  export default {

    name: 'aoa-general',

    components: {
      'navbar': navbar,
      'select-template': selectTemplate,
      'aoa-general-graf': graf,
      'aoa-general-button': button,
      'aoa-general-header': header,
      'aoa-general-image': image,
    },

    methods: {

      handleTemplateSelect: function(template) {
        this.currentTemplate = template;
      },

      toastClose: function() {
        document.getElementById('toastContainer').classList.remove('active')
      },

    },

    data () {
      return {
        currentTemplate: 'aoa-general-graf',
      }
    }

  }
</script>

<style>
</style>

