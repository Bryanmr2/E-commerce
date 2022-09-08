import { apiservice } from "./apiService";

export const postOrder = async(data) => {
    const response = await apiservice.post("/api/orders/create", data)
    return  
} 

export const getOrders = async() => {
    const response = await apiservice.get("/api/orders")
    return response.data 
} 