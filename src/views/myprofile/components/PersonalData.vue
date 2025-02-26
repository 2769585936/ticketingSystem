<script setup>
import { useUserInfo } from '@/stores/userInfo'
import { computed, ref, watch, reactive, nextTick } from 'vue'

const { userInfo, userUpdate } = useUserInfo()

const userName = ref('')
const imageMaxWidth = 180
const imageMaxHeight = 180

watch(
  () => userInfo.name,
  newValue => {
    userName.value = newValue
  },
  {
    immediate: true
  }
)

// 处理图片逻辑
const filePicture = ref(null)
const previewUploadPictureStr = ref('')
const imgProp = reactive({
  height: 0, //当眼页面图片显示宽高
  width: 0,
  naturalWidth: 0, // 图片真实宽度
  naturalHeight: 0
})
const pictureFile = () => {
  const files = filePicture.value.files
  if (!files.length) return
  //处理逻辑
  maskProp.left = 0
  maskProp.top = 0
  const file = files[0]
  const url = URL.createObjectURL(file)
  const imageElement = new Image()
  previewUploadPictureStr.value = url
  imageElement.onload = () => {
    const naturalWidth = (imgProp.naturalWidth = imageElement.naturalWidth)
    const naturalHeight = (imgProp.naturalHeight = imageElement.naturalHeight)
    if (naturalWidth > naturalHeight) {
      imgProp.width = imageMaxWidth
      imgProp.height = (imageMaxWidth / naturalWidth) * naturalHeight
    } else {
      imgProp.height = imageMaxHeight
      imgProp.width = (imageMaxHeight / naturalHeight) * naturalWidth
    }
  }
  imageElement.src = url

  /*  const reader = new FileReader()
  // 读取用户上传的文件并生成一个url
  reader.readAsDataURL(file)
  reader.onload = e => {
    //   // 上传图片到后台
    const result = reader.result
    previewUploadPictureStr.value = result
    // 上传图片到后台结束
    const img = new Image()
    img.onload = () => {
      const width = (imgProp.naturalWidth = img.naturalWidth)
      const height = (imgProp.naturalHeight = img.naturalHeight)
      if (width > height) {
        imgProp.width = imageMaxWidth
        imgProp.height = (imageMaxWidth / width) * height
      } else {
        imgProp.height = imageMaxHeight
        imgProp.width = (imageMaxHeight / height) * width
      }
      initCanvas()
    }
    img.src = result
  }
  reader.onerror = error => {
    console.error('Error: ', error)
  } */
}
// 计算mask大小

const maskSize = computed(() => {
  let height = 0,
    width = 0
  if (imgProp.width > imgProp.height) {
    width = height = imgProp.height + 'px'
  } else {
    height = width = imgProp.width + 'px'
  }
  return {
    height,
    width
  }
})

const maskProp = reactive({
  top: '0px',
  left: '0px'
})
// 移动mask

const movemask = e => {
  const target = e.target
  let oldX = e.pageX
  let oldY = e.pageY
  let left = parseInt(target.style.left)
  let top = parseInt(target.style.top)
  document.body.addEventListener('mousemove', moveFn)
  document.body.addEventListener('mouseup', removeAddevent)

  // 接触绑定
  function removeAddevent() {
    document.body.removeEventListener('mousemove', moveFn)
    document.body.removeEventListener('mouseup', removeAddevent)
  }
  // 计算+移动方法
  function moveFn(e) {
    const newX = e.pageX
    const newY = e.pageY
    let moveX = newX - oldX + left
    let moveY = newY - oldY + top,
      maskWidth = parseInt(maskSize.value.width),
      maskHeight = parseInt(maskSize.value.height)
    if (imgProp.width > imgProp.height) {
      moveX = moveX >= 0 ? moveX : 0
      moveX = moveX >= imgProp.width - maskWidth ? imgProp.width - maskWidth : moveX
      moveX += 'px'
      maskProp.left = moveX
    } else {
      moveY = moveY >= 0 ? moveY : 0
      moveY = moveY >= imgProp.height - maskHeight ? imgProp.height - maskHeight : moveY
      moveY += 'px'
      maskProp.top = moveY
    }
  }
}

