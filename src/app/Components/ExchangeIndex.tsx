import React from 'react'
import Image from 'next/image'
const ExchangeIndex = () => {
    return (
        <div className='flex border-black border-2 p-3 ml-1 mr-1 justify-around'>
            <div className='flex gap-3 font-bold'>
                <h2>S&P 500</h2>
                <h2>4,839.80</h2>
                <h2 className='text-[#1dae4c] flex justify-center'>
                    <Image
                        src="/arrow-up.png"
                        alt=""
                        className='cursor-pointer'
                        width={17}
                        height={10}
                    />
                    <span>+1.23%</span></h2>
            </div>

            <div className='flex gap-3 font-bold'>
                <h2>NASDAQ</h2>
                <h2>15,310.97</h2>
                <h2 className='text-[#1dae4c] flex justify-center'>
                    <Image
                        src="/arrow-up.png"
                        alt=""
                        className='cursor-pointer'
                        width={17}
                        height={10}
                    />
                    <span>+1.70%</span></h2>
            </div>

            <div className='flex gap-3 font-bold'>
                <h2>CRUDE OIL</h2>
                <h2>73.41</h2>
                <h2 className='text-[#1dae4c] flex justify-center'>
                    <Image
                        src="/down-arrow-red.png"
                        alt=""
                        className='cursor-pointer'
                        width={19}
                        height={12}
                    />
                    <span>-0.90%</span></h2>
            </div>

            <div className='flex gap-3 font-bold'>
                <h2>US 10 YR</h2>
                <h2>4.12</h2>
                <h2 className='text-[#1dae4c] flex justify-center'>
                    <Image
                        src="/arrow-up.png"
                        alt=""
                        className='cursor-pointer'
                        width={17}
                        height={10}
                    />
                    <span>+0.15%</span></h2>
            </div>

            <div className='flex gap-3 font-bold'>
                <h2>EURO 1.09</h2>
                <h2>4.12</h2>
                <h2 className='text-[#1dae4c] flex justify-center'>
                    <Image
                        src="/arrow-up.png"
                        alt=""
                        className='cursor-pointer'
                        width={17}
                        height={10}
                    />
                    <span>+0.20%</span></h2>
            </div>

            <div className='flex gap-3 font-bold'>
                <h2>DOW</h2>
                <div className='flex gap-3'>
                    <Image
                        src="/left-arrow.png"
                        alt=""
                        className='cursor-pointer'
                        width={18}
                        height={10}
                    />
                    <Image
                        src="/right-arrow.png"
                        alt=""
                        className='cursor-pointer'
                        width={18}
                        height={10}
                    />
                </div>
            </div>
        </div>
    )
}

export default ExchangeIndex