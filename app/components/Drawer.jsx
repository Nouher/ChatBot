"use client"

import React, { useState } from 'react'
import { References } from '../data';

const Drawer = (props) => {
    const [open, setOpen] = useState(false);
    const result = References.filter((item) => item.referenceNumber == props.referenceNumber);

    return (
        <div className='inline-block'>
            <div className='px-1 cursor-pointer' onClick={() => { setOpen(!open) }}>
                <div className="select-none flex items-center justify-center w-6 h-6 text-[#92aa83] text-xs font-bold rounded-full border-2 border-gray-500">{props.referenceNumber}</div>
            </div>
            <div className={`fixed bg-[#fdfff9] top-0 right-0 z-50 h-screen p-4 px-6 overflow-y-auto transition-transform translate-x-full  w-80 dark:bg-gray-800 ${open ? 'transform-none' : ''}`} tabIndex="-1" aria-labelledby="drawer-right-label">
                <h5 className="inline-flex items-center  text-xl font-bold text-gray-700 dark:text-gray-400">{result[0].title}</h5>
                <h3 className='mb-4'>
                    {result[0].authors.map((item, i) => (
                        <span key={i} className='px-1 text-xs text-gray-500'>{item}</span>
                    ))}
                </h3>
                <button onClick={() => { setOpen(!open) }} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only" >Close menu</span>
                </button>
                <p className="mb-6 text-sm"> {result[0].desc}</p>

            </div>
        </div>
    )
}

export default Drawer
