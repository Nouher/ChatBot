"use client"
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { IoMdAddCircleOutline } from 'react-icons/io'


import { useState } from "react";
import Image from 'next/image';


const Sidebar = () => {
   const [open, setOpen] = useState(false);

   return (
      <>

         {/* <!-- drawer init and show --> */}
         <div className="text-center fixed z-50">
            <button onClick={() => { setOpen(!open); console.log(open) }} className={`bg-[#eff1ed] absolute top-16 left-0 shadow-md rounded-r-md py-1 transition-transform translate-x-80 ${!open ? 'transform-none' : ''}`}>
               {!open ? <FiChevronRight size={30} /> : <FiChevronLeft size={30} />}
            </button>
         </div>

         {/* <!-- drawer component --> */}
         <div id="drawer-navigation" className={`fixed top-0 left-0 z-50 w-80 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-[#eff1ed]  ${open ? "transform-none" : ""}`} tabIndex="-1" aria-labelledby="drawer-navigation-label">
            <h5 id="drawer-navigation-label" className="text-[#627257] text-center py-3 text-2xl font-bold  uppercase ">
               Chat Bot
            </h5>
            <button className='flex align-items gap-2 text-[#92aa83] hover:text-gray-500 uppercase font-semibold border-2 border-[#92aa83] ease-in duration-100  hover:bg-[#e0edc5] my-5 px-5 py-3 rounded-md'>
               <IoMdAddCircleOutline size={24} />
               New Chat
            </button>
            <div className="py-10 overflow-y-auto">
               <ul className="space-y-2 font-medium">
                  <li>
                     <a href="#" className="flex items-center justify-between p-2 text-gray-900 rounded-lg  hover:bg-[#e0edc5]  group">
                        <span className="ml-3">Sings of COVID-19</span>
                        <MdDeleteOutline size={22} className='text-[#b0bea9] ease-in duration-100 hover:text-[#31362f]' onClick={() => { }} />
                     </a>
                  </li>
               </ul>
            </div>
         </div>

      </>
   )
}

export default Sidebar
