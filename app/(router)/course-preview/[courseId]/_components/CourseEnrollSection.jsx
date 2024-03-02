import React from 'react'
import { Button } from '@/components/ui/button'
const CourseEnrollSection = () => {
    const membership = false;
    return (
        <div className='p-3 text-center rounded-sm bg-primary '>
            <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
            {/* User has membership and already loggedin */}
            {membership ?
                <div className='flex flex-col gap-3 mt-3'>
                    <h2 className='text-[15px] font-light text-white'>Enroll Now to Start Learning And Building the Projects</h2>
                    <Button className="bg-white text-primary hover:bg-white hover:text-primary">Enroll Now</Button>
                </div>
                :
                <div className='flex flex-col gap-3 mt-3'>
                    <h2 className='text-[15px] font-light text-white'>Buy Monthly Membership and Get Access to All Courses</h2>
                    <Button className="bg-white text-primary hover:bg-white hover:text-primary">Buy Membership Just $6.99</Button>
                </div>
            }
            {/* user above section  does not have membership or not sign in */}
        </div>
    )
}

export default CourseEnrollSection