<template>
    <div class="editor-wraper">
      <vue-editor v-model="content" style="height: 590px"></vue-editor>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  props: {
    value: {
      required: true,
      default: ''
    }
  },
  data () {
    return {
      content: ''
    }
  },
  components: {
    VueEditor
  },
  methods: {

  },
  watch: {
    content (newValue) {
      newValue = newValue.replace(/<pre(.*)>/g, (a, $1) => `<pre${$1}><code>`).replace(/<\/pre>/g, '</code></pre>')
      this.$emit('input', newValue)
    }
  }
}
</script>

<style>

</style>
