import BereApi from "@/api/apiURL.js";

export const userService = {
    getUser: async ({params}) => {
        return BereApi.get(`/users`,  {params} )
    },
    getUserByPhone: async ({params}) => {
        // console.log(params)
        return BereApi.post(`/users/phone`, params)
    },
    getUserByID: async ({params}) => {
        return BereApi.get(`/users/` + params)
    },
    postUser: async ({params}) => {
        return BereApi.post(`/users/create`, params)
    },
    patchUser: async ({params}) => {
        console.log(params)
        return BereApi.patch('/users/update/' + params.id , params)
    },
}
