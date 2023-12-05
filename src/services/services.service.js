import BereApi from "@/api/apiURL.js";

export const serviceService = {
    getServices: async () => {
        return BereApi.get(`/services` )
    },
    getTreatment: async ({params}) => {
        return BereApi.post(`/services/treatment`, params)
    },
    getPrices: async ({params}) => {
        return BereApi.post(`/services/price`, params)
    },
    getServiceById: async ({params}) => {
        return BereApi.get(`/services/` + params.id_service)
    },
    postService: async ({params}) => {
        return BereApi.post(`/services/create`, params)
    },
    patchService: async ({params}) => {
        return BereApi.patch('/services/' + params.serviceID , params)
    },
}