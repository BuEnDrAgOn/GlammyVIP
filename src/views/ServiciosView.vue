<template>
      <div class="wrap-content">
        <section class="serv-container" v-for="service in services" :key="service.id">
            <div class="contenedor" @click="display(service.service), serviceBackground(service.service)">
                <div class="elemento background-pestañas" :id="service.service">
                    <h2 class="h2-service">{{service.service}}</h2>
                </div>
                <transition-group name="show-items">
                    <div class="oculto"  :class="service.service + ' ' + setClass" v-for="treatment in treatments" :key="treatment.id">{{treatment.treatment}}</div>
                </transition-group>
            </div> 
        </section>
    </div>
</template>

<script>
import { serviceService } from '@/services/index'

export default {
    data(){
        return{
            show:{
                pestañas: false
            },

            treatments: {},

            allServices:[],

            services:[],

            setClass: "show-items-leave-active",
            height: "auto"

        }
    },
    
    methods:{
        display(service){
            let element = document.querySelectorAll('.'+service)
            element.forEach((hiddenElement, index) => {
                setTimeout(() => {
                    hiddenElement.classList.toggle('show-items-leave-active');
                    hiddenElement.classList.toggle('show-items-enter-active');
                    let aux;
                    hiddenElement.classList.contains('ver') ?
                    aux = 1000 :
                    aux = 100
                    setTimeout(() => {
                        hiddenElement.classList.toggle('ver')
                        hiddenElement.classList.toggle('visible')
                    },aux
                    )
                }, (index + 1) * 100)
            });
        },

        serviceBackground(service){
            let element = document.getElementById(service)
            element.style.background = `url(@/assets/img/serv-${service})`

        },

        loadServices(){
          new Promise((response, reject) => {
              serviceService.getServices()
              .then(response => {
                  let services = response.data.map((service) => {
                        return {
                            service: service.service,
                        }
                    })
                    this.services = this.getUniqueElements(services)
                    console.log(this.services)
                    this.treatments = response.data
                    
                })
            })
        },

        getUniqueElements( array ) {
            const uniqueE = [];
            return array.filter((object) => {
                const isDupple = uniqueE.includes(object.service)

                if( !isDupple ) {
                    uniqueE.push( object.service )

                    return true;
                }

                return false;
            })
        },

        loadTreatments(){
            new Promise((response, reject) => {

            })
        }

    },

    computed:{
        autoHeight(){
            let rem = this.treatments.length * 3.8 + 11
            this.height = `${rem}rem`
            return this.height
        }
    },

    created(){
        this.loadServices()
    }

}
</script>

<style>

.show-items-enter-active{
    animation: displayList 1.2s;
    animation-fill-mode: both;
}


.show-items-leave-active{
    animation: hideList 1.2s forwards
}

@keyframes displayList {
    0%, 60%, 75%, 90%, 100% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0%{
        opacity: 0;
        transform: translate3d(-3000px, 0, 0) scaleX(3)
    }
    60%{
        opacity: 1;
        transform: translate3d(25px, 0, 0) scaleX(1)
    }
    75%{
        transform: translate3d(-10px, 0, 0) scaleX(0.98)
    }
    90%{
        transform: translate3d(5px, 0, 0) scaleX(0.995)
    }
    100%{
        transform: translate3d(0, 0, 0)
    }
}

@keyframes hideList {
    20% {
        opacity: 1;
        transform: translate3d(-20px, 0, 0) scaleX(0.9);
    }
    100% {
        opacity: 0;
        transform: translate3d(2000px, 0, 0) scaleX(2);
    }
}

.serv-container{
    display: flex;
    flex-flow: wrap row;
    background-color: white;
    box-shadow: 0px 0px 10px #ccc;
    border: 1px solid #e2e2e1b2;
    border-radius: 0.3rem;
    width: 70%;
    padding: 1rem;
    min-height: 47.7vh;
}
.h2-service{
    background-color: #d11ab0ac ;
    padding: 10px;
    color: white;
    border-radius: 20px;
}


.lista{
    width: 100%;
    height: 100px;
    background-color: bisque;
    

    display: flex;
    justify-content: center;
    align-items: center;
}

.desplegable{
    list-style: none;
}

.desplegable li{
    background-color: blue;
    margin: 5px 0 ;
    transition: padding 1.1s ;
}

.desplegable li{
    padding: 10px 0px;
}

.none{
    display: none;
}


/* ejemplo */
.contenedor {
    display: flex;
    flex-flow: column;
    flex-grow: 1;
    margin: 20px 0;
}

.elemento {
    width: 100%;
    height: 100px;
    background-color: bisque;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
}

.background-pestañas{
    background-size: cover;
    background-position-x: 0px ;
    background-position-y: 60% ;
    background-repeat: no-repeat;
}


.background-cabello{
    background-size: cover;
    background-position-x: 0px ;
    background-position-y: 60% ;
    background-repeat: no-repeat;
}

.background-uñas{
    background-size: cover;
    background-position-x: 0px ;
    background-position-y: 19% ;
    background-repeat: no-repeat;
}

.oculto{
    display: none;
    flex-grow: 1;
    line-height: 1.8rem;
    background-color: #e37acf;
    color: #fff;
    font-weight: 600;
    font-size: 1.25rem;
    justify-content: center;
    padding: 1rem;
    margin-top: 10px;
    transition: all 0.3s;
}

.oculto:hover{
    background-color: #d11ab0;
    cursor: pointer;
}


.visible {
    display: flex;
}

</style>