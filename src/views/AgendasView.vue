<template>
      <div class="wrap-content font-family-bonito">
        <section id="agendar-container">
            <div>
                <div>
                    <label for="name">Nombre</label>
                    <input type="text" name="name" id="" v-bind:value="user.names" placeholder="Ingrese los datos" required :disabled=true>
                </div>
                <div>
                    <label for="fathers lastname">Apellido Paterno</label>
                    <input type="text" name="lastname" v-bind:value="user.fathers_lastname" placeholder="Ingrese los datos" required :disabled=true>
                </div>
                <div>
                    <label for="mothers lastname">Apellido Materno</label>
                    <input type="text" name="lastname" v-bind:value="user.mothers_lastname" placeholder="Ingrese los datos" :disabled=true>
                </div>
                <div class="agendar-cita">
                    <label for="">Seleccione el motivo</label>
                    <label for="" class="error" v-if="(page.service!=null)">{{this.page.service}}</label>
                    <select name="" id="" required size="1rem 2rem" autofocus @change="setService($event)">
                        <option value="" v-for="service in services" :key="service.id">{{service.service}}</option>
                    </select>
                </div>
                <div class="agendar-cita">
                    <label for="">Seleccione tratamiento</label>
                    <label for="" class="error" v-if="(page.treatment!=null)">{{this.page.treatment}}</label>
                    <select name="" id="" required @change="setTreatment($event)">
                        <option value="" v-for="treatment in treatments" :key="treatment.id">{{treatment.treatment}}</option>
                    </select>
                </div>
                <div class="agendar-cita">
                    <label for="">Agende cita</label>
                     <label for="" class="error" v-if="(page.calendar!=null)">{{this.page.calendar}}</label>
                    <input type="date" v-model="date.calendar" @change="handleCalendar">
                </div>
                <div class="agendar-cita">
                    <label for="">Indique Hora</label>
                     <label for="" class="error" v-if="(page.hour!=null)">{{this.page.hour}}</label>
                    <input type="time" v-model="date.hour" @change="handleHour">
                </div>
                <div class="agendar-cita coste">
                    <label for="">Coste</label>
                    <input type="text" :disabled=true v-bind:value="price">
                </div>
                <div class="agendar-cita submit">
                    <button @click="sendAppointment" :disabled="isLoading">Enviar</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import {userService, serviceService, appointmentService} from '@/services/index'
import moment from 'moment'

