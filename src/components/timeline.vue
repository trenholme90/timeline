<template>
  <div class="timeline">
    <div class="timeline__inner">
      <TimelineItem v-for="item in data" :key="item"></TimelineItem>
    </div>
  </div>
</template>
<script>
import store from '../store';
import TimelineItem from './TimelineItem'

export default {
  name: 'Timeline',
  components: {
    TimelineItem
  },
  data () {
    return {
      data: store.data.json
    }
  }
}
</script>