let canvas = null
//初始化canvas
const initCanvas = () => {
  let maskWidth = parseInt(maskSize.value.width), // 遮罩层宽高
    maskHeight = parseInt(maskSize.value.height)
  canvas = canvas || document.createElement('canvas')
  canvas.width = maskWidth // 设置宽度
  canvas.height = maskHeight // 设置高度
  return canvas
}
const filePictureImg = ref(null)
const clipFn = computed(() => {
  let maskWidth = parseInt(maskSize.value.width), // 遮罩层宽高 对应canvas宽高
    maskHeight = parseInt(maskSize.value.height)
  if (!previewUploadPictureStr.value || !maskHeight || !maskWidth) return ''
  canvas = canvas || initCanvas()

  let width = imgProp.width, //图片 显示宽高
    height = imgProp.height,
    naturalWidth = imgProp.naturalWidth, //图片真实宽高
    naturalHeight = imgProp.naturalHeight
  let left = parseInt(maskProp.left),
    top = parseInt(maskProp.top)

  const ctx = canvas.getContext('2d')
  if (naturalWidth > naturalHeight) {
    left = left * (naturalHeight / height)
    top = top * (naturalHeight / height)
    width = height = height * (naturalHeight / height)
  } else {
    left = left * (naturalWidth / width)
    top = top * (naturalWidth / width)
    width = height = width * (naturalWidth / width)
  }
  ctx.drawImage(filePictureImg.value, left, top, width, height, 0, 0, canvas.width, canvas.height)

  /*   if (!previewUploadPictureStr.value || !parseInt(maskSize.value.height) || !parseInt(maskSize.value.width)) return ''
  canvas = canvas || document.createElement('canvas')

  let width = parseInt(imgProp.width)
  let height = parseInt(imgProp.height) // 设置高度
  let left = 0,
    top = 0
  canvas.width = parseInt(maskSize.value.width) // 设置宽度
  canvas.height = parseInt(maskSize.value.height) // 设置高度
  const ctx = canvas.getContext('2d')

  if (imgProp.naturalWidth > imgProp.naturalHeight) {
    width = height = height * (imgProp.naturalHeight / imgProp.height)
    left = parseInt(maskProp.left) * (imgProp.naturalHeight / imgProp.height)
    top = parseInt(maskProp.top) * (imgProp.naturalHeight / imgProp.height)
  } else {
    width = height = width * (imgProp.naturalWidth / imgProp.width)
    left = parseInt(maskProp.left) * (imgProp.naturalWidth / imgProp.width)
    top = parseInt(maskProp.top) * (imgProp.naturalWidth / imgProp.width)
  }
  ctx.drawImage(filePictureImg.value, left, top, width, height, 0, 0, parseInt(maskSize.value.width), parseInt(maskSize.value.width))
 */
  return {
    data: canvas.toDataURL('image/jpg', 1)
  }
})
// 更新用户数据
const userUpdateApi = () => {
  const userUpdateObj = {
    _id: userInfo._id,
    name: userName.value
  }
  if (canvas) {
    canvas.toBlob(blob => {
      const file = new File([blob], userInfo._id + 'userpicture.jpg', {
        type: 'image/jpeg'
      })
      const formdata = new FormData()
      formdata.append('file', file)
      userUpdateObj.userPicture = formdata
      userUpdate(userUpdateObj)
    })
  } else {
    userUpdate(userUpdateObj)
  }
}
</script>
<template>
  <div>
    <div>关于我</div>
    <div class="content-user-box">
      <div>
        <el-form label-width="80px" v-if="userInfo">
          <el-form-item label="用户UID"> {{ userInfo._id }} </el-form-item>
          <el-form-item label="用户名称"> <el-input v-model="userName"></el-input> </el-form-item>
          <el-form-item label="手机号">
            {{ userInfo.phone }}
          </el-form-item>
          <el-form-item label="微信"> 未绑定 </el-form-item>
          <el-form-item label="修改密码">
            <el-button>修改密码</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="right">
        <h3>用户头像</h3>
        <div class="user-box-picture">
          <div class="preview-picture">
            <div class="preview-box">
              <div v-show="!previewUploadPictureStr">
                <input ref="filePicture" id="file_input" class="file-picture-input" @change="pictureFile" type="file" accept=".jpg,.wepg,.png" />
                <p>选择图片</p>
              </div>
              <div class="user-picture-box" v-show="previewUploadPictureStr">
                <div class="picture-mask" @mousedown="movemask" :style="{ width: maskSize.width, height: maskSize.height, left: maskProp.left, top: maskProp.top }"></div>
                <img ref="filePictureImg" :src="previewUploadPictureStr" :style="{ width: imgProp.width + 'px', height: imgProp.height + 'px' }" alt="" />
              </div>
            </div>
            <label v-show="previewUploadPictureStr" class="file-again" for="file_input">重新选择</label>
          </div>
          <div class="user-picture">
            <img :src="clipFn.data ? clipFn.data : userInfo.userPicture" alt="" />
            <p class="img-text">{{ clipFn.data ? '预览头像' : '当前头像' }}</p>
          </div>
        </div>
        <p class="tip">请选择图片上传：大小180 * 180像素支持JPG、PNG等格式，图片需小于2M</p>
      </div>
    </div>
    <div class="btn-update">
      <el-button type="primary" class="btn-button" @click="userUpdateApi">更新</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-user-box {
  display: flex;
  width: 100%;
  gap: 40px;
  flex-wrap: wrap;
  .right {
    .user-box-picture {
      margin-top: 30px;
      display: flex;
      gap: 60px;
      align-items: center;
      .preview-picture {
        position: relative;
        .preview-box {
          width: 180px;
          height: 180px;
          background: #4a4b4c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: rgb(255, 109, 83);
          position: relative;
          .file-picture-input {
            opacity: 0;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            position: absolute;
            cursor: pointer;
          }
          .user-picture-box {
            position: relative;
            img {
              width: 100%;
              object-fit: contain;
              user-select: none;
            }
            .picture-mask {
              position: absolute;
              border: 2px solid rgb(255, 109, 83);
            }
          }
        }
        .file-again {
          position: absolute;
          bottom: -18px;
          left: 0;
          right: 0;
          margin: auto;
          width: fit-content;
          font-size: 12px;
          color: #99a2aa;
          cursor: pointer;
          &:hover {
            color: rgb(255, 109, 83);
          }
        }
      }

      .user-picture {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        // overflow: hidden;
        position: relative;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
        }
        .img-text {
          position: absolute;
          bottom: -30px;
          left: 0;
          right: 0;
          margin: auto;
          width: fit-content;
          font-size: 12px;
          color: #99a2aa;
        }
      }
    }
    .tip {
      margin-top: 20px;
      font-size: 12px;
      color: #99a2aa;
    }
  }
}

.btn-update {
  margin-left: 80px;
  display: flex;
  // justify-content: center;
  .btn-button {
    width: 120px;
    height: 40px;
    font-size: 18px;
  }
}
</style>
