<template lang="pug">
  workspace
    include ./../../views/jaoa/forms/banner
    include ./../../views/jaoa/renders/banner
</template>

<script>

  import mixins from './../../mixins'
  import workspace from './../workspace.vue';

  export default {

    mixins: [mixins],

    components: {
      'workspace': workspace,
    },

    methods: {
      copy: function(evt) {
        this.copyHtml()
      },
    },

    data: function() {
      
      return {
        alt: 'Banner image',
        imageUrl: 'https://placehold.it/600x300',
      }
    }
  }
</script>

<style lang="scss">

</style>

