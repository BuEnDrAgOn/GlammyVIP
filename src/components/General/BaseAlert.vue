<template>
    <b-alert
    :variant="variant"
    :show="show"> 
        {{message}}
    </b-alert>
</template>

<script>
export default {
    props:{
        message: String,
        variant: String,
        show: Boolean
    },
}
</script>

<style>

</style>