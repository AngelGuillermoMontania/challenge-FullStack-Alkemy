import React from 'react'

export default function Buttons({setVisible, errors, submit}) {
    return (
        <div className="bg-lightGray px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse sm:justify-around">
            <button
                type="button"
                className="mt-3 w-full my-4 inline-flex justify-center rounded-md border border-black shadow-sm px-4 py-2 bg-red-600 text-base hover:outline-black font-medium outline-double ease-in-out duration-300 text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:my-0 sm:w-32 sm:text-sm"
                onClick={() => setVisible(false)}
            >
                Cancel
            </button>
            <button
                type="button"
                className={
                    !errors.empty ?
                        "w-full opacity-10 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lightBlue text-base font-medium outline-double ease-in-out duration-300 text-black hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-32 sm:text-sm"
                        : "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lightBlue text-base font-medium outline-double ease-in-out duration-300 text-black hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-32 sm:text-sm"
                }
                onClick={(event) => submit(event)}
                disabled={!errors.empty ? true : false}
            >
                Add
            </button>
        </div>
    )
}
