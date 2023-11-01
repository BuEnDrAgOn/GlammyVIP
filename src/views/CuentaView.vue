<template>
    <div class="wrap-content">
        <section class="modificar-container">
            <div class="contenedor-flex">
                <div class="input-column">
                    Nombre
                    <input type="text" v-model="user.name">
                </div>
                <div class="input-column">
                    Apellido Paterno:
                    <input type="text" v-model="user.fathers_name">
                </div>
                <div class="input-column">
                    Apellido Materno:
                    <input type="text" v-model="user.mothers_name">
                </div>
            </div>

            <div class="input-column direccion">
                Direccion
                <input type="text" v-model="user.direction">
            </div>
            
            
            <button class="btn-modificar" @click="updateUser()">Modificar</button>

        </section>
    </div>
</template>

<script>
import { userService } from '@/services/index'
export default {

    data(){
        return {
            user:{},
        }
    },

    methods:{
        show(){
            console.log(this.user.fathers_name)
        },

        loadUser(){
            new Promise((response, reject) =>{
                userService.getUserByID({params: localStorage.getItem(2)})
                .then(response =>{
                    let {data} = response
                    this.user = data
                    console.log(this.user)
                })
            })
        },
        updateUser(){
            new Promise((response, rej) =>{
                userService.patchUser({params: this.user})
            })
        }
    },
    created(){
        this.loadUser()
    }

}
</script>

<style>
.wrap-content{
    display: flex;
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
}

.modificar-container{
    display: flex;
    flex-flow: wrap row;
    background-color: white;
    box-shadow: 0px 0px 10px #ccc;
    border: 1px solid #e2e2e1b2;
    border-radius: 0.3rem;
    width: 70%;
    padding: 3rem;
    min-height: 47.7vh;
}

.modificar-container *{
    flex-grow: 1;
    flex-flow: wrap;
}

.input-column{
    display: flex;
    flex-grow: 1;
    flex-flow: wrap column;
    font-size: 1.3rem;
    padding: 0.25rem;

}

.input-column input{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    font-size: 1.1rem;
    padding: 4px;

}

.direccion{
    width: 100%;
}

.contenedor-flex{
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    width: 100%;
}

.btn-modificar{
    padding: 1rem;
    border-radius: 0.60rem;
    font-size: 1rem;
    margin: 20px auto;
    border: none;
    background-color: #DB57C3;
    color: white;
    font-weight: 900;
    transition: all 0.3s;
}

.btn-modificar:hover{
    background: #D11AB0;
    transform: scale(1,1.3);
}
</style>