<template lang="pug">
  workspace
    include ./../../views/jaoa/forms/article
    include ./../../views/jaoa/renders/article

</template>

<script>
import { jaoa } from './../../app-constants';
import mixins from './../../mixins';
import workspace from './../workspace.vue';

export default {
  name: 'jaoa-article',

  mixins: [mixins],

  components: {
    workspace: workspace,
  },

  methods: {
    copy: function(evt) {
      //this.validate()
      this.copyHtml(
        function(html) {
          const newHtml = this.surround('Raleway', html, "'");
          return this.surround('Roboto', newHtml, "'");
        }.bind(this)
      );
    },

    validate: function() {
      if (this.articleUrl === '') {
        alert('There is no article link!');
      }
    },

    copyTextVersion: function(evt) {
      //this.validate()
      const text = [
        this.category,
        this.title.toUpperCase(),
        '------------------------------------',
        this.authors || null,
        this.authors ? '' : null,
        this.authors ? '' : null,
        this.blurb || null,
        this.blurb ? '' : null,
        this.blurb ? '' : null,
        this.articleUrl + (this.free ? ' | FREE' : '') || null,
        '',
        '',
      ]
        .filter(item => item !== null)
        .join('\n');

      this.copyText(text);
    },
  },

  mounted: function() {},

  computed: {
    className: function() {
      if (this.series === 'series-first') return 'padding-no-bottom';
      else if (this.series === 'series-middle')
        return 'padding-no-bottom-no-top';
      else if (this.series === 'series-last') return 'padding-no-top';
      else return 'padding';
    },

    paddingStyleRootTd: function() {
      if (this.series && this.series !== 'series-last') {
        return { padding: 0 };
      }

      return { padding: '0px 0px 40px 0px' };
    },

    tableStyle: function() {
      if (!this.series || this.series === 'series-last') {
        return {
          borderLeft: '1px solid #cccccc',
          borderRight: '1px solid #cccccc',
          borderBottom: '1px solid #cccccc',
        };
      }

      return {
        borderLeft: '1px solid #cccccc',
        borderRight: '1px solid #cccccc',
      };
    },

    paddingStyleBody: function() {
      if (this.series == 'series-middle' || this.series === 'series-last') {
        return { padding: '15px 0px 0px 0px' };
      }
      return { padding: '10px 0px 0px 0px' };
    },

    paddingStyleAuthors: function() {
      if (this.blurb) {
        return { padding: '0px 0px 20px 0px' };
      }
      return { padding: '0px 0px 5px 0px' };
    },
  },

  data: function() {
    return {
      title: 'Lorem article title',
      category: 'Original Contribution',
      authors: 'Lorem authors',
      blurb: 'Lorem blurb',
      articleUrl: '',
      imageSrc: 'https://placehold.it/480x240',
      imageUrl: '',
      imageAlt: '',
      free: false,
      video: false,
      showImageForm: false,
      series: '',
      jaoa,
    };
  },
};
</script>

<style lang="scss"></style>
