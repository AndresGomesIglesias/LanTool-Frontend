import axios from "axios";
import { organizerURL } from "./serviceConfig"


const createClub = data =>{
    console.log('data', data)
    var config = {
        headers: { 'Content-Type': 'application/json' },
    }
    axios.post(`${organizerURL}accounts/club/`, data ,config)
    .then(rep => console.log(rep))
}

export const clubService = {
    createClub
}
