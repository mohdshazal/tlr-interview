import React from 'react'
import TopStories from './TopStories'
import Spectrum from './Spectrum'
import Image from 'next/image'
const MainSection = () => {
    return (
        <div className='flex gap-4 mt-4'>
            <div className='w-1/4 ml-3'>
                <h2 className='tracking-wider font-bold mb-3 bg-gradient-to-r from-[#e4e5e5] to-white p-1'>TOP STORIES</h2>
                <TopStories />
                <TopStories />
                <TopStories />
                <TopStories />
            </div>
            <div className='w-2/4 relative'>
                <Image
                    src="/police-caught.jpg"
                    alt=""
                    className='cursor-pointer'
                    width={800}
                    height={1000}
                />
                <Image
                    src="/slider-left.png"
                    alt=""
                    className='absolute top-48 left-2 cursor-pointer'
                    width={40}
                    height={30}
                />
                <Image
                    src="/slider-right.png"
                    alt=""
                    className='absolute top-48 right-2 cursor-pointer'
                    width={60}
                    height={40}
                />
                <h2 className='mt-3'><b>There are many variations of passages of lorem ipsum available but the majority an</b> Lorem ipsum dolor sit amet, consecteur adipicing elit, sed diam nonummy nibh euismod tincidunt ut laorecet dolore magna aliquam,sed diam nonummy nibh euismod tincidunt ut laorecet dolore magna aliquamsed diam nonummy nibh euismod tincidunt ut laorecet dolore magna aliquam</h2>
            </div>
            <div className='w-1/4'>
                <h2 className='tracking-wider font-bold mb-3 bg-gradient-to-r from-[#e4e5e5] to-white p-1'>SPECTRUM</h2>
                <Spectrum />
                <Spectrum />
                <Spectrum />
                <Spectrum />
            </div>
        </div>
    )
}

export default MainSection