import axios from "axios";

const REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;


export async function postBlogs(blogData) {
    try 
    {
        const {data} = await axios.post(`${REACT_APP_BASE_URL}/blog/createblog`, blogData ,{withCredentials: true},
            {headers: {"Content-Type": "multipart/form-data"}}
        );
        return data;
    } catch (error) {
        throw error.response?.data || { message: "Something went wrong" };
    }
}