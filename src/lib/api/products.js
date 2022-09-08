import { apiservice } from "./apiService";

export const getProducts = async() => {
    const response = await apiservice.get("/api/products")
    return response.data 
} 