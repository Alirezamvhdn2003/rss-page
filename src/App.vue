<template>
  <div class="text-center">
    <LoaderPage v-if="!isLoaded"/>
    <NavBar v-if="isLoaded"/>
    <News v-if="isLoaded"/>
  </div>
  
</template>

<script>
import News from './components/News.vue';
import NavBar from './components/NavBar.vue';
import LoaderPage from './components/LoaderPage.vue';

export default {
  name: 'App',
  components: { News, NavBar, LoaderPage }, 
  data(){
    return {
      isLoaded: false
    }
  },
  created(){
    console.log(this.$i18n)
    setTimeout(()=>{
      this.isLoaded = !this.isLoaded
    },1000)
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -16px;
  background-color: rgb(240, 248, 255);
} */
</style>
