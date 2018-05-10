<template>
  <div>  
    <div class="weui-search-bar" id="searchBar">
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
            </div>
            <label class="weui-search-bar__label" id="searchText">
                <i class="weui-icon-search"></i>
                <span>搜索</span>
            </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
    </div>

    <div class="weui-cells__title">请选择床位号</div>
    <div class="weui-cells">
      <div class="weui-cell ward-bed weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">病区号</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" v-model="selectedDepartment" id="wards" v-on:change="ward">
            <option v-for="department in departments" :value="department.id" :key="department.id">{{department.name}}</option>
          </select>
        </div>
      </div>
      <div class="weui-cell ward-bed weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">床位号</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" id="beds">
            <option v-for="major in beds" :value="major.id" :key="major.id">{{major.name}}</option>
          </select>
        </div>
      </div>
    </div>

    <div class="weui-btn-area">
      <router-link :to="{ name: 'foods' }"  class="weui-btn weui-btn_blue" tag="a" @click.native="order">确定</router-link>
    </div>
    <v-nav></v-nav>
  </div>



</template>


<script>
import Vue from "vue";

import navs from "../small_components/navs";

const ERR_OK = 0;
export default {
  data: function() {
    return {
      departments: [],
      selectedDepartment: "",
    };
  },

  mounted() {
    var that = this;
    $.ajax({
      type: "get",
      url: "/api/ward",
      data: {},
      success: function(result) {
        that.departments = result.data;
        console.log(that.departments);

        var wardid = localStorage.getItem("ward-id");
        var wardname = localStorage.getItem("ward-name");
        console.log("病区id为：" + wardid + "；病区名为：" + wardname);
        that.selectedDepartment = wardid;
      }
    });
  },

  methods: {
    ward: function(event) {
      var ward = document.getElementById("wards");
      var wardid = ward.options[ward.selectedIndex].value;
      var wardname = ward.options[ward.selectedIndex].innerText;
      localStorage.setItem("ward-id", wardid);
      localStorage.setItem("ward-name", wardname);
    },

    order: function(e) {
      var ward = document.getElementById("wards");
      var wardid = ward.options[ward.selectedIndex].value;
      var wardname = ward.options[ward.selectedIndex].innerText;

      var bed = document.getElementById("beds");
      var bedid = bed.options[bed.selectedIndex].value;
      var bedname = bed.options[bed.selectedIndex].innerText;

      localStorage.setItem("ward-id", wardid);
      localStorage.setItem("ward-name", wardname);
      localStorage.setItem("bed-id", bedid);
      localStorage.setItem("bed-name", bedname);
    }
  },

  computed: {
    beds: function() {
      var beds = [];
      var selectedDepart = this.$data.selectedDepartment;
      this.$data.departments.forEach(function(d) {
        if (d.id == selectedDepart) {
          beds = d.beds;
        }
      });
      return beds;
    }
  },

  components: {
    "v-nav": navs
  }
};
</script>


