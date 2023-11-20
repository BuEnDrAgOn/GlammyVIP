<template>
    <div class="wrap-content animationList">
        <section class="modificar-container">
            <div class="contenedor-flex">
                <div class="input-column">
                    Nombre
                    <input type="text" v-model="fromNameDefault" >
                </div>
                <div class="input-column">
                    Apellido Paterno:
                    <input type="text" v-model="fromFLastname">
                </div>
                <div class="input-column">
                    Apellido Materno:
                    <input type="text" v-model="fromMLastname">
                </div>
            </div>

            <div class="input-column direccion">
                Direccion
                <input type="text" v-model="fromDirection" placeholder="Ingrese la dirección proporcionada por googlemaps">
            </div>
            
            
            <button class="btn-modificar" @click="updateUser()">Actualizar</button>

        </section>
    </div>
</template>

<script>
import { userService } from '@/services/index'
export default {

    data(){
        return {
            user:{},
            autoUser:{
                name: localStorage.getItem(1),
                fathers_lastname: localStorage.getItem(3),
                mothers_lastname: localStorage.getItem(4),
                direction: localStorage.getItem(5)
            }
        }
    },

    methods:{
        reloadPage(){
            location.reload()
        },

        loadUser(){
            new Promise((response, reject) =>{
                userService.getUserByID({params: localStorage.getItem(2)})
                .then(response =>{
                    let {data} = response
                    this.user = data[0]
                })
            })
        },
        updateUser(){
            this.user.names = this.autoUser.name
            this.user.fathers_lastname = this.autoUser.fathers_lastname
            this.user.mothers_lastname = this.autoUser.mothers_lastname
            this.user.direction = this.autoUser.direction

            new Promise((response, rej) =>{
                userService.patchUser({params: this.user})
                localStorage.setItem(1, this.user.names)
                localStorage.setItem(3, this.user.fathers_lastname)
                localStorage.setItem(4, this.user.mothers_lastname)
                localStorage.setItem(5, this.user.direction)
                this.reloadPage()
            })
        }
    },

    computed:{
        fromNameDefault:{
            get(){
                return this.autoUser.name
            },
            set(name){
                return this.autoUser.name = name
            }
        },
        fromFLastname:{
            get(){
                return this.autoUser.fathers_lastname
            },
            set(lastname){
                return this.autoUser.fathers_lastname = lastname
            }
        },
        fromMLastname:{
            get(){
                if(this.autoUser.mothers_lastname == 'null' || this.autoUser.mothers_lastname == ''){
                    return ''
                }else{
                    return this.autoUser.mothers_lastname
                }
            },
            set(lastname){
                return this.autoUser.mothers_lastname = lastname
            }
        },
        fromDirection:{
            get(){
                if(this.autoUser.direction == 'null' || this.autoUser.direction == ''){
                    return ''
                }else{
                    return this.autoUser.direction
                }
            },
            set(address){
                return this.autoUser.direction = address 
            }
        },
    },

    created(){
        this.loadUser()
    }

}
</script>

<style>
.animationList{
    animation: displayList 1.2s;
}

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