export default {
    data(){
        return{
            user:{
                names: null,
                fathers_lastname: null,
                mothers_lastname: null,
                phone: null,
                password: null,
            },
            appointment:{
                service: null,
                id_service: null,
                id_user: null,
                appointment: null,
                price: null,
            },
            date:{
                calendar: null,
                hour: null,
            },
            operations: [],
            services: [],
            treatments: [],
            serviceSelected:{
                service: null
            },
            page:{
                service: null,
                treatment: null,
                calendar: null,
                hour: null
            },
            price: null,
            confirmed: false,
            isLoading: false,
        }
    },
    methods:{
        handleService(){
            this.appointment.service == null ?
            (this.page.service = "Debe seleccionar un servicio",
             this.confirmed = false) :
            (this.page.service = null,
             this.confirmed = true)
        },

        handleTreatment(i){
            this.appointment.treatment == null ?
            (this.page.treatment = "Debe seleccionar un tratamiento",
             this.confirmed = false) :
            (this.page.treatment = null,
             this.confirmed = true,
             this.price = this.treatments[i].price,
             this.appointment.price = this.treatments[i].price,
             this.appointment.id_service = this.treatments[i].id)
        },

        handleCalendar(){
            this.date.calendar < moment().format('YYYY-MM-DD') || this.date.calendar == null?
            (this.page.calendar = "Seleccione un día válido",
             this.confirmed = false) :
            (this.page.calendar = null,
             this.confirmed = true)
        },
        handleHour(){
            this.date.hour == null ?
            (this.page.hour = "Seleccione una hora",
             this.confirmed = false) :
            (this.page.hour = null,
             this.confirmed = true)
        },

        loadUser(){
            new Promise((response, reject) =>{
                localStorage.getItem(2) != null ?
                    userService.getUserByID({params: localStorage.getItem(2)})
                    .then(response =>{
                        this.user.names = response.data[0].names
                        this.user.fathers_lastname = response.data[0].fathers_lastname
                        this.user.mothers_lastname = response.data[0].mothers_lastname
                    })
                : 
                    this.user.names = null
                    this.user.fathers_lastname = null
                    this.user.mothers_lastname = null
            })
        },
        loadServices(){
          new Promise((response, reject) => {
              serviceService.getServices()
              .then(response => {
                  let services = response.data.map((service) => {
                        return {
                            service: service.service
                        }
                    })
                    this.operations = response.data;
                    this.services = this.getUniqueElements(services)
                })
            })
        },
        loadTreatment(){
            // console.log(this.serviceSelected)

            let thing = this.serviceSelected.service
            this.serviceSelected.service = String(thing)

            new Promise((response, reject) => {
                serviceService
                .getTreatment({params: this.serviceSelected})
                .then(response =>{
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
        setService(e) {
            this.serviceSelected.service = e.target.options[e.target.options.selectedIndex].text;
            this.loadTreatment()
            this.appointment.service = this.serviceSelected.service
            this.handleService()
            // console.log(this.serviceSelected);
        },

        setTreatment(e){
            this.appointment.treatment = e.target.options[e.target.options.selectedIndex].text;
            this.handleTreatment(e.target.options.selectedIndex)
            console.log(this.appointment.id_service)
        },

        sendAppointment(){
            this.isLoading = true
            this.appointment.appointment = this.date.calendar + ' ' + this.date.hour + ':00'
            this.handleService()
            this.handleCalendar()
            this.handleHour()

            this.confirmed == true ?
                this.appointment.service != null ?
                    this.appointment.treatment != null ?
                        this.appointment.appointment !=null && this.date.calendar > moment().format('YYYY-MM-DD')?
                            new Promise((response, reject) => {
                                appointmentService.postAppointment({params: this.appointment})
                                this.$router.push({name:"Citas"})
                            })
                        :null
                    :null
                :null
            :null
        }
    },

    computed:{

    },

    mounted(){
        this.loadUser()
        localStorage.getItem(1) == null ?
        this.$router.push({
            name: "Login"
        }) : null
        this.loadServices()
        this.appointment.id_user = localStorage.getItem(2)
    }
}
</script>

<style>

#agendar-container label.error{
    font-size: 1rem;
}

#agendar-container div > div.agendar-cita.submit{
    align-items: center;
    flex-basis: 100%;
}

#agendar-container div > div.agendar-cita.submit > button{
    background: #FFAFF0;
    border: 1px solid #ccc;
    color: white;
    border-radius: 1rem;
    font-size: 2rem;
    padding: 0.5rem;
    width: 50%;
    transition: all 0.3s;
}
#agendar-container div > div.agendar-cita.submit > button:hover{
    background: #DB57C3;
    transform: scale(1.3,1.3);
}

.font-family-bonito{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    animation: fadeInDown 1.2s
}

@keyframes fadeInDown {
    0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
}
    100% {
        opacity: 1;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
}

#agendar-container{
    display: flex;
    flex-flow: wrap row;
    background-color: white;
    box-shadow: 0px 0px 10px #ccc;
    border: 1px solid #e2e2e1b2;
    border-radius: 0.3rem;
    width: 70%;
    padding: 1rem;
    min-height: 47.7vh;
}

#agendar-container *{
    flex-grow: 1;
}

#agendar-container > div{
    display: flex;
    flex-flow: wrap row;
    justify-content: space-between;
    align-items: center;
}
#agendar-container > div > div{
    padding: 0 1%;
    flex-grow: 1;
    flex-basis: 30%;
    justify-content: center;
    display: flex;
    flex-flow: wrap column;
    padding: 1rem;
}

#agendar-container > div > div:last-of-type{
    margin-bottom: 0;
}

#agendar-container > div .agendar-cita{
    flex-basis: 40%;
}

#agendar-container > div  label{
    font-size: 1.35rem;
    margin-bottom: 0.4rem;
}


div input[type="text"],
div select,
div input[type="date"],
div input[type="time"]{
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    transition: all 0.3s;
    font-size: 1.1rem;
}

div select option{
    background-color: white;
    color: black;
}

div select:hover{
    background-color: #DB57C3;
    color: white;
}

div input::placeholder{
    color: #ccc;
}

div input:read-only{
    background-color: #e2e2e1b2;
    color: #555;
}

</style>