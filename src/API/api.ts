import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '62b7d80a-d9a6-4291-984d-3406087f0afc'
    }
})

export const Users_API = {
    getUsers(currentPage: number, usersQuantityOnPage: number) {
        return instance
            .get(`users?page=${currentPage}&count=${usersQuantityOnPage}`)
            .then(res => {
                return res.data
            })
    },
    followUser(id: number) {
        return instance 
            .post('follow/'+id)
            .then(res =>  res.data)
    },
    unfollowUser(id: number) {
        return instance 
            .delete('follow/'+id)
            .then(res =>  res.data)
    }
}

export const Profile_API = {
    getUserProfile(id: string | undefined, authorized: number | null) {
        return instance
            .get(`profile/${ !id ? authorized : id }`)
            .then(res => {
                return res.data
            })
    },
    getUserStatus(id: string | undefined, authorized: number | null) {
        return instance 
            .get(`profile/status/${ !id ? authorized : id }`)
            .then(res => {
                return res.data
            })
    },
    setUserStatus(status: string) {
        return instance 
            .put(`profile/status`, {status})
            
    },
    setProfile(data: any) {
        let payload
        if(!data.hasOwnProperty('lookingForAJob')){
            payload = {...data,lookingForAJob: false}
        } else {
            payload = data
        }
        
        return instance 
            .put(`profile`, payload)
    },
    savePhoto(file: any) {
        const formData = new FormData();
        formData.append("image", file);
        return instance
            .put('profile/photo',formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
    }
}

export enum ResultCodesEnum {
    success = 0,
    error = 1,
    captcha = 10
}

interface AuthResponse  {
    resultCode: ResultCodesEnum
    messages: Array<string>
}

interface AuthMeResponseType extends AuthResponse{
    data: {
        id: number
        email: string
        login: string

    }
}

interface LoginResponseType extends AuthResponse {
    data: {
        userId: number
    }
}

interface LoginOutResponseType extends AuthResponse {
    data: object
}

export const Auth_API = {
    authMe() {
        return instance
            .get<AuthMeResponseType>('auth/me')
            .then(res => {
                return res.data
            })

    },
    login(email: string, password: string,rememberMe = false, captcha: null | string = null) {
        return instance
            .post<LoginResponseType>('auth/login',{email,password,rememberMe,captcha})
    },
    logout() {
        return instance
            .delete<LoginOutResponseType>('auth/login')
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

export const Security_API = {
    getCaptcha() {
        return instance.get('security/get-captcha-url')
    }
}

export const ToDoList_API = {
    getToDoList() {
        return instance.get('todo-lists')
    },
    addToDoListItem(title: string) {
        return instance.post('todo-lists',{title}).then(res => res.data)
    },
    removeToDoListItem(id: string) {
        return instance.delete('todo-lists/' + id)
    },
    updateToDoListItem(title: string, id: string) {
        return instance.put('todo-lists/' + id,{title}).then(res => res.data)
    }
}