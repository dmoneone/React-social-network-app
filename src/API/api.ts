import axios from 'axios'
import { UserType } from '../Redux/UsersReducer'
import { ProfileType } from '../Redux/ProfilePageReducer'
import { ToDoItemType } from '../Redux/TodoListReducer'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '62b7d80a-d9a6-4291-984d-3406087f0afc'
    }
})

type GetUsersResponse = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}

type DefaultResponse = {
    resultCode: ResultCodesEnum
    messages: Array<string>
    data: object
}

export const Users_API = {
    getUsers(currentPage: number, usersQuantityOnPage: number) {
        return instance
            .get<GetUsersResponse>(`users?page=${currentPage}&count=${usersQuantityOnPage}`)
            .then(res => {
                return res.data
            })
    },
    followUser(id: number) {
        return instance 
            .post<DefaultResponse>('follow/'+id)
            .then(res =>  res.data)
    },
    unfollowUser(id: number) {
        return instance 
            .delete<DefaultResponse>('follow/'+id)
            .then(res =>  res.data)
    }
}

export const Profile_API = {
    getUserProfile(id: string | undefined, authorized: number | null) {
        return instance
            .get<ProfileType>(`profile/${ !id ? authorized : id }`)
            .then(res => {
                return res.data
            })
    },
    getUserStatus(id: string | undefined, authorized: number | null) {
        return instance 
            .get<string>(`profile/status/${ !id ? authorized : id }`)
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

type NewsArticle = {
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
}

type NewsResponse = {
    status: string
    source: string
    sortBy: string
    articles: Array<NewsArticle>
}

export const News_API = {
    getNews() {
        return axios.get<NewsResponse>('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=9c77ec0f913b4a999a51f9620bbbc824')
        .then(res => {
            return res.data.articles
        })
    }
}

type CaptchaResponse = {
    url: string
}

export const Security_API = {
    getCaptcha() {
        return instance.get<CaptchaResponse>('security/get-captcha-url')
    }
}

export const ToDoList_API = {
    getToDoList() {
        return instance.get<Array<ToDoItemType>>('todo-lists')
    },
    addToDoListItem(title: string) {
        return instance.post('todo-lists',{title}).then(res => res.data)
    },
    removeToDoListItem(id: string) {
        return instance.delete<DefaultResponse>('todo-lists/' + id)
    },
    updateToDoListItem(title: string, id: string) {
        return instance.put<DefaultResponse>('todo-lists/' + id,{title}).then(res => res.data)
    }
}