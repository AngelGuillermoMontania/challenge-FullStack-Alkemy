import React from 'react'
import { useSelector } from 'react-redux'

export default function Total() {

    const stateRedux = useSelector(state => state)

    return (
        <div className='flex justify-around my-12'>
            <p className='text-white text-2xl md:text-7xl text-shadow'>${stateRedux?.entries}</p>
            <p className='text-white text-2xl md:text-7xl text-shadow'> - </p>
            <p className='text-white text-2xl md:text-7xl text-shadow'>${stateRedux?.exits}</p>
            <p className='text-white text-2xl md:text-7xl text-shadow'> = </p>
            <p className='text-white text-2xl md:text-7xl text-shadow'>$
                {
                    stateRedux?.entries - stateRedux?.exits
                }
            </p>
        </div>
    )
}