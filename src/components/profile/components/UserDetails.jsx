import React from 'react'

export default function UserDetails({data}) {
    return (
        <>
            <div>
                <img src={data.user.imageUrl} className='w-32 h-32 rounded-full' alt="" />
            </div>
            <div>
                <h1 className='text-2xl text-center font-bold'>{data.user.username}</h1>
                <p className='text-sm text-center text-gray-600'>{data.user.email}</p>
            </div>
        </>
    )
}
