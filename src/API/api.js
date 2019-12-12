import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'cacb93f0-c6bd-40cd-9b85-22a8768dd33f'
    }
})

const API = {
    getUsers(currentPage,usersQuantityOnPage) {
        return instance
            .get(`users?page=${currentPage}&count=${usersQuantityOnPage}`)
            .then(res => {
                return res.data
            })
    },
    getUserProfile(id,authorized) {
        return instance
            .get(`profile/${!id ? authorized : id}`)
            .then(res => {
                return res.data
            })
    },
    followUser(id) {
        return instance 
            .post('follow/'+id)
            .then(res =>  res.data)
    },
    unfollowUser(id) {
        return instance 
            .delete('follow/'+id)
            .then(res =>  res.data)
    },
    authMe(authMe) {
        return instance
            .get(authMe)
            .then(res => res.data.data)

    }
}

export default API