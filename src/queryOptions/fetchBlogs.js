import axios from "axios";
import { queryOptions } from "@tanstack/react-query";

const REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

//fetch all blogs
async function getBlogs() 
{
    const { data } = await axios.get(`${REACT_APP_BASE_URL}/user/blogs`);
    return data;
};

export const blogsQueryOptions = queryOptions({
    queryKey: ["blogs"],
    queryFn: getBlogs,
});


//fetch dynamic blogs
export async function fetchDynamicBlogs(id) 
{
    const { data } = await axios.get(`${REACT_APP_BASE_URL}/user/blog/${id}`);
    return data.blog;
}


//fetch blog according to user
export async function fetchBlogsOnUser() 
{
    const { data } = await axios.get(`${REACT_APP_BASE_URL}/user/userblogs`,{withCredentials:true});
    return data.blog;
}

export  const  userBlogQueryOptions = queryOptions(
    {
        queryKey:["userblogs"], 
        queryFn:fetchBlogsOnUser
    })
