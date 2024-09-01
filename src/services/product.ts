import instance from "@/config/axios";
import { IProduct } from "@/interface/product";

export const getAllProducts = async( ):Promise<IProduct[]> =>{
    try {
        const response = await instance.get(`/products`);
        return response.data;
    } catch (error) {
        return error as any
    }
}

export const getProductById = async(id:number|string )=>{
    try {
        const response = await instance.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        return error as any
    }
}