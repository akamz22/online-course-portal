'use client'
import React from 'react'
import { BadgeIcon, BookOpen, GraduationCap, LayoutDashboard, ShieldCheck, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'

const MobileBottomMenu = () => {
    const { user } = useUser();
    const path = usePathname();
    const menu = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/dashboard',
            auth: user
        },
        {
            id: 2,
            name: 'Home',
            icon: Home,
            path: '/courses',
            auth: true
        },
        {
            id: 4,
            name: 'Newsletter',
            icon: GraduationCap,
            path: '/newsletter',
            auth: true
        },
        {
            id: 5,
            name: 'Coursery Pro',
            icon: ShieldCheck,
            path: '/coursery-pro',
            auth: true
        },
    ]

    return (
        <div className="fixed bottom-0 md:hidden left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-[4px] justify-items-center">
                {menu.map((item, index) => (
                    <Link href={item.path} key={index}>
                        <button key={item.id} type="button" className={`inline-flex flex-col items-center justify-center py-4 border-gray-200
                                     hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600
                                        ${path.includes(item.path) && 'text-primary'}`}>
                            {item.icon && <item.icon className={`group-hover:text-primary `} />}
                            <span className="text-[10px] text-gray-500 dark:text-gray-400 group-hover:text-primary dark:group-hover:text-primary">{item.name}</span>
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MobileBottomMenu