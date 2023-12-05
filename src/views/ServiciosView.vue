<template>
  <div>
    <div class="wrap-content">
      <section class="serv-container" v-for="service in services" :key="service.id">
          <div class="contenedor" @click="display(service.service), serviceBackground(service.service)">
              <div class="elemento background-pestañas" :id="service.service">
                  <h2 class="h2-service">{{service.service}}</h2>
              </div>
              <transition-group name="show-items">
                  <!-- <div class="oculto"  :class="service.service + ' ' + setClass" v-for="treatment in treatments" :key="treatment.id" @click="redirection()">{{treatment.treatment}}</div> -->
                  <div class="oculto"  :class="service.service + ' ' + setClass" v-for="treatment in treatments.filter(treatment => treatment.service == service.service)" :key="treatment.id" @click="redirection(treatment.treatment)">{{treatment.treatment}}</div>
              </transition-group>
          </div> 
      </section>

    </div>
      <button id="AddServices" @click="displayModal" v-if="admin">Añadir Servicios</button>
      <div v-if="displayAddService" class="modal-background">
        <section class="modal-wrap">
          <div>
            <button @click="closeModal" class="closeModal"><i class="fa fa-times"></i></button>
          </div>
          <div class="modal-content">
            <h2>Agregue un servicio</h2>
            <div>

              <div>
                <label for="service">Servicio</label>
                <input type="text" v-model="newService.service" id="service" @input="onlyLetters" @change="capitalize">
              </div>

              <div>
                <label for="service">Tratamiento</label>
                <input type="text" v-model="newService.treatment" id="treatment" @input="onlyLetters" @change="capitalize">
              </div>

              <div>
                <label for="service">Precio</label>
                <input type="text" v-model="newService.price" id="price"  @input="onlyNumbers">
              </div>

            </div>
          </div>
          <button @click="addNewService" class="submitNewService">Agregar</button>
        </section>
      </div>
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
          admin: localStorage.getItem("admin"),
          displayAddService: false,

          newService:{
            service: '',
            treatment: '',
            price: ''
          }

      }
  },
  
  methods:{
    capitalize(){
      let value = this.newService.treatment
      let value2 = this.newService.service
        this.newService.treatment = value.replace(/\b\w/g, l => l.toUpperCase())
        this.newService.service = value2.replace(/\b\w/g, l => l.toUpperCase())
    },

    onlyLetters(){
      let value = this.newService.treatment
      let value2 = this.newService.service
        this.newService.treatment = value.replace(/[^a-zA-z ]/g, '')
        this.newService.service = value2.replace(/[^a-zA-z ]/g, '')
    },

      onlyNumbers(){
        let value = this.newService.price
        this.newService.price = value.replace(/[^\d]/g, '')
      },

      addNewService(){
        console.log(this.newService)
        new Promise((res, rej) =>{
          serviceService.postService({params: this.newService})
          .then((res =>{
            location.reload()
          }))
        })
      },

      displayModal(){
        this.displayAddService = true;
      },

      closeModal(){
        this.displayAddService = false;
      },

      display(service){
          let element = document.querySelectorAll('.'+service)
          // console.log(this.height)
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

      redirection(value){
        let treat = value
          this.$router.push({
              name: 'Agendas',
              params:{treat}
          })
      },

      serviceBackground(service){
          // let element = document.getElementById(service)
          // element.style.background = `url(@/assets/img/serv-${service})`

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
      },
      // heroimage() {
      //     return {
      //     backgroundimage: `url${require('@/assets/img/serv-Manicure.jpg')}`
      //     };
      // }

  },

  computed: {

  },

  created(){
      this.loadServices()
  }

}
</script>

<style>

.modal-background{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.modal-wrap{
  padding: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-flow: wrap column;
  position: fixed;
  width: 40%;
  border-radius: 1rem;
  
  background: white;
}

.modal-wrap button.submitNewService{
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  border: none;
  border-radius: 1rem;
  margin: 0 auto;
  margin-top: 1rem;
  font-size: 1.3rem;
  color: #333;

  box-shadow: 0px 0px 7px 5px rgba(64,60,67,.16);
  transition: all 0.3s;
}

.modal-wrap button.submitNewService:hover{
  background: #ffffff;
  color: black;
}

.modal-wrap > div:first-of-type{
  display: flex;
  flex-flow: wrap column;
  width: 100%;
  align-items: flex-end;
}


.modal-content > h2{
  text-align: center;
}

.modal-content > div{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem;
}

.modal-content > div > div{
  display: flex;
  flex-flow: wrap column;
  flex-basis: 180px;
  flex-grow: 1;
}

.modal-content input{
  width: 100%;
}

.closeModal{
  padding: 0.5rem;
  line-height: 0;
  background: transparent;
  color: red;
  border: 1px solid red;
  border-radius: 0.3rem;

  transition: all 0.3s;
}

.closeModal:hover{
  text-align: center;
  background: red;
  color: white;
  border: 1px solid rgb(170, 5, 5);
}

#AddServices{
  box-sizing: border-box;
  display: flex;
  /* position: fixed; */
  bottom: 1rem;
  right: 1rem;

  padding: 1rem;
  margin: 0 auto;
  background: white;
  border: 3px solid #E37ACF;
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 40%;

  font-size: 1.3rem;
  justify-content: center;

  transition: all 0.3s;
}

#AddServices:hover{
  background: #E37ACF;
  color: white;
  border: 3px solid #E37ACF;
}

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
  animation: fadeInDown 1.2s;
}

.elemento {
  width: 100%;
  height: 100px;
  background-color: #D11AB0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
     border-radius: 0.3rem;
  
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
  border-radius: 0.3rem;
}

.oculto:hover{
  background-color: #d11ab0;
  cursor: pointer;
}


.visible {
  display: flex;
}

</style>