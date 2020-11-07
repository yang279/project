<template>
  <div>
      <div class="top">
          <div class="top-height">
              <i class="iconfont icon-zuobian"></i>
              <p class="register">注册账号</p>
          </div>
          <div class="welcome">欢迎登录</div>
      </div>
      <div class="center">
        <div class="username">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            </div>
        <div class="password">
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            </div>
        <div class="button">
            <mt-button class="mint-button mint-button--primary mint-button--large">登录</mt-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .top{
        width: 100%;
        .top-height{
            width: 92%;
            margin: 20px auto 0 ;
            display: flex;
            justify-content: space-between;
            .iconfont{
                font-size: 18px;
            }
            .register{
                color: rgb(48, 90, 245);
            }
        }
        .welcome{
            margin: 30px 30px;
            font-size: 25px;
            font-weight: 20px;
        }
    }
    .center{
        margin: 0 0 20px 0;
        .password{
            margin: 0 0 20px 0 ;
        }
    }
</style>
