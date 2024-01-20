<template lang="pug">

  workspace
    include ./../../../views/aoa/general/forms/header
    include ./../../../views/aoa/general/renders/header

</template>

<script>
  import { debounce } from 'lodash-es';
  import workspace from './../../workspace.vue';
  import mixins from './../../../mixins';

  export default {
    name: 'aoa-general-header',

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
        imageUrl: 'https://storage.pardot.com/979203/1682623667W6SwDyna/aoa_blue_1.png',
        link: 'https://ostepathic.org',
      }
    },

  }
  
</script>
<style>
</style>


