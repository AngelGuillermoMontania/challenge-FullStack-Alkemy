import React from 'react'
import { useSelector } from 'react-redux'

export default function Total() {

    const stateRedux = useSelector(state => state)

    return (
        <div className='flex justify-around my-8'>
            <p className='text-white text-2xl sm:text-8xl text-shadow'>${stateRedux?.entries}</p>
            <p className='text-white text-2xl sm:text-8xl text-shadow'> - </p>
            <p className='text-white text-2xl sm:text-8xl text-shadow'>${stateRedux?.exits}</p>
            <p className='text-white text-2xl sm:text-8xl text-shadow'> = </p>
            <p className='text-white text-2xl sm:text-8xl text-shadow'>$
                {
                    stateRedux?.entries - stateRedux?.exits
                }
            </p>
        </div>
    )
}