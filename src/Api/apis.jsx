import React from 'react'
import axios from 'axios'

const apis = axios.create({
    baseURL : "http://localhost:8080"
})

export const postEmployee = () =>{
    return apis.post("/emp/add")
}
export const getAllEmployees =async ()=>{
    try {
        const response = await apis.get("/emp/get");
        return response.data; // ✅ Extract response data
    } catch (error) {
        console.error("Error fetching employees:", error);
        return []; // ✅ Return empty array instead of crashing
    }
}


export default apis