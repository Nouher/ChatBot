import Image from 'next/image'
import { MdLibraryAddCheck } from 'react-icons/md'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { TbSend } from 'react-icons/tb'
import Drawer from './components/Drawer'

export default function Home() {
  return (
    <div className='container px-40 py-20'>
      <div>
        <h1 className='text-4xl font-bold py-3'>What are Sings of COVID-19 ?</h1>
        <span className='text-[#7e963e] text-2xl uppercase font-semibold py-2 flex gap-2 items-center'><MdLibraryAddCheck size={24} /> Lumina</span>
        <div className='py-2 text-xl '>
          The signs or symptoms of COVID-19 include fever, coughing, sneezing, sore throat, fatigue, shortness of breath, blisters on the back of the palm, loss of senses of smell and taste <Drawer referenceNumber={1} />,
          Fever, cough, and fatigue are the most common symptoms of COVID-19 infection, but other References symptoms include sputum production, headache, hemoptysis, diarrhea, dyspnea, and lymphopenia <Drawer referenceNumber='3' /><Drawer referenceNumber='1' />.
        </div>
        <div className='py-4 flex gap-1'>
          <button type="button" className="uppercase text-[#adc178] hover:text-white border-2 border-[#adc178] hover:bg-[#adc178] focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-md px-6 py-2 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Copy</button>
          <button type="button" className="uppercase text-[#adc178] hover:text-white border-2 border-[#adc178] hover:bg-[#adc178] focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-md px-6 py-2 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring--[#adc178]">Elaborate</button>
          <button type="button" className="uppercase text-[#adc178] hover:text-white border-2 border-[#adc178] hover:bg-[#adc178] focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-md px-6 py-2 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Simplify</button>

        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div>
          <span className='text-[#7e963e] text-2xl uppercase font-semibold py-2 flex gap-2 items-end'><HiOutlineDocumentText size={30} /> Source</span>
          <div className='flex gap-1 mt-4'>
            <Drawer referenceNumber='2' />
          </div>
          <p className='py-2 text-xl'>
            Assessment of Serum L-Ficolin Level as Inflammatory Marker and Its Correlation with Serum C-Reactive Protein, D-Dimer and Ferritin in a Sample of Iraqi COVID-19 Patients
          </p>
        </div>
      </div>

      <form className='mt-6'>
        <div className="relative">
          <input type="text" id="search" className="block outline-none w-full p-4  text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#adc178] focus:border-[#adc178] " placeholder="Follow up quesion" />
          <button type="submit" className="text-[#adc178] absolute right-4 bottom-4 ease-in duration-100 hover:text-gray-900"><TbSend size={30} /></button>
        </div>
      </form>





    </div>
  )
}
