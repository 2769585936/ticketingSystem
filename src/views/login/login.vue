<script setup>
import { onMounted, ref } from 'vue'

const canvas = ref(null)
// onMounted(() => {
//   // const cas = canvas.value
//   const cas = document.querySelector('canvas')

//   const width = cas.offsetWidth
//   const height = cas.offsetHeight
//   cas.width = width
//   cas.height = height
//   const ctx = cas.getContext('2d')
//   ctx.width = width
//   ctx.height = height

//   const xingxing = []
//   let s = 1
//   function draw() {
//     setInterval(() => {
//       ctx.clearRect(0, 0, width, height)
//       xingxing[0] = new Path2D()
//       s -= 0.1
      
//       ctx.fillStyle = `rgba(255,255,255,${s})`
//       ctx.arc(350, 350, 2, 0, 2 * Math.PI, true)
//       ctx.fill()
//     }, 200)
//   }
//   draw()

//   ctx.arc(50, 50, 2, 0, 2 * Math.PI, true)
//   ctx.fill()
//   ctx.arc(150, 150, 2, 0, 2 * Math.PI, true)
//   ctx.fill()
//   ctx.arc(250, 250, 2, 0, 2 * Math.PI, true)
//   ctx.fill()
// })


</script>
<template>
  <div class="layout">
    <canvas ref="canvas" class="cas"></canvas>
  </div>
</template>

<style scoped lang="scss">
.layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/images/login-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  .cas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: red;
  }
}
</style>
