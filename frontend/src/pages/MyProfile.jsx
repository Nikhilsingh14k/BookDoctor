import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [userData,setUserData]=useState({
        name:'alpha singh',
        image: assets.profile_pic,
        email:'alphasingh14k@gmail.com',
        phone: '+91 8840791221',
        address:{
            line1:'594 phase-2 beeta nagar',
            line2:'gama colony , theetapur'
        },
        gender:'Male',
        dob:'2004-03-12',
        
    })
    const [isEdit,serIsEdit]=useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm pt-5'>
      <img className='w-36 rounded' src={userData.image} alt="" />
      {
        isEdit?<input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))} />
        :<p className='font-medium text-3xl text-[#262626] mt-4'>{userData.name}</p>
      }
      <hr className='bg-[#ADADAD] h-[1px] border-none' />
      <div>
        <p className='text-gray-600 underline mt-3'>Contact Information</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
        isEdit?<input className='bg-gray-50 max-w-52 ' type="text" value={userData.phone} onChange={e=>setUserData(prev=>({...prev,phone:e.target.value}))} />
        :<p className='text-blue-500'>{userData.phone}</p>
           }
           <p className='font-medium'>Address:</p>
           {
        isEdit
        ?<p>
            <input className='bg-gray-50 ' type="text" value={userData.address.line1} onChange={e=>setUserData(prev=>({...prev,address:{...prev.address,line1:e.target.value}}))}/>
            <br />
            <input className='bg-gray-50' type="text" value={userData.address.line2} onChange={e=>setUserData(prev=>({...prev,address:{...prev.address,line2:e.target.value}}))} />
        </p>
        :<p className='text-blue-500'>
            {userData.address.line1}
            <br />
            {userData.address.line2}
        </p>
           }
           <p className='font-medium'> Gender:</p>
           {
        isEdit?<input className='bg-gray-50 max-w-52 ' type="text" value={userData.gender} onChange={e=>setUserData(prev=>({...prev,gender:e.target.value}))} />
        :<p className='text-blue-500'> {userData.gender}</p>
      }
      <p className='font-medium'>Birthday:</p>
      {
        isEdit?
        <input className='bg-gray-50 max-w-52 ' type='Date' value={userData.dob} onChange={e=>setUserData(prev=>({...prev,dob:e.target.value}))} ></input>
        :<p className='text-blue-500'>{userData.dob}</p>
      }
            </div>
            </div>
            <div className='mt-10'>
            {
                isEdit
                ?<button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>serIsEdit(false)}>Save Information</button>
                : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={()=>serIsEdit(true)} >Edit</button>
            }
      </div>
    </div>
  )
}

export default MyProfile
