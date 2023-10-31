<template>
  <div>

    <div></div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'HomeView',
  components: {
    
  },
  data() {
    return {
      text: null,

    }
  },
  methods: { 
    handleText( value ){
      this.text = value
      console.log( this.text )
    },
   }
  
}
</script>
<style>


</style>
