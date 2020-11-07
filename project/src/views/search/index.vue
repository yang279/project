<template>
  <div>
    <Header title="搜索"/>
    <search>
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
    </search>
  </div>
</template>

<script>
import Header from '@/views/home-module/Header'
export default {
  components: {
    Header
  }
}
</script>

<style>

</style>
