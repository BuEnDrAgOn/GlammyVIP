<template>
<div>
            <a href="#" class="back-to-top"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
            <!-- Inicio de Cabecera -->
            <!-- Fin de cabecera -->

            <section class="wrap">
                <section id="info">
                    <!-- Inicio Banner -->
                    <div id="banner" class="text-center">
                        <h1>BereNails | Estética</h1>
                        <!-- Fin Banner -->
                    </div>
                </section>
            </section>
            <div class="wrap-login">
                <section class="form-register">
                    <h4>Registrarme</h4>
                        <input class="controls" v-model="user.names" type="text" name="nombres" id="name" placeholder="Ingrese su Nombre" autofocus>
                        <input class="controls" v-model="user.fathers_lastname" type="text" name="apellidos" id="fathers_lastname" placeholder="Ingrese su Apellido">
                        
                        <label class="error" for="" v-if="(page.phone!=null)">{{this.page.phone}}</label>
                        <input class="controls" v-model="user.phone" type="number" @change="handlePhone" name="telefono" id="phone" placeholder="Ingrese su Teléfono" maxlength="10">
                        
                        <label class="error" for="" v-if="(page.message!=null)">{{this.page.message}}</label>
                        <input class="controls" v-model="user.password" @change="handlePassword" type="password" name="contraseña" id="password" placeholder="Ingrese su Contraseña">
                        
                        <label class="error" for="" v-if="(page.confirmPassword != null)">{{this.page.confirmPassword}}</label>
                        <input class="controls" v-model="page.cPassword" type="password" @change="confirmPassword" name="contraseña" id="confirmPassword" placeholder="Repita su Contraseña">
                        
                        <input class="botons" @click="sendRegisterUser" type="submit" value="Registrar">
                        <p>¿Ya tienes cuenta?  <a href="login">Inicia Sesión</a></p>
                </section>
            </div>
    </div>
</template>

<script>
import { BaseInput, BaseLabel } from "@/components/Base/base.js";
import { userService } from "@/services/index"

export default {
  components: {
  },
  data(){
    return {
      user: {
        names: null,
        fathers_lastname: null,
        phone: null,
        password: null,
      },
      page:{
        message: null,
        confirmPassword: null,
        cPassword: null,
        phone: null,
      },
      confirmed: false
    }
  },
  methods:{
    handlePassword(event){
      let value = event.target.value
      this.user.password = value,

      value.length >= 8 ? this.page.message = null :
        (this.page.message = "Debe tener al menos 8 caracteres",
         this.confirmed = false)
    },
    confirmPassword(event){
      let value = event.target.value
      this.page.cPassword = value
      this.user.password === value && value.length >= 8 ? 
        (this.page.confirmPassword = null, this.confirmed = true) :
        (this.page.confirmPassword = "Las contraseñas no coinciden", this.confirmed = false)
    },

    handlePhone(event){
      let value = event.target.value
      this.user.phone = value

      value.length == 10 ? this.page.phone = null :
      (this.page.phone = "Introduzca un número celular válido",
       this.confirmed = false)
    },

    sendRegisterUser(){
      this.user.names != null ? 
        this.user.fathers_lastname != null ?
          this.user.phone != null && this.user.phone.length == 10?
            this.confirmed == true ?
                new Promise((response, reject) =>{
                  userService.postUser({params: this.user})
                  .then((response) =>{
                    console.log("Registrado")
                    this.$router.push({name: "login"})
                  })
                  .catch((err) =>{
                    reject(err);
                  })
                })
            : null
          :null 
        : null
      : null
    }
  }
};
</script>

<style>
label.error{
  color: red
}

.wrap-login{
    width: 100%;
    display: flex;
    justify-content: center;
}

.form-register {
    width: 400px;
    background: #ffffffc5;
    padding: 70px;
    padding-right: 100px;
    margin-top: 10px;
    margin-bottom: 3rem;
    border-radius: 10px;
    font-family: 'calibri'; 
    color: black;
    box-shadow: 7px 13px 37px #000;
  }
  
  .form-register h4 {
    background-color: #DB57C3;
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center; 
    padding: 0.3rem;
    padding-left: 20px;
    width: 100%;
    color: white;
    border-radius: 0.5rem;
  }
  .form-register a {
    font-weight: bold;
    text-align: center; 
  }
  
  .controls {
    width: 100%;
    background: white;
    padding: 10px !important;
    border-radius: 4px !important;
    margin-bottom: 16px !important;
    border: 1px solid #fc55f3 !important;
    font-family: 'calibri';
    font-size: 18px;
    color: black !important;
  }
  
  .form-register p {
    width: 100%;
    height: 40px;
    text-align: center;
    font-size: 18px;
    line-height: 40px;
  }
  
  .form-register a {
    color: #DB57C3;
    text-decoration: none;
    transition: all 0.3s;
  }
  
  .form-register a:hover {
    color: #FFAFF0;
    text-decoration: underline;
  }
  
  .form-register .botons {
    width: 100%;
    background: #DB57C3;
    border: none;
    padding: 12px;
    color: white;
    margin: 16px 0;
    font-size: 1.3rem;
    border-radius: 2rem;
    transition: all 0.3s;
  }

  .form-register .botons:hover{
    background-color: #fc55f3;
  }
  ::placeholder { color: #ccc }




body{
    background: white;
    background-image: url(@/assets/img/pattern.png);
}




/* input:valid + span::after{
    content: "✓";
    position: absolute;
    right: 37%;
    top: 37.5%;
    font-size: 1.3rem;
    font-weight: bolder;
    color: green;
}
input:invalid + span::after{
    content: "✖";
    position: absolute;
    right: 37%;
    top: 37.5%;
    font-size: 1.3rem;
    font-weight: bolder;
    color: rgb(128, 0, 0);
} */
</style>