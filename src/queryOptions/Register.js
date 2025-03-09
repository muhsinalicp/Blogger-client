import axios from "axios";

const REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export async function registerUser(userData) {
    try {
        const { data } = await axios.post(`${REACT_APP_BASE_URL}/auth/register`, userData);
        return data;
    } catch (error) {
        throw error.response?.data || { message: "Something went wrong" };
    }
    }

