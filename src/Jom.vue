<template lang="pug">
div.blank
  navbar(templateName="Jom")
    select-template(slot="select" v-on:template-selected="handleTemplateSelect")
      option(value="abstract" selected) Abstract
      option(value="callout") Callout

  transition(name="fade" appear mode="out-in")
    component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")

  include ./views/includes/toast
</template>

<script>

  import navbar from './components/navbar.vue'
  import selectTemplate from './components/select-template.vue'
  import abstract from './components/jom/abstract.vue'
  import callout from './components/jom/callout.vue'

  export default {

    name: 'jom',

    components: {
      'navbar': navbar,
      'select-template': selectTemplate,
      'abstract': abstract,
      'callout': callout,
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
        currentTemplate: 'abstract',
      }
    }

  }
</script>

<style>
</style>

