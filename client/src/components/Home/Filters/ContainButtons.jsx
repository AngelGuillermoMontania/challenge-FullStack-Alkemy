import React from 'react'
import ButtonFilter from './ButtonFilter'

export default function ContainButtons() {
    return (
        <div className='mt-8 w-full flex justify-around'>
            <ButtonFilter />
            <ButtonFilter />
        </div>
    )
}