import axios from "axios";

const API = axios.create({
    baseURL: "http://giftme.site/",
})
const API_AUTH = axios.create({
    baseURL: "http://giftme.site/",
})

const getToken = () => {
    const token = JSON.parse(localStorage.getItem("user")).access
    return token
}

API.interceptors.request.use((request) => {
    request.headers = {
        "Authorization": "Bearer " + getToken(),
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
    }
    return request;
})

API.interceptors.response.use((config) => config,
    (error) => {
        if (error.response?.status === 401) {
            const user = JSON.parse(localStorage.getItem("user"))
            console.log(user)
            API_AUTH.post("auth/jwt/refresh/", {refresh: user.refresh})
                .then((res) => {
                    localStorage.setItem("user", JSON.stringify({
                        ...user,
                        access: res.data.access,
                        refresh: res.data.refresh,
                    }))
                    return error.response
                })
                .catch((err) => {
                    if (err.status === 401) {
                        localStorage.setItem("user", "")
                        window.location.refresh()
                    }
                })
        }
    })

export default {
    createUser: (data) => API_AUTH.post("auth/users/", data),
    createJWT: (data) => API_AUTH.post("auth/jwt/create/", data),
    createMyInfo: (id, data) => API.put("users/edit/" + id, data),
    createHoliday: (data) => API.post("holidays/create", data),
    createWish: (data) => API.post("wishes/create", data),
    getUser: (id) => API.get("users/" + id),
    getUsers: () => API.get("users/"),
    getMyHolidays: () => API.get("own-holidays/"),
    getMyWishes: () => API.get("own-wishes/"),
    deleteHoliday: (id) => API.delete("holidays/delete/" + id),
    deleteWish: (id) => API.delete("wishes/delete/" + id),
    editHoliday: (id, data) => API.put("holidays/edit/" + id, data),
    editWish: (id, data) => API.put("wishes/edit/" + id, data),
    changePassword: (data) => API.post("auth/users/set_password/", data)
}