<template lang="pug">
div.blank
  navbar(templateName="Affiliates")
    select-template(slot="select" v-on:template-selected="handleTemplateSelect")
      option(value="affiliates-news-item" selected) News item
      option(value="affiliates-news-item-with-image") News item with small image

  transition(name="fade" appear mode="out-in")
    component(v-bind:is="currentTemplate" v-bind:current-template="currentTemplate")

  include ./views/includes/toast
</template>

<script>

  import navbar from './components/navbar.vue'
  import selectTemplate from './components/select-template.vue'
  import affiliatesNewsItem from './components/affiliates/news-item.vue'
  import affiliatesNewsItemWithImage from './components/affiliates/news-item-with-image.vue'

  export default {

    name: 'affiliates',

    components: {
      'navbar': navbar,
      'select-template': selectTemplate,
      'affiliates-news-item': affiliatesNewsItem,
      'affiliates-news-item-with-image': affiliatesNewsItemWithImage,
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
        currentTemplate: 'affiliates-news-item',
      }
    }

  }
</script>

<style>
</style>

