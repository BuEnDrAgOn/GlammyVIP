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
        return BereApi.patch('/users/' + params.userID , params)
    },
}
