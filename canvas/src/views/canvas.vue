<template>
  <div class="about">
    <canvas ref='canvas'></canvas>
  </div>
</template>
<script>
// import move from '../assets/utils/move'
export default {
  data () {
    return {
      ctx: null
    }
  },
  mounted () {
    const canvas = this.$refs.canvas
    this.ctx = canvas.getContext('2d')
    this.ctx.fillStyle = 'purple'
    this.ctx.fillRect(100, 0, 600, 150)
    const step = 1
    let xPosition = 0
    let move = () => {
      this.ctx.clearRect(0, 0, 600, 600)
      this.ctx.fillRect(xPosition, 0, 300, 150)
      xPosition += step
      if (xPosition <= 300) {
        requestAnimationFrame(() => {
          move()
        })
      }
    }
    move()
  }
}
</script>
