<template>
  <div class="navbar">
<div @click="$router.push('/')">PostsApp</div>
<div class="nav-btn">
    <my-button @click="$router.push('/posts')">Posts</my-button>
    <my-button @click="$router.push('/info')" style="margin-left: 5px;">Information</my-button>
</div>
  </div>
</template>

<script>

export default {
 
}
</script>

<style>
.navbar{
    height: 40px;
    background-color: rgb(228, 240, 184);
    box-shadow: 2px 2px 4px 4px green;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}
</style>