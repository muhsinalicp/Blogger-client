import { useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchUserDetails } from "../../queryOptions/fetchUserDetails"
import { VscLoading } from "react-icons/vsc"

export default function AboutUser() {

    const {data ,isLoading, error} = useQuery({
        queryKey:["aboutUser"],
        queryFn:fetchUserDetails,
    })

    

    if (isLoading) return <div className="text-2xl flex h-screen w-screen justify-center items-center"><div><VscLoading className="animate-spin" size={50} /></div></div>

    if (error) return <div className="text-2xl flex h-screen w-screen justify-center items-center"><div>{error.message}</div></div>

  return (
    <div>
        {data.user.username}
    </div>
  )
}
