import axios from "axios";
import { queryOptions } from "@tanstack/react-query";

const REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

async function getBlogs() 
{
    const { data } = await axios.get(`${REACT_APP_BASE_URL}`);
    return data.message;
}

export const blogsQueryOptions = queryOptions({
    queryKey: ["blogs"],
    queryFn: getBlogs,
});