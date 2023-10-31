<template>
      <div class="wrap-content">
        <section class="serv-container">
            <div class="contenedor" @click="show = !show">
                <div class="elemento background-pestañas">
                    <h2 class="h2-service">Pestañas</h2>
                </div>
                <transition name="show-items">
                    <div class="oculto" v-if="show">Hibridas</div>
                </transition>
            </div> 

            <div class="contenedor">
                <div class="elemento background-cabello">
                    <h2 class="h2-service">Cabello</h2>
                </div>
                <div class="oculto">Alasiados</div>
            </div> 
            
            <div class="contenedor">
                <div class="elemento background-uñas">
                    <h2 class="h2-service">Uñas</h2>
                </div>
                <div class="oculto">Gelish</div>
                <div class="oculto">Esculturales</div>
            </div> 
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show: true,
        }
    },
    
    methods:{
        

    }

}
</script>

<style>

.show-items-enter-active, .show-items-leave-active{
    transition: all 0.3s
}


.show-items-enter, .show-items-leave-to{
    opacity: 0;
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

.contenedor-lista{
    width: 100%;
    margin: 20px 0;
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
    width: 100%;
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
    background-image: url("@/assets/img/serv-pestañas.jpg");
    background-size: cover;
    background-position-x: 0px ;
    background-position-y: 60% ;
    background-repeat: no-repeat;
}


.background-cabello{
    background-image: url("@/assets/img/serv-cabello.jpg");
    background-size: cover;
    background-position-x: 0px ;
    background-position-y: 60% ;
    background-repeat: no-repeat;
}

.background-uñas{
    background-image: url("@/assets/img/serv-uñas.jpg");
    background-size: cover;
    background-position-x: 0px ;
    background-position-y: 19% ;
    background-repeat: no-repeat;
}

.oculto{
    display: flex;
    background-color: #e37acf;
    color: #fff;
    font-weight: 600;
    font-size: 20px;
    justify-content: center;
    padding: 10px;
    margin-top: 10px;
}

.oculto:hover{
    background-color: #d11ab0;
    cursor: pointer;
}


.visible {
    display: block;
    transition: opacity 1.2s;
}

.ver{
    opacity: 1;
    transition: opacity 1.2s;
}
</style>