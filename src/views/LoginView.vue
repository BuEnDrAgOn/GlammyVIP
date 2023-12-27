<template>
  <div>
      <section class="wrap">
        <!-- Inicio Banner -->
        <div id="banner" class="text-center">
            <h1>Glammy | Estética</h1>
            <!-- Fin Banner -->
        </div>
      </section>
      <div class="wrap-login">
        <section class="form-register">
            <h4>Inicio de Sesión</h4>
            <label class="error" v-if="(page.message!=null)">{{this.page.message}}</label>
            <input class="controls" v-model="user.phone" type="number" name="telefono" id="telefono" placeholder="Ingrese su Teléfono" required autofocus>
            <!-- <span class="validity"></span> -->
            <input class="controls" v-model="user.password" type="password" name="contraseña" id="contraseña" placeholder="Ingrese su Contraseña" @keydown.enter="loginUser">
            <input class="botons" type="submit" value="Iniciar Sesión" @click="loginUser">
            <p>¿No tienes Cuenta? <a href="register">¡¡Registrate!!</a></p>
        </section>
    </div>
  </div>
</template>

<script>
import { userService } from "@/services/index"

export default {


  data(){
    return{
      user:{
        phone: null,
        password: null,
      },
      page:{
        message: null
      },
      userLogin: "LOGIN"
    }
  },

  methods:{
    loginUser(){
      this.user.phone = parseInt(this.user.phone)
      new Promise((response, reject) =>{
        userService.getUserByPhone({params: this.user})
        .then((response =>{
          console.log(response.data)
          this.user.password == response.data[0].password ? 
          (localStorage.setItem(1, response.data[0].names),
           localStorage.setItem(2, response.data[0].id),
           localStorage.setItem(3, response.data[0].fathers_lastname),
           localStorage.setItem(4, response.data[0].mothers_lastname),
           localStorage.setItem(5, response.data[0].direction),
           response.data[0].admin == true ? 
            localStorage.setItem("admin", response.data[0].admin) : null,
           this.page.message = null, this.$router.push({
            name: "Index",
            params: {user: response.data[0], location: location.replace("index")}
           }))
          : this.page.message = "Usuario o contraseña incorrectos"
        }))
        .catch((err) =>{
          reject(err)
        })
      })
    }
  },

  created() {
    localStorage.clear()
  }
  
}


</script>

<style>

</style>