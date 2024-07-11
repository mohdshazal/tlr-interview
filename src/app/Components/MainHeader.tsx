import React from 'react'
import Image from 'next/image'

const MainHeader = () => {
    return (
        <div className='bg-[#061c35] flex gap-9 p-4'>
            <div>
                <div className='flex gap-1'>
                    <h1 className='p-1 rounded-md bg-white font-extrabold text-6xl'>T</h1>
                    <h1 className='p-1 rounded-md bg-white font-extrabold text-6xl'>L</h1>
                    <h1 className='p-1 rounded-md bg-white font-extrabold text-6xl'>R</h1><br />
                </div>
                <h1 className='text-white text-sm'>THE LAW REPORTERS</h1>
            </div>
            <div className='flex align-middle items-center'>
                <ul className='flex text-white gap-4'>
                    <li>Home</li>
                    <li>News
                    </li>
                    <li>Law Suite</li>
                    <li>Business</li>
                    <li>Ask Expert</li>
                    <li>Directory</li>
                    <li>Law Cafe</li>
                    <li>Web Stories</li>
                    <li>Views</li>
                    <li>Contact Us</li>
                    <li>More</li>
                    <li>
                        <Image
                            src="/dots.png"
                            alt=""
                            className='cursor-pointer'
                            width={25}
                            height={10}
                        />
                    </li>
                </ul>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='text-white flex gap-1'>
                    <h2>Eng</h2>
                    <Image
                        src="/down-arrow.png"
                        alt=""
                        className='cursor-pointer'
                        width={15}
                        height={10}
                    />
                </div>
                <div>
                    <Image
                        src="/user.png"
                        alt=""
                        className='cursor-pointer'
                        width={25}
                        height={10}
                    />
                </div>
                <div>
                    <Image
                        src="/search.png"
                        alt=""
                        className='cursor-pointer'
                        width={25}
                        height={10}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainHeader