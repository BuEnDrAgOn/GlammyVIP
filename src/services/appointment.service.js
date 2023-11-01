import BereApi from "@/api/apiURL.js";

export const appointmentService = {
    getAppointment: async ({params}) => {
        return BereApi.get(`/appointment`,  {params} )
    },
    getAppointmentByUserId: async ({params}) => {
        return BereApi.get(`/appointment/` + params)
    },
    getAppointmentAdmin: async () => {
        return BereApi.get(`/appointment/admin/admin`)
    },
    postAppointment: async ({params}) => {
        return BereApi.post(`/appointment/create`, params)
    },
    patchAppointment: async ({params}) => {
        return BereApi.patch('/appointment/' + params.userID , params)
    },
}
