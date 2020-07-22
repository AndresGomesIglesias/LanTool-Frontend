import axios from "axios";
import { organizerURL } from "./serviceConfig"
import history from "../helpers/history"


function login(username, password) {
    var config = {
        headers: { 'Content-Type': 'application/json' },
    }
    return axios.post(`${organizerURL}accounts/login/`, JSON.stringify({ username, password }), config)
        .then(user => {
            console.log('1')
            localStorage.setItem('user', JSON.stringify(user.data.user))
            return user;
        });
}

function logout() {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user')
        history.push('/welcome', history.location)
        history.go()
    }
}

function register(users) {
    const data = {
        username: users.loginFullName,
        password: users.loginPassword,
        email: users.loginEmail,
        profile: {
            description: ""
        }
    }
    var config = {
        headers: { 'Content-Type': 'application/json' },
    }
    return axios.post(`${organizerURL}accounts/create/`, JSON.stringify(data), config)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user.data))
            return user;
        });
}

function udpate(users) {
    console.log('users', users)
    const data = {
        username: users.username,
        first_name: users.first_name,
        last_name: users.last_name,
        email: users.email,
        profile: {
            description: users.description,
        }
    }
    var config = {
        headers: { 'Content-Type': 'application/json' }
    }
    return axios.put(`${organizerURL}accounts/update/${users.id}/`, data, config)
        .then(user => {
            console.log('user', user)
            localStorage.setItem('user', JSON.stringify(user.data))
            return user
        });
}

function avatarUpdate(file, users) {
    const formData = new FormData();

    formData.append("avatar", file, file.name)
    var config = {
        headers: {  "Content-Type": "multipart/form-data" }
    }
    return axios.put(`${organizerURL}accounts/avatar/${users.profile.id}/`, formData, config)
        .then(user => {
            return user
        });
}

export const userService = {
    login,
    logout,
    register,
    udpate,
    avatarUpdate,
}
