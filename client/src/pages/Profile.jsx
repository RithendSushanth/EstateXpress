import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>
        Profile
      </h1>
      <form className='flex flex-col items-center gap-3'>
        <img src={currentUser.avatar} alt='profile' 
        className='rounded-full h-24 w-24 oject-cover cursor-pointer self-center' />
        <input type='text' placeholder='username' id='username' className='border p-4 rounded-lg my-3'/>
        <input type='text' placeholder='email' id='email' className='border p-4 rounded-lg my-3'/>
        <input type='text' placeholder='password' id='password' className='border p-4 rounded-lg my-3'/>
        <button className='bg-slate-700 text-white px-4 py-2 rounded-lg hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}

export default Profile
