<template>
<div class="timeline__block">
  <div class="timeline__tooltip-blank"></div>
  <div class="timeline__item">
    <div class="timeline__dot"></div>
    <span class="tramline"></span>
    <span class="tramline-fill"></span>
  </div>
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
    const parent = document.querySelector('.timeline__inner')
    const firstBlock = parent.firstChild
    const clss = 'tooltip-swap'

    firstBlock.classList.add('tooltip-swap')
    this.createObserver()
    this.alternateEChildrenAddClass(parent, clss)
  },
  methods: {
    createObserver: function () {
      let observer

      const options = {
        root: null, // this is default as the viewport
        rootMargin: '0px',
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
    },
    alternateEChildrenAddClass: function (parent, clss) {
      const blocks = parent.children
      for (let block in blocks) {
        let thisBlock = blocks[block]
        if (thisBlock instanceof HTMLElement) { // filter out any children taht aren't HTML elements
          if (this.isEven(block)) { // this needs to be inside last if because this can't be run on any elements that aren't HTML
            thisBlock.classList.add('tooltip-swap')
          }
        }
      }
    },
    isEven: function (n) {
      return n % 2 === 0
    }
  }
}
</script>
