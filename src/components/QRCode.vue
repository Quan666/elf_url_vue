<template>
  <div>
    <vue-qr :correctLevel="3" :autoColor="false" colorDark="#313a90" :text="text" :size="95" :margin="5" :logoMargin="3"></vue-qr>
    <el-input placeholder="请输入内容" :disabled="true" v-model="text" class="input-with-select">
      <el-button slot="append" v-clipboard:copy="text" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</el-button>
    </el-input>
  </div>
</template>

<script>
import VueQr from 'vue-qr'
export default {
  name: 'QRCode',
  props: {
    text: String
  },
  data () {
    return {
    }
  },
  components: {
    VueQr
  },
  methods: {
    onCopy (e) {
      this.$message.success('复制成功')
    },
    onError (e) {
      this.$message.error('复制失败')
    }
  }
}
</script>

<style scoped>
el-input{
  margin: 20px;
}
</style>
