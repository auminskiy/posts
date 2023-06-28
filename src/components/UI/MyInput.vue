<template>
   <input :value="modelValue" @input="updateInput" class="input" type="text"/>
   


</template>

<script>


export default {
 name: 'my-input',
 props: {
    modelValue: [String, Number]
 },
 methods: {
    updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
    }
 }
  
 }
</script>

<style>
.input{
width: 50%;
border: 1px solid blueviolet;
padding: 10px;
margin-bottom: 5px;
border-radius: 5px;
}
</style>
