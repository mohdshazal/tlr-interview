import React from 'react'
import CountryCard from './CountryCard'

const HeadLines = () => {
    return (
        <div className='mt-6 ml-3'>
            <h2 className='w-1/5 tracking-wider font-bold mb-3 bg-gradient-to-r from-[#e4e5e5] to-white p-1'>HEADLINES</h2>
            <div className='flex justify-around gap-3 p-3'>
                <CountryCard country_name="UAE" bg_color='#f4f5f6' />
                <CountryCard country_name="GCC" bg_color='#FFFFFF' />
                <CountryCard country_name="MENA" bg_color='#f4f5f6' />
                <CountryCard country_name="WORLD" bg_color='#FFFFFF' />
            </div>
        </div>
    )
}

export default HeadLines