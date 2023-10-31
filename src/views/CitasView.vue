<template>
  <div>
     <section id="wrap-citas">
        <table id="citas" class="table table-bordered table-hover mt-3">
            <thead class="table-head table-dark text-center">
                <th>Tratamiento</th>
                <th>Fecha y hora</th>
                <th>Precio</th>
            </thead>
            <tbody class="text-center">
                <tr v-for="appointment in appointments" :key="appointment.id">
                    <td>{{treatment[appointment.id_service].treatment}}</td>
                    <td>{{momentFormat(appointment.date)}} | 10:00pm</td>
                    <td>${{treatment[appointment.id].price}}</td>
                </tr>
            </tbody>
        </table>
        <table id="citas-precio" class="table table-bordered table-hover mt-3">
            <thead class="table-head text-center">
                <th class="table-dark w-50">
                    Precio total
                </th>
                <th class="pagototal">$300</th>
            </thead>
        </table>
    </section>
  </div>
</template>

<script>
import {  appointmentService, serviceService } from '@/services/index'
import moment from 'moment'

export default {

    data(){
        return{
            treatment: [],
            appointments: [],
            services: null,
        }
    },

    methods:{
        momentFormat(e){
            moment(e).format('YYYY-MM-DD')
        },

        loadAppointments(){
            new Promise ((response, reject) =>{
                appointmentService.getAppointmentByID({params: localStorage.getItem(2)})
                .then(response => {
                    let {data} = response
                    this.appointments = data
                    console.log()
                })
            })
        },

        loadTreatment(){
            new Promise ((response, reject) => {
                serviceService
                .getServices()
                .then(response => {
                    let {data} = response
                    this.services = data
                    this.services.map((service, i) => {
                        this.treatment.push(service)
                    })
                })
            })
        }
    },

    created(){
        this.loadAppointments()
        this.loadTreatment()
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