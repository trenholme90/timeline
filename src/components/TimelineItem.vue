<template>
<div class="timeline__block">
  <div class="timeline__item"></div>
    <div class="timeline__tooltip">
      <h1 class="timeline__tooltip-title">{{ item.title }}</h1>
      <p class="timeline__tooltip-date">
        {{ item.date }}
      </p>
      <p class="timeline__tooltip-text">
        {{ item.text }}
      </p>
    </div>
</div>
</template>

<script>

export default {

  name: 'TimelineItem',
  props: ['data'],
  data () {
    return {
      item: this.data
    }
  },
  mounted () {
    this.createObserver()
  },
  methods: {
    createObserver: function () {
      let observer

      const options = {
        root: null, // this is default as the viewport
        rootMargin: '25%',
        threshold: 1
      }
      observer = new IntersectionObserver(this.handleIntersect, options)
      let item = this.$el.querySelector('.timeline__tooltip')
      observer.observe(item)
    },
    handleIntersect: function (entries) {
      const timeline = document.querySelector('.timeline')
      const blockData = this.item
      entries.forEach(function (entry) {
        let box = entry.target
        if (entry.isIntersecting) {
          box.classList.add('loaded')
          timeline.style.backgroundImage = `url(${blockData.img})`
        }
      })
    }
  }
}
</script>
