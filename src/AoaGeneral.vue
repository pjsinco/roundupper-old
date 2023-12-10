<template lang="pug">
div.blank
  navbar(templateName="AOA General")
    select-template(slot="select" v-on:template-selected="handleTemplateSelect")
      option(value="aoa-general-graf" selected) Graf
      option(value="aoa-general-list") List

  transition(name="fade" appear mode="out-in")
    component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")

  include ./views/includes/toast
</template>

<script>

  import navbar from './components/navbar.vue'
  import selectTemplate from './components/select-template.vue'
  import aoaGeneralGraf from './components/aoa/general/graf.vue'
  import aoaGeneralList from './components/aoa/general/list.vue'

  export default {

    name: 'aoa-general',

    components: {
      'navbar': navbar,
      'select-template': selectTemplate,
      'aoa-general-graf': aoaGeneralGraf,
      'aoa-general-list': aoaGeneralList,
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

