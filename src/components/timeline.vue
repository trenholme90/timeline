<template>
    <div class="timeline">
      <div class="overlay"></div>
      <div class="timeline__scroll-container">
        <div class="timeline__inner">
          <TimelineItem v-for="item in timelineData" :key="item.title" :data="item"></TimelineItem>
        </div>
      </div>
    </div>
</template>
<script>

import store from '../store'
import TimelineItem from './TimelineItem'

export default {
  name: 'Timeline',
  components: {
    TimelineItem
  },
  data () {
    return {
      timelineData: store.state.data
    }
  }
}
</script>
