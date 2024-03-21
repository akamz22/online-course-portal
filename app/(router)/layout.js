import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
const layout = ({ children }) => {

    return (
        <div className=''>
            <div className='sm:w-64 md:block fixed  bg-gray-400'>
                <SideNav />
            </div>
            <div className='md:ml-64 ml-2'>
                <Header/>
                {children}
            </div>
        </div>
    )
}

export default layout