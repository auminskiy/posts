<template>
    <div v-if="posts.length > 0">
     <h2>List</h2>
     <transition-group name="post-list">
        <PostItem v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)"/>
     </transition-group>
    
    </div>
    <h2 v-else>add the post into post's list</h2>
   </template>
   
   <script>
import PostItem from './PostItem.vue'

   
   export default {
    components: {
        PostItem
    },
props: {
    posts: {
    type: Array,
    required: true
}
},

     
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
   .post{
     border: 5px solid #482c50;
     margin: 10px;
     padding: 5px;
   }
   .post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all .7s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(120px);
}
   </style>
   