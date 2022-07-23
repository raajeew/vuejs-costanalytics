<template>
  <div class="header-wrap">
    <PageHeader :menuItems="mainMenuItems" />
  </div>
  <div class="body-wrap">
    <router-view></router-view>
  </div>
  <div class="footer-wrap">
    <PageFooter />
  </div>
</template>

<script>

import PageHeader from './components/Header.vue'
import PageFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  },
  data(){
    return{
      mainMenuItems : [
          {id: '1', path:'/', name:'Dashboard'}, 
          {id: '2', path:'/providers', name:'Providers'}
        ]
    }
  }
}
</script>

<style>
body{
  background: #F2F4F6;
}
body, h1, h2, h3, h4, h5{margin: 0; padding: 0;}
h2{font-size: 1.2rem; font-weight: 400; color: #111;}
h3{font-size: 1rem; font-weight: 400;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 0px;
}
.header-wrap{
  display: block;
  height: 50px;
  box-shadow: 0px 1px 1px #ccc;
  background: #ffffff;
}
.body-wrap{
  display: block;
  min-height: calc(100vh - 100px);
  box-sizing: border-box;
  padding: 20px;
}
.footer-wrap{
  display: block;
  height: 50px;
  box-shadow: 0px 0px 1px #666;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
}

.card{
  background: #ffffff;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 12px 15px;
}
</style>
