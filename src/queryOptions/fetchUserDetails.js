import axios from "axios";
const REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export async function fetchUserDetails() 
{
    try
    {
        const {data} = await axios.get(`${REACT_APP_BASE_URL}/user/details`, {withCredentials: true});
        return data;
    }
    catch(error)
    {
        throw error.response?.data || { message: "Something went wrong" };
    }
}