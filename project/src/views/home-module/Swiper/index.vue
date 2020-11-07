<template>
  <div class="swiper-container projectswiper">
    <div class="swiper-wrapper">
        <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination project-swiper-pagination" ></div>
  </div>
</template>

<script>
import Swiper from 'swiper'// js
import 'swiper/swiper-bundle.css'
export default {
  props: ['preview', 'myclassname'],
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.' + this.myclassname, {
      slidesPerView: this.preview,
      spaceBetween: this.myclassname === 'actorswiper' ? 30 : 10,
      freeMode: true,
      pagination: {
        el: '.project-swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .projectswiper{
    margin: 17px 7px;
  }
  .swiper-wrapper{
    img{
      width:100%;
    }
  }
  .swiper-container{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
  }
</style>
