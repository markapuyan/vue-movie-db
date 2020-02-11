<template>
  <div id="app">
    <Header/>
    <Search/>
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>
<script>
import Header from '@/components/Common/HeaderComponent'
import Search from '@/components/Search/SearchComponent'
export default {
  components: {
    Header,
    Search
  }
}
</script>
<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
