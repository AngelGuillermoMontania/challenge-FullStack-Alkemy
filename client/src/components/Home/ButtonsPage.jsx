import React from 'react'
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi"

export default function ButtonsPage({ movements, page, setPage}) {

    const next = () => {
        if(movements.length > page + 10) {
            setPage(page + 10)
        }
    }
      
    const previous = () => {
        if(page > 0) {
            setPage(page - 10)
        }
    }

    return (
        <div className='mb-4 w-full flex justify-center'>
            <button className='bg-black mr-2 w-32 justify-center items-center text-white flex py-1 px-2 shadow-md shadow-black rounded-md border border-transparent text-base font-medium ease-in-out duration-300 hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white sm:ml-3 sm:text-sm'>
                <HiArrowSmLeft size={20} />
                Previous
            </button>
            <button className='bg-black ml-2 w-32 justify-center items-center text-white flex py-1 px-2 shadow-md shadow-black rounded-md border border-transparent text-base font-medium ease-in-out duration-300 hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white sm:ml-3 sm:text-sm'>
                Next
                <HiArrowSmRight size={20}/>
            </button>
        </div>
    )
}
