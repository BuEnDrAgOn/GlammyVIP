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
                    <td>{{appointment.treatment}}</td>
                    <td>{{appointment.date}}</td>
                    <td>{{appointment.payment}}</td>
                </tr>
            </tbody>
        </table>
        <table id="citas-precio" class="table table-bordered table-hover mt-3">
            <thead class="table-head text-center">
                <th class="table-dark w-50">
                    Precio total
                </th>
                <th class="pagototal">{{ this.total }}</th>
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
            total: 0

        }
    },

    methods:{
        loadAppointments(){
            new Promise ((response, reject) =>{
                appointmentService.getAppointmentByUserId({params: localStorage.getItem(2)})
                .then(response => {
                    let {data} = response
                    this.appointments = data
                    this.appointments.map((appointment) => {this.total = this.total + appointment.payment})
                })
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