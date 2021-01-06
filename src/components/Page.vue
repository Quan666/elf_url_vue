<template>
  <div :class="{page_pc_width: isPC}">
    <el-tabs class="page_pc_height" type="border-card" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="短链接" name="first">
        <el-input placeholder="请输入想要缩短的链接" v-model="input1">
          <template slot="prepend">http://</template>
        </el-input>
      </el-tab-pane>
      <el-tab-pane label="一言密语" name="second">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="input2">
        </el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="text"
          placeholder="请输入暗号"
          v-model="pwd"
          maxlength="10"
          show-word-limit>
        </el-input>
      </el-tab-pane>
      <el-tab-pane label="阅后即焚" name="third">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="input3">
        </el-input>
      </el-tab-pane>
      <el-button style="margin: 20px 0; " type="primary" @click="getUrl">生成</el-button>
<!--      结果展示-->
      <el-card v-if="isShowRes" shadow="hover">
        <QRCode :text="url"></QRCode>
      </el-card>
    </el-tabs>
  </div>
</template>

<script>
import QRCode from '@/components/QRCode'
import axios from 'axios'
export default {
  name: 'Page',
  data () {
    return {
      isPC: true,
      activeName: 'first',
      input1: '',
      input2: '',
      input3: '',
      pwd: '',
      isShowRes: false,
      url: 'http://myelf.club'
    }
  },
  created () {
    this.isPC = this._isPC()
    // console.log(this.isPC)
  },
  methods: {
    handleClick (tab, event) {
      // console.log(this.activeName)
      this.isShowRes = false
    },
    _isPC () {
      const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      // console.log(flag)
      return !flag
    },
    getUrl () {
      switch (this.activeName) {
        case 'first':this.getUrlFirst()
          break
        case 'second':this.getUrlSecond()
          break
        case 'third':this.getUrlThird()
          break
      }
    },
    getUrlFirst () {
      if (this.input1.trim().length <= 0) {
        this.$message.error('链接不能为空!')
        return
      }
      axios
        .post('/api/url/insert', {
          url: this.input1
        })
        .then(response => {
          this.url = response.data.data.shortUrl
          console.log(this.url)
          this.isShowRes = true
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    },
    getUrlSecond () {
      if (this.pwd.trim().length <= 0 || this.input2.trim().length <= 0) {
        this.$message.error('密语与暗号不能为空!')
        return
      }
      axios
        .post('/api/cipher/insert', {
          message: this.input2,
          passwd: this.pwd
        })
        .then(response => {
          this.url = response.data.data.shortUrl
          console.log(this.url)
          this.isShowRes = true
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    },
    getUrlThird () {
      if (this.input3.trim().length <= 0) {
        this.$message.error('内容不能为空!')
        return
      }
      axios
        .post('/api/oneread/insert', {
          message: this.input3
        })
        .then(response => {
          this.url = response.data.data.shortUrl
          console.log(this.url)
          this.isShowRes = true
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    }
  },
  components: {
    QRCode
  }
}
</script>

<style scoped>
div{
  margin: 0 auto;
}
.page_pc_width{
  width: 50%;
  min-width: 400px;
}
.page_pc_height{
  min-height: 300px;
}
</style>
