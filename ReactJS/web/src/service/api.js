import axios from "axios";

const api = axios.create({
    //baseURL: "http://10.0.2.2:3000"
   // baseURL: "http://localhost:4000"
    baseURL: "https://fs7my0tyu6.execute-api.sa-east-1.amazonaws.com/prod" 
});

const api_login = axios.create({

    baseURL: "https://hsmsl98l5h.execute-api.sa-east-1.amazonaws.com/prod"

});

export default api;