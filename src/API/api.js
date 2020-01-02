import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'cacb93f0-c6bd-40cd-9b85-22a8768dd33f'
    }
})

export const Users_API = {
    getUsers(currentPage,usersQuantityOnPage) {
        return instance
            .get(`users?page=${currentPage}&count=${usersQuantityOnPage}`)
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
    }
}

export const Profile_API = {
    getUserProfile(id,authorized) {
        return instance
            .get(`profile/${ !id ? authorized : id }`)
            .then(res => {
                return res.data
            })
    },
    getUserStatus(id,authorized) {
        return instance 
            .get(`profile/status/${ !id ? authorized : id }`)
            .then(res => {
                return res.data
            })
    },
    setUserStatus(status) {
        return instance 
            .put(`profile/status`, {status})
            
    }
}

export const Auth_API = {
    authMe() {
        return instance
            .get('auth/me')
            .then(res => {
                console.log(res.data)
                return res.data
            })

    }
}

export const News_API = {
    getNews() {
        return axios.get('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=9c77ec0f913b4a999a51f9620bbbc824')
        .then(res => {
            return res.data.articles
        })
    }
}

