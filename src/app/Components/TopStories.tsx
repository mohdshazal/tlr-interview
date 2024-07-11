import React from 'react'
import Image from 'next/image'
const TopStories = () => {
    return (
        <div className='flex mt-4'>
            <div>
                <Image
                    src="/lady-speaking.jpg"
                    alt=""
                    className='cursor-pointer'
                    width={800}
                    height={800}
                />
            </div>
            <div className='pl-2'><b>What is Lorem</b> Ipsum why do we use it where does it "sed ut perpciatis unde</div>
        </div>
    )
}

export default TopStories