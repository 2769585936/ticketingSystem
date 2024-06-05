import { computed, onMounted, onUnmounted, ref } from 'vue'
import { dayjs } from 'element-plus'
// 倒计时
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

// vue图片懒加载插件
const lazyImg = {
  install(app) {
    // 图片懒加载
    const observer = new IntersectionObserver((change, observer) => {
      change.forEach(item => {
        if (item.isIntersecting) {
          item.target.src = item.target.dataset.src
          observer.unobserve(item.target)
        }
      })
    })

    app.directive('lazy-img', {
      mounted(el, { value }) {
        el.dataset.src = value
        observer.observe(el)
      },
      unMounted(el) {
        observer.unobserve(el)
      }
    })
  }
}

export { useCountDown, lazyImg }
