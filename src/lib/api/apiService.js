import axios from "axios";

export const apiservice = axios.create({
    baseURL: "https://sandbox.ixaya.net/",
    headers: {
        "X-API-KEY": "kkkcc4o4gsko8w0wg084k4o8s4wggwcosk8okgw4"
    }
});