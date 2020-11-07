<template>
  <div id="main">
    <Header />
      <div id="content">
        <div class="project_menu">
          <div class="city_name">
            <router-link tag="div" to="/city">
            <span>大连</span>
            <i class="iconfont icon-icon-arrow-down"></i>
            </router-link>
          </div>
            <div class="search_entry">
              <router-link tag="div" to="/search" class="search-icon"></router-link>
              <router-link tag="div" to="/search" class="iconfont icon-sousuo"></router-link>
          </div>
        </div>
      </div>
      <router-view ></router-view>
  </div>
</template>
<script>
import Header from '@/views/home-module/Header'
export default {
  name: 'home',
  components: {
    Header
  }
}
</script>
<style lang="scss">
#content .project_menu{ width: 95%; height: 45px; border:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;margin: 10px auto; overflow: hidden; border-radius: 15px;}
.project_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px; border-right:#e6e6e6 1px solid; padding-right: 10px; }
.project_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.project_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.project_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.project_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.project_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.project_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.project_menu .search_entry .search-icon{ width: 90%;}
.project_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.project_menu .search_entry ,.icon-sousuo{  font-size:24px; color:rgb(48, 90, 245);}
</style>
