<template>
 <div>
  <NavBar></NavBar>
<router-view>

</router-view>
 </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
components: {
  NavBar
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
 
}
.posts{
  border: 4px solid #a2abb4;
  margin: 10px;
  padding: 5px;
  background-color: rgb(224, 231, 194);
}
.pages{
display: flex;
justify-content: center;
margin-top: 10px;
}

.page{
  padding: 5px;
  
}
.currentPage{
  font-weight: bold;
  color: goldenrod;
  border: 2px solid gold;
  border-radius: 25px;
}
.observer{
  height: 50px;
  
}
</style>
