<template lang="pug">

  workspace
    include ./../../../views/aoa/general/forms/graf
    include ./../../../views/aoa/general/renders/graf

</template>

<script>
  const marked = require('marked')
  import { debounce } from 'lodash-es';
  import workspace from './../../workspace.vue';
  import mixins from './../../../mixins';

  export default {
    name: 'aoa-general-graf',

    components: {
      'workspace': workspace,
    },

    mixins: [mixins],

    mounted() {
      const renderer = {
        paragraph(text) {
          return `
            <p style="margin: 0 0 0 0;">${text}<br>&nbsp;</p>\n`;
        },

        // link(href, title, text) {
        // }

      };

      marked.use({ renderer });

      marked.setOptions({
        gfm: true,
        breaks: true,
        headerIds: false,
      });

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
      output: function() {
        return marked(this.input);
      }
    },

    data: function() {
      return {
        input: '# hello',
      }
    },

  }
  
</script>
<style>
</style>
