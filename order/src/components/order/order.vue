<template>
  <div>
    <div class="weui-panel" v-for="order in getFalseOrder" :key="order.order_id">
      <div class="weui-panel__hd">
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <p>{{order.ward_name}}&nbsp;-&nbsp;{{order.bed_name}}</p>
          </div>
          <div class="weui-cell__ft">
            <div v-if="order.order_state==='待付款'" class="color-danger">
              <i class="icon iconfont icon-dingdanwancheng"></i> 
              {{order.order_state}}
            </div>
            <div v-else-if="order.order_state==='正在派送'" class="color-info">
              <i class="icon iconfont icon-paobu"></i> 
              {{order.order_state}}
            </div>
            <div v-else-if="order.order_state==='已完成'" class="color-primary">
              <i class="icon iconfont icon-shijian"></i> 
              {{order.order_state}}
            </div>
            <div v-else>
              <i class="icon iconfont icon-shijian"></i> 
              {{order.order_state}}
            </div>
          </div>
        </div>
      </div>
      <div class="weui-panel__bd">
        <div class="weui-media-box weui-media-box_text">
          <div v-for="(menu, index) in order.order_menu" :key="menu.index">
              <div class="weui-cell">
                  <div class="weui-cell__hd"><img :src="menu.pic" alt="" style="width:20px;margin-right:5px;display:block"></div>
                  <div class="weui-cell__bd font-size-14">
                      <p>{{menu.name}}</p>
                  </div>
                  <div class="weui-cell__ft">
                    <span class="font-size-12">￥{{menu.price.toFixed(2)}} </span>
                    x{{menu.num}}
                  </div>
              </div>
          </div>
        </div> 
        <div class="weui-form-preview__bd border-top-1">
            <div class="weui-form-preview__item">
                <label class="weui-form-preview__label">{{order.order_time}}</label>
                <span class="weui-form-preview__value color-danger">
                  ￥ 
                  {{itemPrice}}
                  <span>{{order.order_price}}</span>
                </span>
            </div>
        </div>
      </div>
    </div>
    <v-nav></v-nav>
  </div>

</template>

<script>
import Vue from "vue";

import navs from "../small_components/navs";

const ERR_OK = 0;
export default {
  data() {
    return {
      getFalseOrder: [],
    };
  },
  created(){
    this.$http.get("api/order")
              .then(res => res.data.data)
              .then(data => this.getFalseOrder = data);
  },
  mounted() {
    var wardid = localStorage.getItem("ward-id");  // 病区id
    var wardname = localStorage.getItem("ward-name"); // 病区号
  },
  computed:{
    itemPrice(){
      this.getFalseOrder.forEach(element => {
        let price = 0;
        element.order_menu.forEach(ele => {
          price += ele.price * ele.num
        })
        element.order_price = price.toFixed(2)
        return true
      })
    }
  },
  components: {
    "v-nav": navs
  }
};
</script>


<style>
.weui-cell:before {
  content: none
}
.font-size-14{
  font-size: 14px;
}
.border-top-1{
  border-top: 1px solid #eee;
}
.font-size-12{
  font-size: 12px;
}
.color-info{
  color: #10AEFF;
}
</style>

