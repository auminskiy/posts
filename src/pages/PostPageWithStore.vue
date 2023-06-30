<template>
    <div>
        <h1>{{ $store.state.isAuth ? 'auth' : 'not auth' }}</h1>
   <h2>{{ $store.getters.doubleLikes }}</h2>
   <div> 
    <my-button @click="$store.commit('incrementLikes')">like</my-button>
    <my-button  @click="$store.commit('decrementLikes')">dislike</my-button>
</div>
     <h1>Posts</h1>
     <my-input v-focus :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="search"/>
     <div>
       <my-button @click="showDialog">Click to add post</my-button>
       <my-select :value="selectedSort" :options="sortOptions"></my-select>
     </div>
     
     <my-dialog v-model:show="dialogVisible">
       <PostForm @create="addNewPost"/>
     </my-dialog>
    
    <PostList  :posts="searchedPosts" @remove="removePost"/>
   
    <div ref="observer" class="observer"></div>
   <!-- <div class="pages">
     <div v-for="pageN in totalPages" :key="pageN" class="page" :class="{'currentPage': page === pageN}" @click="changePage(pageN)">{{ pageN }}</div>
    </div> -->
    </div>
   </template>
   
   <script>
   import PostForm from '@/components/PostForm.vue'
   import PostList from '@/components/PostList.vue'
   
   import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
   
   
   export default {
   components: {
   PostForm, PostList,
   
   },
   
    data() {
     return {
   
       dialogVisible: false,
 
   }},
    methods: {
        ...mapMutations({
            setPage: 'setPage',
            setSearchQuery: 'setSearchQuery'
        }),
        ...mapActions({
            loadMorePosts: 'loadMorePosts',
            fetchPosts: 'fetchPosts'
        }),
        ...mapGetters({

        }),


     addNewPost(post){
       this.posts.push(post);
       this.dialogVisible = false
     },
     inputTitle(e) {
       this.title = e.target.value;
     },
     inputBody(e) {
       this.body = e.target.value;
     },
     removePost(post){
       this.posts = this.posts.filter(p => p.id !== post.id)
     },
     showDialog(){
       this.dialogVisible = true;
   
     },
     
   // changePage(pageN) {
    // this.page = pageN;
    // this.fetchPosts()
   // }
    },
     mounted() {
       this.fetchPosts();
       console.log(this.$refs.observer)
       let options = {
     rootMargin: "0px",
     threshold: 1.0,
   };
   const callback = (entires,) => {
     if (entires[0].isIntersecting && this.page < this.totalPages ) {
       console.log('intersecting')
       this.loadMorePosts()
     }
   }
   
   const observer = new IntersectionObserver(callback, options);
   observer.observe(this.$refs.observer)
     },
   
   
   
     computed: {
        ...mapState({
        
        posts: state => state.post.posts,
        isLoading: state => state.post.isLoading,
        searchQuery: state => state.post.searchQuery,
        page: state => state.post.page,
        limit: state => state.post.limit,
        totalPages: state => state.post.totalPages,
        sortOptions: state => state.post.sortOptions
    
        }),
        ...mapGetters({
            sortedPosts: 'sortedPosts',
            searchedPosts: 'searchedPosts',
        })
  
     },
     watch: {
       selectedSort(newValue) {
         console.log(newValue)
         this.posts.sort((a, b) => {
           return a[newValue]?.localCompare(b[newValue])
         })
       },
       dialogVisible(newValue) {
         console.log(newValue)
       }
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
