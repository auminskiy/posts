<template>
    <div>
     <div class="posts">
       <strong>Head: {{ post.title }}</strong>
       <div>Description: {{ post.body }}</div>
       <my-button style="margin-right: 5px;" @click="$router.push(`/posts/${post.id}`)">Open</my-button>
       <my-button class="btn" @click="$emit('remove', post)">DELETE</my-button>
   </div>
   <div>

   </div>
    
    </div>
   </template>
   
   <script>

   
   
   export default {
 
props: {
    post: {
    type: Object,
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
   .posts{
     border: 4px solid #9daab6;
     margin: 10px;
     padding: 5px;
   }
  
   </style>
   