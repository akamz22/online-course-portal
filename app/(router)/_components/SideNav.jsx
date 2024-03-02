'use client'
import { BadgeIcon, BookOpen, GraduationCap, LayoutGrid } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
const SideNav = () => {
    const menu = [
        {
            id: 1,
            name: 'All Courses',
            icon: BookOpen,
            path: '/courses'
        },
        {
            id: 2,
            name: 'Membership',
            icon: BadgeIcon,
            path: '/membership'
        },
        {
            id: 3,
            name: 'Store',
            icon: LayoutGrid,
            path: '/store'
        },
        {
            id: 4,
            name: 'Be Instructor',
            icon: GraduationCap,
            path: '/instructor'
        },
        {
            id: 5,
            name: 'Newsletter',
            icon: GraduationCap,
            path: '/newsletter'
        },
    ]
    const path = usePathname();
    // useEffect(() =>{
    //     console.log(path);
    // },[])
    return (
        <div className='p-5 bg-white shadow-sm border h-screen'>
            {/* <Image className='cursor-pointer'  src="/logo.png" alt='No-found' width={170} height={80} /> */}
            <div className='w-[170px] h-[80px] text-[30px] font-bold text-primary'>Coursery</div>
            <hr className='mt-7'></hr>
            <div className='mt-8 '>
                {menu.map((item, index) => (
                    <Link href={item.path} key={index}>
                        <div key={index} className={`group flex gap-3  p-3 text-[20px] items-center mt-2 text-gray-500 hover:bg-primary hover:text-white cursor-pointer rounded-md transition-all ease-in-out duration-300
                        ${path.includes(item.path) && 'bg-primary text-white'}`}>
                            <item.icon  className='group-hover:animate-bounce' />
                            <h2>{item.name}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideNav