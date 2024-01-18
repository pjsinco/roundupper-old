<template lang="pug">

  workspace
    include ./../../views/jom/forms/abstract
    include ./../../views/jom/renders/abstract

</template>

<script>
  import axios from 'axios';
  import 'regenerator-runtime';
  import { debounce } from 'lodash-es';
  import workspace from './../workspace.vue';
  import mixins from './../../mixins'


  export default {
    name: 'abstract',

    components: {
      'workspace': workspace,
    },

    mixins: [mixins],

    mounted() {
      console.log('hiyafrommounted');
      this.fetchArticle(3494);
    },

    methods: {

      async fetchArticle(id) {
        const res = await fetch(`https://jom.osteopathic.org/wp-json/wp/v2/abstract/${id}`)
        const article = await res.json()
        console.log(article);
      },

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


    // ex.: var article = {
    //    'type': 'Original Articles',
    //    'title': 'Teaching Ultrasound in Osteopathic Medical Schools',
    //    'authors': 'Yuriy Slyvka, MD, PhD; and Jennifer L. Gwilym, DO',
    //    'link': 'https://www.degruyter.com/document/doi/10.1515/jom-2023-0027/html',
    //    'description': 'This study was designed to evaluate the current status of ultrasound teaching in colleges of osteopathic medicine with an emphasis on the inclusion of the ultrasound in osteopathic manipulative medicine training.',
    //    'tags': [],
    // };


    data: function() {
      return {
        abstractId: null,
        articles: null,
      }
    },

  }
  
</script>
<style>
</style>


