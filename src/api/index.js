import axios from 'axios'
const API = axios.create({baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts' + "/post", newPost)
export const deletePost = (id) => API.delete('/posts' +`/delete/${id}`)
export const updatePost = (id, post) => API.put('/posts' + `/update/${id}`, post)
export const like = (id) => API.patch('/posts' + `/like/${id}`)

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)