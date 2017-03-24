<template>
  <div class="demoSelect">
    <v-select v-model="selected" :options="options"></v-select>
    {{ selected }}
  </div>
</template>

<script>
import select from 'vue-select'
export default {
  name: 'demoSelect',
  components: { 'v-select': select },
  data () {
    return {
      selected: '',
      options: [
        'hello', 'yuca', 'jack', 'world'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
