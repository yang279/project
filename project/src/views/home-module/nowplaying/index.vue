<template>
    <div>
    <div id="Swiper-box">
        <mt-swipe :auto="4000" id="mint-swipe">
        <mt-swipe-item><img src="@/assets/images/work1.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/images/work2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/images/work2.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
      <swiper preview='5' class='actorswiper' myclassname='actorswiper'>
        <div class="swiper-slide" v-for="(data, index) in datalist" :key="index">
          <img :src="data" alt="">
        </div>
      </swiper>
      <div class="information">
        <h3 class="recommend">推荐职业</h3>
        <div class="project-frame">
          <div class="project-frame-upside">
            <div class="details">
              <h4 class="profession">手机技术员（普洱）</h4>
              <div class="wage">4500-5999元</div>
            </div>
            <div class="all-message">
              <div class="require">
                <div class="erea">云南-普洱</div>|
                <div class="experinence">不限经验</div>|
                <div class="education">大专学历</div>
              </div>
              <div class="release-time">
                <div class="time">16：30</div>
              </div>
            </div>
          </div>
          <div class="project-frame-down">
            <img src="" alt="">
            <div class="company">云南乐笑有限公司</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'
import Vue from 'vue'
import Swiper from '@/views/home-module/Swiper'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default {
  name: 'nowplaying',
  data () {
    return {
      datalist: [
        require('@/assets/images/logo1.svg'),
        require('@/assets/images/logo2.svg'),
        require('@/assets/images/logo3.svg'),
        require('@/assets/images/logo4.svg'),
        require('@/assets/images/logo5.svg'),
        require('@/assets/images/logo6.svg'),
        require('@/assets/images/logo7.svg'),
        require('@/assets/images/logo8.svg'),
        require('@/assets/images/logo9.svg'),
        require('@/assets/images/logo10.svg'),
        require('@/assets/images/logo11.svg'),
        require('@/assets/images/logo12.svg')
      ]
    }
  },
  components: {
    Swiper
  }
}
</script>
<style lang="scss">
    #Swiper-box{width: 97%; margin: 0 auto; }
    #mint-swipe{height: 200px;img{height: 100%;width: 100%;border-radius: 10px;}.mint-swipe-indicator.is-active{background: rgb(48, 90, 245);}}
    .information{ transform:translate3d(0,0,0);overflow:hidden;.recommend{width: 92%;margin: 0 auto;}}
    .project-frame{
      box-shadow: 0 0 10px 0 rgba(56,81,76,.12);
      width: 92%;
      margin: 0 auto;
      border-radius: 10px;
      .project-frame-upside{
        position: relative;
        border-bottom: dotted 1px #d3d3d3;
        margin: 10px;
        .details{
        display: flex;
        margin: 5px 0;
        width: 100%;
        justify-content:  space-between;
        .profession{
          margin: 10px;
        }
        .wage{
          color:#fd7d17;
          font-size: 15px;
           margin: 10px;
        }
      }
      .all-message{
        display: flex;
        justify-content: space-between;
        margin: 0 10px;
        .require{
        display: flex;
        justify-content: flex-start;
        font-size: 14px;
        .education,.experinence{
            padding: 0 5px ;
        }
        .erea{
          padding: 0 5px 0 0 ;
          margin: 0 0 10px 0;
        }
        }
        .release-time{
          font-size: 12px;
        }
      }
    }
  }
  .project-frame-down{
        width: 100%;
        margin: 10px;
        height: 20px;
        img{
          width: 10%;
        }
        .company{
          font-size: 14px;
          line-height: 15px;
          margin: 0 10px;
        }
      }
</style>
