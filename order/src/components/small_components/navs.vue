<template>
  <div class="tabs">
    <!--命名路由-->
    <ul>
      <router-link :to="{name:'home'}" tag="li" exact>
        <div>
          <i class="icon iconfont icon-shouye"></i>
        </div>
        <div>首页</div>
      </router-link>
      <router-link :to="{name:'order'}" tag="li">
        <div>
          <i class="icon iconfont icon-dingdan"></i>
        </div>
        <div>订单</div>
      </router-link>
      <router-link :to="{name:'personal'}" tag="li">
        <div>
          <i class="icon iconfont icon-wode"></i>
        </div>
        <div>我的</div>
      </router-link>
      <router-link :to="{name:'personal',params:{user:'yu'}}" tag="li">
        <div>
          <i class="icon iconfont icon-wode"></i>
        </div>
        <div>我的</div>
      </router-link>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {}
</script>
<style lang="less" type="text/less">
  .tabs {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px #999;
    width: 100%;
    & > ul, & > ul > li {
      margin: 0;
      padding: 0;
    }
    ul {
      display: table;
      width: 100%;
      & > li {
        width: 25%;
        text-align: center;
        font-size: 16px;
        display: table-cell;
        padding: 5px 12px;
        cursor: pointer;
        &.router-link-active{
          color: #26a2ff;
        }
        & > div {
          font-size: 12px;
          & > i {
            font-size: 20px;
          }
        }
      }
    }
  }
</style>
