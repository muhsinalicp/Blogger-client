import axios from "axios";

const REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;


export async function signInUser(userData) {
    try {
        const { data } = await axios.post(`${REACT_APP_BASE_URL}/auth/login`,{
            withCredentials: true,
            // headers: {
            //     'Access-Control-Allow-Origin': '*', 
            //     'Content-Type': 'application/json'
            // }
        }, userData);
        return data;
    } catch (error) {
        throw error.response?.data || { message: "Something went wrong" };
    }
}