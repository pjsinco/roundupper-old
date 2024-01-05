<template lang="pug">
  div#workspace.clearfix.workspace
    div.column.split-left
      div#form.form
        slot(name="form")
  
    div.column.split-right.graph-paper
      template
        slot(name="render-container")
          div#rendered
            slot(name="render")
  
    div#clone(style="position: absolute; top: -5000px; left: -5000px")
</template>

<script>

  export default {

    props: ['workingTemplate'],
  }

</script>
