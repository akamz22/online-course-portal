'use client'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useState } from 'react'
import Script from 'next/script'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import { toast } from 'sonner'
const CourseryPro = () => {


    const [subscriptionId, setSubscriptionId] = useState(null);
    const { user } = useUser();

    //create subs id
    const createSubscription = async (planId) => {
        axios.post('/api/create-subscription', JSON.stringify({
            plan_id: planId
        })).then(res => {
            // console.log(res.data);
            setSubscriptionId(res.data.id);
            makePayment();
        })
    }



    const makePayment = () => {
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            subscription_id: subscriptionId,
            name: "Coursery",
            description: "Coursery Pro Membersship",
            handler: async (res) => {
                // console.log("Pay Done",res);
                if (res) {
                    addNewMember(res.razorpay_payment_id)
                }
            },
            theme: {
                color: '#7D41E1'
            }
        }

        const rzp = new window.Razorpay(options)
        rzp.open();
    }



    const addNewMember = (paymentId) => {
        GlobalApi.addNewMember(user.primaryEmailAddress.emailAddress, paymentId).then((res) => {
            // console.log(res);
            if (res) {
                toast("Payment Successfull");
            }
            else {
                toast("Payment Failed");
            }
        })
    }

    return (
        <div>
            <Script
                id="razorpay-checkout-js"
                src='https://checkout.razorpay.com/v1/checkout.js'></Script>
            <div className='w-full mt-10 items-center flex justify-center'>
                <div className='w-full md:w-1/2 place-items-center grid gap-3 rounded-md md:grid-cols-2 grid-cols-1'>
                    <div className='p-5 py-10 bg-white rounded-md border hover:border-primary'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-[18px] text-primary font-bold'>Monthly</h2>
                            <h2><span className='text-[27px] font-bold'>4.99$</span>/month</h2>
                        </div>
                        <h3>✔️ Access to All Courses</h3>
                        <h3>✔️ Free Source Code</h3>
                        <h3>✔️ Free App Membership</h3>
                        <h3>✔️ Email & Instagram DM Support</h3>
                        <Button className='px-20 mt-2 rounded-lg' onClick={() => createSubscription('plan_NpQZXrzEj0y3EL')}>Get Started</Button>
                    </div>
                    <div className='p-5 py-10 bg-white rounded-md  border hover:border-primary'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-[18px] text-primary font-bold'>Yearly</h2>
                            <h2><span className='text-[27px] font-bold'>39.99$</span>/year</h2>
                        </div>
                        <h3>✔️ Access to All Courses</h3>
                        <h3>✔️ Free Source Code</h3>
                        <h3>✔️ Free App Membership</h3>
                        <h3>✔️ Email & Instagram DM Support</h3>
                        <Button className='px-20 mt-2 rounded-lg' onClick={() => createSubscription('plan_NpQcNzq12iFEcM')}>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CourseryPro