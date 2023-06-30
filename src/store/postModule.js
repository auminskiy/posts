import axios from "axios";

export const postModule = {
    state: () => ({
        newid: 4,
        posts: [],
        isLoading: false,
        searchQuery: '',
        selectedSort: '',
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
          {value: 'title', name: 'by name'},
          {value: 'body', name: 'by description'},
        ]
    
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => {
                  return post1[state.selectedSort]?.localCompare(post2[state.selectedSort])
                  
                })
                
          },
        searchedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
          }
    },
    mutations:{
     setPosts(state, posts) {
        state.posts = posts
     },
     setIsLoading(state, isLoading) {
        state.isLoading = isLoading
     },
     setPage(state, page) {
        state.page = page
     },
    
     setTotalPages(state, totalPages) {
        state.totalPages = totalPages
     },
     setSearchQuery(state, searchQuery) {
        state.searchQuery = searchQuery
     },
     
        }, 
    actions: {
        async fetchPosts({state, commit}) {
            try {
              commit('setIsLoading', true)
             
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                  _page: state.page,
                  _limit: state.limit
                }}
                )
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                console.log(response)
                commit('setPosts',  response.data)
         
            }
            catch (e) {
              alert('error')
            }
            finally {
                commit('setIsLoading', false)
            }
          },
          async loadMorePosts({state, commit}) {
            try {
                commit('setIsLoading', true)
             
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                  _page: state.page,
                  _limit: state.limit
                }}
                )
                commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
                console.log(response)
                commit('setPosts', [...state.posts, ...response.data])
         
            }
            catch (e) {
                console.log(e)
              alert('error')
            }
           
          },
        },
}