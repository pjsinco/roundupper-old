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
          //return `
          //  <p style="margin: 0 0 0 0;">${text}<br>&nbsp;</p>\n`;
          return `
            <p style="margin: 0 0 0 0;">${text}</p>`;
        },

        heading(text, level) {
          if (level == 1) {
            const h1styles = [
              'color: #000066;',
              'font-size: 20px;',
              'font-weight: bold;',
              'line-height: 28px;',
              'margin-bottom: 12px;',
              'margin-top: 0;',
              'text-align: center',
            ];
            return `<h1 style="${h1styles.join('; ')}">${text}</h1>\n`;
          }

          return;

        },

        link(href, title, text) {
          return `
            <a href="${href}" 
               style="color: #22a49c; font-weight: bold; text-decoration: none;"
               title="${title}">${text}</a>`;
        },

        list(body, ordered) {
          const divStyles = [
            'text-align: left',
            'color: #141416',
            'margin: 0',
            'padding: 0',
            'font-family: Arial, sans-serif',
            'font-size: 16px',
            'font-weight: normal',
            'line-height: 24px',
          ];

          const listStyles = [
            'color: #141416',
            'margin: 25px 0 25px 25px',
            'padding: 0',
            'font-family: Arial, sans-serif',
            'font-size: 16px',
            'line-height: 24p',
          ];

          const listType = ordered ? 'ol' : 'ul';
          const listStyleType = ordered ? '1' : 'disc'
          console.log('ordered', ordered);
          console.log('listType', listType);

          return `
            <div class="forOutlooks" pardot-region="unordered_list" style="${divStyles.join('; ')}">
              <${listType} 
                class="glist" 
                style="${listStyles.join('; ')}" 
                align="left" 
                type="${listStyleType}"
              >
                ${body}</ol>
              <${listType}></div>\n`;
          },

      };

      marked.use({ renderer });

      marked.setOptions({
        gfm: true,
        //breaks: true,
        headerIds: false,
      });

      this.$nextTick(() => {
        this.input = `# Lorem ipsum dolor sit amet\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n`;
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
        input: '',
      }
    },

  }
  
</script>
<style>
</style>
