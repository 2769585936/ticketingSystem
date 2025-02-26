<template>
  <div class="feedback" @click="showHandlerClick">反馈</div>
  <el-dialog v-model="isShowFeedback" title="用户反馈表" center width="500">
    <el-form :model="feedbackOptions">
      <el-form-item label="反馈类型">
        <el-select v-model="feedbackOptions.type" placeholder="请选择反馈类型">
          <el-option label="系统建议" value="1" />
          <el-option label="订单信息" value="2" />
          <el-option label="演出信息" value="3" />
          <el-option label="用户信息" value="4" />
          <el-option label="其他信息" value="5" />
        </el-select>
      </el-form-item>
      <el-form-item label="具体信息">
        <el-input v-model="feedbackOptions.feedbackInformation" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <el-form-item label="是否匿名提交">
      <el-radio-group v-model="feedbackOptions.anonymity">
        <el-radio value="1">是</el-radio>
        <el-radio value="2">否</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-show="feedbackOptions.anonymity == '2'" label="请填写手机号">
      <el-input v-model="feedbackOptions.phone" autocomplete="off" />
    </el-form-item>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="hideHandlerClick">取消</el-button>
        <el-button type="primary" @click="hideHandlerClick">提交</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'

const isShowFeedback = ref(false)

const showHandlerClick = () => (isShowFeedback.value = true)
const hideHandlerClick = () => {
  console.log('hideHandlerClick')
  isShowFeedback.value = false
}

const feedbackOptions = ref({
  anonymity: '1',
  phone: '',
  type: '1',
  feedbackInformation: ''
})
</script>
<style lang="scss" scoped>
.feedback {
  position: fixed;
  right: 5%;
  bottom: 30%;
  padding: 5px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 109, 83, 1);
  cursor: pointer;
}
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(11, 11, 11, 0.4);
  // background: red;
  z-index: 999;

  .feedback-content {
    width: 460px;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
    margin-top: 20%;
    .feedback-title {
      font-size: 20px;
      text-align: center;
    }
  }
}
</style>
