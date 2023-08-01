import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { TbSocial } from 'react-icons/tb'

const Sidebar = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className='bg-[#1c1c24] p-5 rounded card flex flex-col'>
        <div className='bg-transparent sticky h-screen top-5 p-3 overflow-auto'>
            <h1 className='text-[30px] px-3 logo flex gap-3'><TbSocial className='bg-transparent text-[#00dbde]' />BuzzTalk</h1>
            <ul className='flex flex-col mt-10 text-[#e1d9d1] space-y-3 cursor-pointer'>
                <li onClick={() => setIsActive(true)} className={`flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded ${isActive && 'bg-[#3a3a43] text-[#eaeaea]'}`}><AiOutlineHome className='text-[20px] bg-transparent' /><span className=''>Home</span></li>
                <li className='flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded'><AiOutlineHome className='text-[20px] bg-transparent' />Community</li>
                <li className='flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded'><AiOutlineHome className='text-[20px] bg-transparent' />Marketplace</li>
                <li className='flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded'><AiOutlineHome className='text-[20px] bg-transparent' />News feed</li>
            </ul>

            <hr className='w-full mt-5 text-[#e1d9d1]' />

            <ul className='flex flex-col mt-10 text-[#e1d9d1] space-y-3 cursor-pointer'>
                <li className='flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded'><AiOutlineHome className='text-[20px] bg-transparent' />Home</li>
                <li className='flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded'><AiOutlineHome className='text-[20px] bg-transparent' />Community</li>
                <li className='flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded'><AiOutlineHome className='text-[20px] bg-transparent' />Marketplace</li>
                <li className='flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded'><AiOutlineHome className='text-[20px] bg-transparent' />News feed</li>
            </ul>

            <hr className='w-full mt-5' />

            <ul className='flex flex-col mt-10 text-[#e1d9d1] space-y-3 cursor-pointer pb-7'>
                <li className='flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded'><AiOutlineHome className='text-[20px] bg-transparent' />Home</li>
                <li className='flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded'><AiOutlineHome className='text-[20px] bg-transparent' />Community</li>
                <li className='flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded'><AiOutlineHome className='text-[20px] bg-transparent' />Marketplace</li>
                <li className='flex gap-3 hover:bg-[#3a3a43] hover:text-[#eaeaea] p-3 rounded'><AiOutlineHome className='text-[20px] bg-transparent' />News feed</li>
            </ul>
        </div>
        </div>
    )
}

export default Sidebar