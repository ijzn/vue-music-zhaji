<template>
  <div id="app">
    <mHeader></mHeader>
    <tab></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from '@/components/m-header/m-header'
import Tab from '@/components/tab/tab'
export default {
  name: 'App',
  components: {
    MHeader,
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
/* @import './common/stylus/variable';

#app
  color: $color-theme */

</style>
