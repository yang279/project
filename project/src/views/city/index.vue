<template >
  <div>
    <Header title="位置"/>
    <mt-index-list ref="mylist" >
      <mt-index-section :index="data.index" v-for="data in datalist" :key="data.index">
        <div @click="handleClick(city.cityId,city.name)" v-for="city in data.list" :key="city.cityId">
          <mt-cell :title="city.name">
          </mt-cell>
        </div>
      </mt-index-section>

    </mt-index-list>

  </div>
</template>

<script>
import Header from '@/views/home-module/Header'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    Header
  },
  data () {
    return {
      datalist: []
    }
  },

  mounted () {
    // console.log(this.$refs.mylist.$el)
    window.addEventListener('scroll', this.handleScroll, { passive: false })
    this.$refs.mylist.$el.style.height = document.documentElement.clientHeight - 110 + 'px'

    axios({
      url: 'https://m.maizuo.com/gateway?k=5776137',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
        'X-Host': 'mall.film-ticket.city.list'

      }
    }).then(res => {
      // console.log(res.data);
      this.datalist = this.handleCity(res.data.data.cities)
    })
  },

  methods: {
    handleCity (datalist) {
      console.log(datalist)
      var letterArr = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      // console.log(letterArr)

      var newlist = []
      for (var j = 0; j < letterArr.length; j++) {
        var arr = datalist.filter(item => item.pinyin.substring(0, 1) === letterArr[j].toLowerCase())
        // console.log(arr)
        if (arr.length > 0) {
          newlist.push({
            index: letterArr[j],
            list: arr
          })
        }
      }
      console.log(newlist)
      return newlist
    },
    handleClick (id, name) {
      console.log(id)
      localStorage.setItem('cityId', id)
      localStorage.setItem('cityName', encodeURIComponent(name))
      this.$router.push('/cinema')
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
