import BereApi from "@/api/apiURL.js";

export const appointmentService = {
    getAppointment: async ({params}) => {
        return BereApi.get(`/appointment`,  {params} )
    },
    getAppointmentByUserId: async ({params}) => {
        return BereApi.get(`/appointment/` + params)
    },
    postAppointment: async ({params}) => {
        return BereApi.post(`/appointment/create`, params)
    },
    patchAppointment: async ({params}) => {
        return BereApi.patch('/appointment/' + params.userID , params)
    },
}
