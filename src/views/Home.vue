<template>
  <div class="home">
    <el-container>
      <el-header>
        <MyTitle title_txt="ELF 短链" introduction="在下方方框内输入需要缩短的链接"/>
      </el-header>
      <el-main>
        <Page/>
      </el-main>
      <el-footer>
        <MyFoot/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MyTitle from '@/components/MyTitle'
import Page from '@/components/Page'
import MyFoot from '@/components/MyFoot'

export default {
  name: 'Home',
  components: {
    MyTitle,
    Page,
    MyFoot
  }
}
</script>
