import React from 'react'

const CountryCard = ({ country_name, bg_color }: { country_name: string, bg_color: string }) => {
    return (
        <div className={`bg-[${bg_color}] p-3 rounded-md`}>
            <div className='font-bold text-2xl border-b-2'><h2>{country_name}</h2></div>
            <div className='border-b-2'>
                <b>What is lorem ipsum</b><br />
                Lorem ipsum dolor sir amet consectuer adiplicing elit
            </div>
            <div className='border-b-2'>
                <b>What is lorem ipsum</b><br />
                Lorem ipsum dolor sir amet consectuer adiplicing elit
            </div>
            <div>
                <b>What is lorem ipsum</b><br />
                Lorem ipsum dolor sir amet consectuer adiplicing elit
            </div>
        </div>
    )
}

export default CountryCard