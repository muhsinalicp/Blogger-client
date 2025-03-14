import { useMutation } from '@tanstack/react-query'
import React, { useState } from 'react'
import { postBlogs } from '../../../queryOptions/postBlogs'

export default function BlogForm() {

    const [blogData, setBlogData] = useState({
        blogtitle: "",
        location: "",
        description: "",
        blog: "",
        image: "",
    })

    const { mutate , isPending, isSuccess} = useMutation({
        mutationFn: postBlogs,
        mutationKey:["blogs"],
        onSuccess: () => {
            setBlogData({
                blog:"",
                blogtitle: "",
                location: "",
                description: "",
                image: "",
            })
        }, 
        onError: (error) => {
            console.log(error);
        }
    })

    const inputs =
        [
            {
                id: 1,
                name: "blogtitle",
                title: "Blog Title",
                placeholder: "Enter a Title for your Blog",
                type: "text",
            },
            {
                id: 2,
                name: "location",
                title: "Location",
                placeholder: "Enter the Location",
                type: "text",
            },
            {
                id: 3,
                name: "description",
                title: "Description",
                placeholder: "Describe your blog ",
                type: "text",
                textarea: true
            },
            {
                id: 5,
                name: "blog",
                title: "Blog",
                placeholder: "share your memory",
                type: "text",
                textarea: true

            },
            {
                id: 4,
                name: "image",
                title: "Upload an Image (max 10MB)",
                placeholder: "Enter the Location",
                type: "file",
            },

        ]

    function handleInput(e) {
        setBlogData({ ...blogData, [e.target.name]: e.target.value });
    }

    function handleFile(e) {
        setBlogData({ ...blogData, [e.target.name]: e.target.files[0] });
    }

    function handleSubmit(e) {
        e.preventDefault();

        try {
            const formData = new FormData;
            formData.append("blogtitle", blogData.blogtitle);
            formData.append("location", blogData.location);
            formData.append("description", blogData.description);
            formData.append("image", blogData.image);
            formData.append("blog", blogData.blog);

            mutate(formData);

        } catch (error) {
            console.log(error);
            
        }
    }


    return (
        <form onSubmit={handleSubmit}  className='h-fit w-full px-12 py-6'>
            <div className='py-2'>
                <h1 className='text-2xl font-bold text-center'>Create a Blog</h1>
                <p className='text-sm text-center'>Write about your adventures, inspire others, and discover new horizons</p>
            </div>

            {inputs.map(input =>
                <div className={`py-2 flex flex-col`} key={input.id}>
                    <label className='font-bold' htmlFor={input.name}>{input.title}</label>
                    {input.textarea ?
                        <textarea
                            className="w-full p-1 border border-black focus:outline-none  focus:placeholder-transparent"
                            rows={6} placeholder={input.placeholder} onChange={handleInput} id={input.name} name={input.name} type={input.type} disabled={isPending} />
                        :
                        <input
                            className="w-full p-1 border border-black focus:outline-none  focus:placeholder-transparent"
                            placeholder={input.placeholder} id={input.name} name={input.name} onChange={input.type === "file" ? handleFile : handleInput} type={input.type} disabled={isPending}   {...(input.type === "file" ? { accept: 'image/*', size: 1024 * 1024 * 10 } : {})} />}
                </div>
            )}

            <div className='flex w-full justify-center'>
                <button disabled={isPending} type='submit' className="bg-black text-white w-full px-4 py-2 rounded-md cursor-pointer">{isPending ? "Submitting..." : "Submit"}</button>
            </div>

        </form>
    )
}
