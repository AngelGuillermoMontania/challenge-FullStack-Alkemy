import React from 'react'
import { useSelector } from 'react-redux'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Form({ setOpen }) {

    const userDB = useSelector(state => state.user)
    const [value, onChange] = React.useState(new Date());

    return (
        <form>
            <div className='m-1 md:m-4'>
                <label htmlFor='concept'>Concept</label>
                <input
                    type="text"
                    name="concept"
                    id="concept"
                    className="focus:ring-indigo-500 h-8 my-1 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter your concept"
                />
            </div>
            <div className='m-1 md:m-4'>
                <label htmlFor='type'>Type</label>
                <select
                    id="type"
                    name="type"
                    className="focus:ring-indigo-500 my-1 h-8 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                >
                    <option hidden>~</option>
                    <option>ENTRY</option>
                    <option>EXIT</option>
                </select>
            </div>
            <div className='m-1 md:m-4 relative'>
                <div className="absolute inset-y-0 left-0 pl-3 top-7 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <label htmlFor='amount'>Concept</label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    className="focus:ring-indigo-500 h-8 my-1 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter amount"
                />
            </div>
            <div className='m-1 md:m-4'>
                <label htmlFor='category'>Category</label>
                <select
                    name="category"
                    id="category"
                    autoComplete="feature"
                    className="focus:ring-indigo-500 h-8 my-1 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                >
                    <option hidden>~</option>
                    <option>NO SE</option>
                </select>
            </div>
            <div className='m-1 md:m-4 relative'>
                <label htmlFor='date'>Select your day</label>
                <div className='flex justify-center'>
                    <Calendar 
                        onChange={onChange} 
                        value={value} 
                        calendarType='US'
                        className='rounded-lg p-2'
                    />
                </div>
            </div>
            <div className="bg-lightGray px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                    type="button"
                    className="mt-3 w-full my-4 inline-flex justify-center rounded-md border border-black shadow-sm px-4 py-2 bg-red-600 text-base hover:outline-black font-medium outline-double ease-in-out duration-300 text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:my-0 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-lightBlue text-base font-medium outline-double ease-in-out duration-300 text-black hover:bg-blue-800 hover:text-darkWhite focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                >
                    Add
                </button>
            </div>
        </form>
    )
}
