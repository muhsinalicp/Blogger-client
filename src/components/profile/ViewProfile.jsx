import { useQuery } from '@tanstack/react-query';
import { fetchUserDetails } from '../../queryOptions/fetchUserDetails';
import { VscLoading } from 'react-icons/vsc';
import Nav from './components/Nav';
import UserDetails from './components/UserDetails';
import UserBlogs from './components/UserBlogs';

export default function ViewProfile() {

  const { data, isLoading, error } = useQuery({
    queryKey: ["aboutUser"],
    queryFn: fetchUserDetails,
  })

  if (isLoading) return <div className="text-2xl flex h-screen w-screen justify-center items-center"><div><VscLoading className="animate-spin" size={50} /></div></div>

  if (error) return <div className="text-2xl flex h-screen w-screen justify-center items-center"><div>{error.message}</div></div>

  return (
        <div className='w-screen h-screen flex flex-col items-center '>
          <Nav />
          <UserDetails data={data} />
          <UserBlogs/>
        </div>

  )
}
