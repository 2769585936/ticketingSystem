import { computed, onUnmounted, ref } from 'vue'
import { dayjs } from 'element-plus'
const useCountDown = () => {
  const time = ref(0)
  const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
  let t = null
  const start = currentTime => {
    const date = parseInt(Date.now() / 1000)

    currentTime = parseInt(new Date(currentTime).getTime() / 1000)
    const shijian = 1800 + currentTime

    if (shijian - date < 0) {
      currentTime = 0
    } else {
      currentTime = shijian - date
      t = setInterval(() => {
        time.value = --currentTime

        time.value == 0 && clearInterval(t)
      }, 1000)
    }
    time.value = currentTime
  }
  onUnmounted(() => {
    t && clearInterval(t)
  })
  return {
    formatTime,
    start
  }
}

export { useCountDown }
