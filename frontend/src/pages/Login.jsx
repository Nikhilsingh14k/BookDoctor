import React, { useState } from 'react'

const Login = () => {
    const [state,setState]=useState('sign Up')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
   const onSubmitHandler=async(event)=>{
        event.preventDefault()
    }
  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
     <p className='text-2xl font-semibold'>
        {state==='sign Up'?'Create Account':'Login'}
     </p>
     <p>
     {state==='sign Up'?'please signup to book appointment':'please login to book appointment'}  
     </p>
     {
        state==='sign Up' &&  <div className='w-full '>
        <p>Full Name :</p>
        <input className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.name)} value={name} required />
     </div>
     }
    
     <div className='w-full '>
        <p>Email :</p>
        <input className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" onChange={(e)=>setName(e.target.name)} value={name} required />
     </div>
     <div className='w-full '>
        <p>Password :</p>
        <input className='border border-[#DADADA] rounded w-full p-2 mt-1' type="Password" onChange={(e)=>setName(e.target.name)} value={name} required />
     </div>
     <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>{state==='sign Up'?'Create Account':'Login'}</button>
     {
        state==='sign Up'
        ?<p>Already Have an account ? <span onClick={()=>setState('Login')} className='text-primary cursor-pointer underline'> Login here</span></p>
        :<p>Create an Account ?<span onClick={()=>setState('sign Up')} className='text-primary cursor-pointer underline'>  Sign Up here</span></p>
     }
      </div>
    </form>
  )
}

export default Login
