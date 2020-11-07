<template>
<div>
  <div id="v-content" v-bind:style="{minHeight: Height+'px'}"><router-view></router-view></div>
  <TabBar />
</div>
</template>
<script>
import TabBar from '@/components/TabBar'
export default {
  components: {
    TabBar
  },
  data () {
    return {
      Height: 0
    }
  },
  mounted () {
    //  动态设置内容高度 让footer始终居底   header+footer的高度是100
    this.Height = document.documentElement.clientHeight - 300
    //  监听浏览器窗口变化
    window.onresize = () => { this.Height = document.documentElement.clientHeight - 300 }
  }
}
</script>
