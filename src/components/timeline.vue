<template>
  <div class="timeline">
    <div class="timeline__inner">
      <TimelineItem v-for="item in data" :key="item"></TimelineItem>
    </div>
  </div>
</template>
<script>
import * as json from '../../schema.json'
import TimelineItem from './TimelineItem'

export default {
  name: 'Timeline',
  components: {
    TimelineItem
  },
  data () {
    return {
      data: json
    }
  }
}
</script>
