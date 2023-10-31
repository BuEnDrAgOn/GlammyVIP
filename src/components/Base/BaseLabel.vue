<template>
    <label :for="this.name" @click="focus">{{this.label}}</label>
</template>

<script>
export default {
    props:{
        name: { type:String, required: true },
        label: { type: String, required: true}
    }
}
</script>

<style>
/* label:first-of-type{
    margin-top: 3rem;
}

label{
    text-align: start;
    margin-top: 2rem;
}

label:hover{
    cursor:pointer
} */

</style>