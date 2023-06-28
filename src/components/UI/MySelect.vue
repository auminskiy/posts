<template>
 <select :value="modelValue"  @change="changeOption">
    <option disabled value="">choose</option>
    <option v-for="option in options" :key="option.value" :value="option.value">{{option.name}}</option>
 </select>
</template>

<script>


export default {
 name: 'my-select',
 props: {
    modelValue: {type: String, },
  
    options: {
        type: Array,
        default: () => []
    }
},
 methods: {
    changeOption(event) {
        this.$emit('update:modalValue', event.target.value)
        
        console.log(event.target.value)
        console.log(this.modelValue)
    }
 },

  
 }
</script>

<style>
.close__btn{
 color: #d34d54;
 border: none;
 background: none;
 font-weight: bold;

}
</style>
