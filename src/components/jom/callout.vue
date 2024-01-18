<template lang="pug">

  workspace
    include ./../../views/jom/forms/callout
    include ./../../views/jom/renders/callout

</template>

<script>
  const marked = require('marked')
  import { debounce } from 'lodash-es';
  import workspace from './../workspace.vue';
  import mixins from './../../mixins'


  export default {
    name: 'callout',

    components: {
      'workspace': workspace,
    },

    mixins: [mixins],

    mounted() {
    },

    methods: {
      update: debounce(function(evt) {
        this.input = evt.target.value;
      }, 100),


      copy() {
        this.copyHtml();
      },

      copyTextVersion() {
        // TODO
        return;
      }
    },

    computed: {
    },

    data: function() {
      return {
        calloutId: null,
      }
    },

  }
  
</script>
<style>
</style>


