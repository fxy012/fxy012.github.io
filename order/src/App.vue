<template>

  <div id="app">

    <transition name="router-fade" mode="out-in">
      <router-view class="padbm60"></router-view>
    </transition>

  </div>
</template>

<style lang="stylus">
@import './common/stylus/mixin.styl';

* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* router-fade */
.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .2s;
}
.router-fade-enter, .router-fade-leave-active {
  opacity: 0;
}

.padbm60{
  padding-bottom: 60px;
}

</style>
