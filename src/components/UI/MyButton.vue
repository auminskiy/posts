<template>
       <button class="btn">
        <slot></slot>
       </button>
 
   </template>
   
   <script>
   
   
   export default {
    name: 'my-button'
     
    }
   </script>
   
   <style>
  .btn{
    color: #4a533f;
    border: 2px solid #2d641f;
    background: none;
    border-radius: 7px;
  }
   </style>
   