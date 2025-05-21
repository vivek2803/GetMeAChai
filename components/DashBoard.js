'use client'
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchUser , updateProfile } from '@/action/useractions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";

const DashBoard = ()=>{
    const { data: session , update} = useSession();
    const router = useRouter();
    const [form, setForm] = useState({})

    useEffect(() => {
     getData()
      if(!session) {
        router.push("/login");
      }
    }, [router , session])

    const getData = () =>{
      if(session){
        fetchUser(session.user.name).then((data)=>{
          setForm(JSON.parse(data))
        })
      }
    }
    
    const handleChange = (e) => {
      if(e.target.name === 'username'){
        const name = e.target.value
        const slugName = name.split(/[^\w-]+/).join("").toLowerCase()
        setForm({
          ...form,
          [e.target.name]: e.target.value,
          username: slugName
        })
      }
      else{
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }
    }

    const handelSubmit = async(e)=>{
      let a = await updateProfile(e , session.user.name)
      await update()
      const response = await JSON.parse(a)
      toast(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }

  return (
    <>
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition= 'Bounce'
/>
    <div className='min-h-screen'>
    <h2 className='text-2xl font-bold text-center py-5'>Welcome to your dashboard</h2>

    

<form className="max-w-sm md:max-w-lg mx-auto pb-5 px-3 md:px-0" action={handelSubmit} >
  {/* Name */}
  <div className="mb-1">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
    <input type="text" value={form.name ? form.name : ""} onChange={handleChange} name='name' id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
  </div>
  {/* Email */}
  <div className="mb-1">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
    <input type="email" value={form.email ? form.email : ""} onChange={handleChange} name='email' id="email" className="bg-gray-50 border border-gray-300 dark:border-gray-600 text-gray-900/70 text-sm rounded-lg block w-full px-2.5 py-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white/70 focus-visible:outline-none cursor-not-allowed" readOnly title='Email can&apos;t be modified' />
  </div>
  {/* Username */}
  <div className="mb-1">
    <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username</label>
    <input type="text" value={form.username ? form.username : ""} onChange={handleChange} name='username' id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
  </div>
  {/* Profile Picture */}
  <div className="mb-1">
    <label htmlFor="profilpicture" className="block mb-2 text-sm font-medium text-white">Profile Picture</label>
    <input type="url" value={form.profilpicture ? form.profilpicture : ""} onChange={handleChange} name='profilpicture' id="profilpicture" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
  </div>
  {/* Cover Image */}
  <div className="mb-1">
    <label htmlFor="coverpicture" className="block mb-2 text-sm font-medium text-white">Cover Picture</label>
    <input type="url" value={form.coverpicture ? form.coverpicture : ""} onChange={handleChange} name='coverpicture' id="coverpicture" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
  </div>
  {/* razorpay id */}
  <div className="mb-1">
    <label htmlFor="razorpayid" className="block mb-2 text-sm font-medium text-white">razorpay Id</label>
    <input type="text" value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} name='razorpayid' id="razorpayid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  </div>
  {/* razorpay Secret */}
  <div className="mb-5">
    <label htmlFor="razorpaySecret" className="block mb-2 text-sm font-medium text-white">razorpay Secret</label>
    <input type="text" value={form.razorpaySecret ? form.razorpaySecret : ""} onChange={handleChange} name='razorpaySecret' id="razorpaySecret" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
  </div>
  {/* Save button */}
  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
</form>
</div>
    </>
  )
}

export default DashBoard