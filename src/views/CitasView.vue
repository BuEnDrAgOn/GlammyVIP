<template>
  <div>
     <section id="wrap-citas">
        <table id="citas" class="table table-bordered table-hover mt-3">
            <thead class="table-head table-dark text-center">
                <th v-if="admin">Cliente</th>
                <th>Tratamiento</th>
                <th>Fecha y hora</th>
                <th>Precio</th>
                <th v-if="admin">Celular</th>
                <th v-if="admin">Dirección</th>
            </thead>
            <tbody class="text-center">
                <tr v-for="appointment in appointments" :key="appointment.id">
                    <td v-if="admin">{{appointment.names + ' ' + appointment.fathers_lastname + ' ' + appointment.mothers_lastname}}</td>
                    <td>{{appointment.treatment}}</td>
                    <td>{{appointment.date}}</td>
                    <td>${{appointment.payment}}.00</td>
                    <td v-if="admin">{{appointment.phone}}</td>
                    <td v-if="admin">{{appointment.direction}}</td>
                </tr>
            </tbody>
        </table>
        <table id="citas-precio" class="table table-bordered table-hover mt-3">
            <thead class="table-head text-center">
                <th class="table-dark w-50">
                    Precio total
                </th>
                <th class="pagototal">${{ this.total }}.00</th>
            </thead>
        </table>
    </section>
  </div>
</template>

<script>
import {  appointmentService, serviceService } from '@/services/index'

export default {

    data(){
        return{
            appointments: [],
            total: 0,
            admin: localStorage.getItem("admin")

        }
    },

    methods:{
        loadAppointments(){
            new Promise ((response, reject) =>{
                if(this.admin){
                    appointmentService.getAppointmentAdmin()
                    .then(response => {
                        let {data} = response
                        this.appointments = data
                        this.appointments.map((appointment, i) => {
                            this.total = this.total + appointment.payment
                            console.log(this.appointments[i].mothers_lastname)
                            appointment.mothers_lastname == 'null' ?
                            this.appointments[i].mothers_lastname = '' : null
                            console.log(this.appointments[i].mothers_lastname)
                            appointment.direction == 'null' ?
                            this.appointments[i].direction = '[No tiene dirección]' : null
                        })
                    })
                }else{
                    appointmentService.getAppointmentByUserId({params: localStorage.getItem(2)})
                    .then(response => {
                        let {data} = response
                        this.appointments = data
                        console.log(data)
                        this.appointments.map((appointment) => {this.total = this.total + appointment.payment})
                    })
                }
            })
        },
    },

    created(){
        this.loadAppointments()
    }

}
</script>

<style>
@import url(@/assets/css/bootstrap.min.css);

label{
    margin: 0 !important;
}

.table-dark{
    background: black;
}

th{
    padding: 0.3rem;
}

td{
    background: white !important;
}

.pagototal{
    background: white !important;
}
</style>