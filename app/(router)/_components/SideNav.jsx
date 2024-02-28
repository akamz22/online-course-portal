import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
const SideNav = () => {
    const menu = [
        {
            id: 1,
            name: 'All Courses',
            icon: BookOpen
        },
        {
            id: 2,
            name: 'Membership',
            icon: BadgeIcon
        },
        {
            id: 3,
            name: 'Be Instructor',
            icon: GraduationCap
        },
    ]
    return (
        <div className='p-5 bg-white shadow-sm border h-screen'>
            <Image className='cursor-pointer'  src="/logo.png" alt='No-found' width={170} height={80} />
            <hr className='mt-7'></hr>
            <div className='mt-8 '>
                {menu.map((item, index) => (
                    <div className='group flex gap-3  p-3 text-[20px] items-center mt-2 text-gray-500 hover:bg-primary hover:text-white cursor-pointer rounded-md transition-all ease-in-out duration-300' key={index}>
                        <item.icon className='group-hover:animate-bounce' />
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideNav