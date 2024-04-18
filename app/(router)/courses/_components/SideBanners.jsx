'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import GlobalApi from '@/app/_utils/GlobalApi'
const SideBanners = () => {
  const [sideBannerList, setSideBannerList] = useState([])
  const getSideBanners = () => {
    GlobalApi.getSideBanner().then(res => {
      // console.log(res);
      setSideBannerList(res.sideBanners)
    })
  }
  useEffect(() => {
    getSideBanners();
  }, [])
  return (
    <div className='rounded-md'>
      {sideBannerList.map((item, index) => (
        <div key={index * 79} className='rounded-xl bg-white m-2 p-3'>
          <Image
            onClick={() => window.open(item?.url)}
            className='rounded-xl cursor-pointer' alt="Banner" src={item.banner.url} height={800} width={400} />
        </div>
      ))}
    </div>
  )
}

export default SideBanners