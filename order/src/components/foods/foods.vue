<template>
  <div class="foods">
    <v-header :header-seller="seller"></v-header>
      <v-goods></v-goods>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
    <shopcart :select-foods="selectedFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  </div>
</template>

<script>
import header from '../header/header';
import shopcart from '../shopcart/shopcart'
import goods from '../goods/goods.vue';

const ERR_OK = 0;
export default {
  components: {
    'v-header': header,
    'v-goods': goods,
    shopcart
  },
  data() {
    return {
      seller: {},
    }
  },
  created() {

    var that = this;
    $.ajax({
      type: "get",
      url: "/api/seller",
      data: {},
      success: function(result) {
        that.seller = result.data;
      }
    });
  },
  computed: {
    selectedFoods() {
      return this.$store.state.foods;
    }
  },
  methods: {
    change (food) {
      this.foods = food;
    }
  }
}
</script>
