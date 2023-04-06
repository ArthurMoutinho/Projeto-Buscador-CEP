import axios from "axios";

// 01001000/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default api;

//git config --global user.email "you@example.com"
//git config --global user.name "Your Name"