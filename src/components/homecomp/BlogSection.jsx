import { useQuery } from "@tanstack/react-query"
import { blogsQueryOptions } from "../../queryOptions/fetchBlogs"
import { useNavigate } from "react-router-dom";


function BlogSection() {

  const nav = useNavigate();

  const { data, isLoading, error } = useQuery(blogsQueryOptions);

  if (isLoading) return <div className="w-full h-[180vh] p-12 "></div>
  if (error) return <div className="w-full h-[180vh] p-12 ">
    <div className="flex justify-center p-4">

      <h1 className="text-2xl font-bold text-center">Error Occured please Try again</h1>
      <h4 className="text-md font-bold text-center underline font-mono text-blue-600">try again</h4>

    </div>
    </div>


  return (
    <div className="w-full h-fit p-12">

      <div className=" h-full ">
        <div className="grid grid-cols-3 gap-6 p-4">
          {data?.blogs.map((post) =>
          (
            <div key={post.id} className="w-full h-[60vh] flex flex-col justify-between" >
              <div className="h-3/4">
                <div className="w-full h-3/4">
                  <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <h2 className="text-2xl font-bold line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3">{post.content}</p>
              </div>

              <div >
                <div className="flex items-center gap-2 px-2">
                  <img src={post.author.image} className="size-8" alt={`profile picture of ${post.author.name}`} />
                  <span className="text-gray-700 font-semibold">{post.author.name}</span>
                </div>

                <div>
                  <span className="text-xs px-4">{post.postedAt}</span>
                </div>

                <div>
                  <button onClick={()=>nav(`/blogs/${post.id}`)} className="px-2  hover:tracking-wide duration-300  border-black border-b-2 cursor-pointer">Read More</button>
                </div>
              </div>




            </div>
          ))}


        </div>
        <div className="w-full  py-4 flex justify-center ">
          <button className="bg-black text-white px-4 py-2 rounded-md">view more</button>
        </div>
      </div>

    </div>
  )
}

export default BlogSection