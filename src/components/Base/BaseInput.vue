<template>
    <input
    class="base-input"
    :type="this.type"
    :name="this.name"
    :placeholder="this.placeholder"
    :disabled="this.disabled"
    @click="click">
</template>
  
<script>
export default {
  props: {
    placeholder: {type: String, required: true},
    disabled: Boolean,
    type: { type: String },
    name: { type:String }
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style>
/* input[type=email],
input[type=password]{
    width: 100%;
    height: 2.5rem;
    border-radius: 0.8rem;
    border: 1px solid #ccc;
    color: black;
    padding: 0.625rem;
}

input[type=email]::placeholder,
input[type=password]::placeholder{
    color: #ccc;
}
input[type=email]:focus::placeholder,
input[type=password]:focus::placeholder{
    color: #aaa;
}

input[type=submit]{
    height: 2.5rem;
    text-align: center;
    background: #0fca32;
    margin-top: 3rem;
    border: none;
    border-radius: 0.3rem;
    color: white;
    transition: all 0.3s;
}

input[type=submit]:hover{
    background: #0b751e;
}
input[type=submit]:active{
    box-shadow: inset 3px 3px 8px #065013, inset -3px -3px  8px #065013;
} */
  


</style>
