<template>
  <div class="timeline">
    <div v-for="item in data" :key="item">{{item.title}}</div>
  </div>
</template>

<script>
import * as json from '../../schema.json'

export default {
  name: 'Timeline',
  data () {
    return {
      myjson: json
    }
  }
}
</script>
