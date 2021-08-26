import axios from "axios";

const API = axios.create({
    baseURL: "http://giftme.site/",
})

const getToken = () => {
    const token = JSON.parse(localStorage.getItem("user")).access
    return token
}

export default {
    createUser: (data) => API.post("auth/users/", data),
    createJWT: (data) => API.post("auth/jwt/create/", data),
    getUser: (id) => API.get("users/" + id, {
        headers: {
            "Authorization" : "Bearer " + getToken()
        }
    }),
}