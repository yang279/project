<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>
<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '学生招聘网'
    }
  }
}
</script>
<style lang="scss" scoped>
#header{width:100%; height:60px; color: black; border-bottom: 1px solid #ddd; position: relative;  transform:translate3d(0,0,0);overflow:hidden;}
#header h1{ font-size: 22px; text-align: center; line-height: 60px; }
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>
