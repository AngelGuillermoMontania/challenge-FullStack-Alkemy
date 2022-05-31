import React from "react";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

export default function ButtonsPage({ movements, page, setPage}) {

    const next = () => {
        if(movements.length > page + 10) {
            setPage(page + 10)
        }
    };
      
    const previous = () => {
        if(page > 0) {
            setPage(page - 10)
        }
    };

    return (
        <div className="mb-4 w-full flex justify-center">
            <button
                className={
                    page <= 0 ? 
                        "opacity-20 bg-black mr-2 w-32 justify-around items-center text-white flex py-1 px-2 shadow-md shadow-black rounded-md border border-transparent text-base font-medium ease-in-out duration-300 hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white sm:ml-3 sm:text-sm"
                    :   "bg-black mr-2 w-32 justify-around items-center text-white flex py-1 px-2 shadow-md shadow-black rounded-md border border-transparent text-base font-medium ease-in-out duration-300 hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white sm:ml-3 sm:text-sm "
                }
                onClick={() => previous()}
                disabled={page <= 0 ? true : false}   
            >
                <HiArrowSmLeft size={20} />
                Previous
            </button>
            <button 
                className={
                    movements.length < page + 10 ? 
                        "opacity-20 bg-black ml-2 w-32 justify-around items-center text-white flex py-1 px-2 shadow-md shadow-black rounded-md border border-transparent text-base font-medium ease-in-out duration-300 hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white sm:ml-3 sm:text-sm"
                    : "bg-black ml-2 w-32 justify-around items-center text-white flex py-1 px-2 shadow-md shadow-black rounded-md border border-transparent text-base font-medium ease-in-out duration-300 hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white sm:ml-3 sm:text-sm"
                }
                onClick={() => next()}
                disabled={movements?.length < page + 10 ? true : false}
            >
                Next
                <HiArrowSmRight size={20}/>
            </button>
        </div>
    )
}
