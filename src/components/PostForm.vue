<template>
    <div>
        <form class="form" @submit.prevent>
   <my-input  v-model="post.title" type="text" placeholder="title" />
   <my-input v-model="post.body"  type="text" placeholder="description" />
   
     </form>
     <my-button @click="addNewPost()">add post</my-button>
     
    </div>
   </template>
   
   <script>

   
   export default {
  
    data() {
  return {
    post:{
  title: '',
  body:'',
    },
    newId: 4,
    
}},

methods: {
  addNewPost: function() {
    this.post.id = this.newId++
    this.$emit('create', this.post, 'param', 'more param')
    this.post = {
        title: '',
        body: '',
    }
  },
  watch: {
    post: {
        handler(newval) {
            console.log(newval)
        },
        deep: true
    }
  }
 
}}
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
     border: 4px solid #2c3e50;
     margin: 10px;
     padding: 5px;
   }
   .form{
    display: block;
    justify-content: center;
    align-content: center;
    margin-top: 100px;
   }
   </style>
   