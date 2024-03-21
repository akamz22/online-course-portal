'use client'
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from "sonner"
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import GlobalApi from '@/app/_utils/GlobalApi';
import { useRouter } from 'next/navigation';
const CourseEnrollSection = ({ isUserAlreadytEnrolled, courseInfo }) => {
    // console.log("Free", courseInfo);
    const membership = false;
    const { user } = useUser();
    const router = useRouter();
    //Enroll to the course
    // useEffect(() => {
    //     console.log("isUserAlreadytEnrolled : ", isUserAlreadytEnrolled);
    // }, [isUserAlreadytEnrolled])
    const onEnrollCourse = () => {
        // console.log("Slug : ", courseInfo?.slug,"Email : ", user?.primaryEmailAddress?.emailAddress);
        GlobalApi.EnrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress).then(res => {
            // console.log("Enroll Res ", res);
            if (res) {
                //Show toast on susscessful Enroll 
                toast("✅User Enrolled Successfully", {
                    description: "User Enrolled To This Course",
                })
                // Redirect to watch course page
                // console.log("Res Id Enroll",res.createUserEnrollCourse?.id);
                router.push('/watch-course/' + res?.createUserEnrollCourse?.id)
            }
        })
    }
    return (
        <div className='p-3 text-center rounded-sm bg-primary '>
            <h2 className='text-[22px] font-bold text-white'>Enroll to the Course</h2>
            {/* User has membership and already loggedin */}
            {user && (membership || courseInfo?.free) && (!isUserAlreadytEnrolled) ?
                <div className='flex flex-col gap-3 mt-3'>
                    <h2 className='text-[15px] font-light text-white'>Enroll Now to Start Learning And Building the Projects</h2>
                    <Button className="bg-white text-primary hover:bg-white hover:text-primary"
                        onClick={onEnrollCourse}
                    >Enroll Now</Button>
                </div>
                : !user ?
                    <div className='flex flex-col gap-3 mt-3'>
                        <h2 className='text-[15px] font-light text-white'>Enroll Now to Start Learning And Building the Projects</h2>
                        <Link href={'/sign-in'}>
                            <Button className="bg-white text-primary hover:bg-white hover:text-primary">Enroll Now</Button>
                        </Link>
                    </div>
                    : !isUserAlreadytEnrolled &&
                    <div className='flex flex-col gap-3 mt-3'>
                        <h2 className='text-[15px] font-light text-white'>Buy Monthly Membership and Get Access to All Courses</h2>
                        <Button className="bg-white text-primary hover:bg-white hover:text-primary">Buy Membership Just $6.99</Button>
                    </div>
            }
            {/* user above section  does not have membership or not sign in */}



            {isUserAlreadytEnrolled && <div className='flex flex-col gap-3 mt-3'>
                <h2 className='text-[15px] font-light text-white'>Continue to learn your project</h2>
                <Link href={'/watch-course/' + isUserAlreadytEnrolled}>
                    <Button className="bg-white text-primary hover:bg-white hover:text-primary">Continue</Button>
                </Link>
            </div>}
        </div>
    )
}

export default CourseEnrollSection