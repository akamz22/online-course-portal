'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import GlobalApi from '@/app/_utils/GlobalApi'
const SideBanners = () => {
  const [sideBannerList, setSideBannerList] = useState([])
  const getSideBanners = () => {
    GlobalApi.getSideBanner().then(res => {
      console.log(res);
      setSideBannerList(res.sideBanners)
    })
  }
  useEffect(() => {
    getSideBanners();
  }, [])
  return (
    <div className=''>
      {sideBannerList.map((item, index) => (
        <div key={index}>
          <Image className='rounded-md' alt="Banner" src={item.banner.url} height={800} width={400} />
        </div>
      ))}
    </div>
  )
}

export default SideBanners