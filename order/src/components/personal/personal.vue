<template>
  <div>


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
      selectedDepartment: ""
    };
  },

  components: {
    "v-nav": navs
  }
};
</script>

<style>

</style>


