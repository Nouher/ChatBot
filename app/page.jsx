"use client"
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MdLibraryAddCheck } from 'react-icons/md'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { TbSend } from 'react-icons/tb'
import Drawer from './components/Drawer'
import TypingAnimation from './components/TypingAnimation'
import axios from 'axios'

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatLog]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }]);

    sendMessage(inputValue);

    setInputValue('');
  }


  const sendMessage = (message) => {
    // const url = 'https://api.openai.com/v1/completions';
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const headers = {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
    }
    const data = {
      title: 'Test@qq',
      body: message,
      userId: 1
    }
    // const data = {
    //   model: "gpt-3.5-turbo-0613",
    //   messages: [{ "role": "user", "content": message }]
    // }
    setIsLoading(true)

    axios.post(url, data).then((response) => {
      console.log(response);
      setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.body }]);
      setIsLoading(false)
    }).catch((error) => {
      setIsLoading(false)
      console.log(error)
    })
  }

  return (
    <>
      <div className='container px-40 py-20'>
        <h1 className='text-7xl font-bold text-gray-400 text-center absolute z-0 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] '>ChatBot</h1>
        {
          chatLog.map((message, index) => (

            <div key={index} className='relative z-10 border-2 border-[#adc178] bg-gray-50  rounded-xl p-6  mb-10 px-40'>
              <div ref={messagesEndRef} />
              <h1 className='text-4xl capitalize text-[#444e3d] font-bold py-6'>{message.message}</h1>
              {message.type == 'bot' &&
                <div>
                  <span className='text-[#7e963e] text-2xl uppercase font-semibold py-2 flex gap-2 items-center'><MdLibraryAddCheck size={24} /> Lumina</span>
                  <div className='py-2 text-xl '>
                    The signs or symptoms of COVID-19 include fever, coughing, sneezing, sore throat, fatigue, shortness of breath, blisters on the back of the palm, loss of senses of smell and taste <Drawer referenceNumber={1} />,
                    Fever, cough, and fatigue are the most common symptoms of COVID-19 infection, but other References symptoms include sputum production, headache, hemoptysis, diarrhea, dyspnea, and lymphopenia <Drawer referenceNumber='3' /><Drawer referenceNumber='1' />.
                  </div>
                  <div className='py-4 flex gap-1'>
                    <button type="button" className="uppercase text-[#adc178] hover:text-white border-2 border-[#adc178] hover:bg-[#adc178] focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-md px-6 py-2 text-center mr-2 mb-2 ">Copy</button>
                    <button type="button" className="uppercase text-[#adc178] hover:text-white border-2 border-[#adc178] hover:bg-[#adc178] focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-md px-6 py-2 text-center mr-2 mb-2 ">Elaborate</button>
                    <button type="button" className="uppercase text-[#adc178] hover:text-white border-2 border-[#adc178] hover:bg-[#adc178] focus:ring-4 focus:outline-none focus:ring-green-300 font-semibold rounded-lg text-md px-6 py-2 text-center mr-2 mb-2 ">Simplify</button>

                  </div>
                  <hr className="h-px my-8 bg-gray-200 border-0 "></hr>
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
              }
            </div>
          ))
        }
        {
          isLoading && <TypingAnimation />
        }


      </div>
      <form className='fixed mt-6 bottom-6 left-[50%] -translate-x-[50%] w-[90%]  z-40' onSubmit={handleSubmit}>
        <div className="relative shadow-2xl">
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="block outline-none w-full p-4  text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#adc178] focus:border-[#adc178] " placeholder="Follow up quesion" />
          <button type="submit" className="text-[#adc178] absolute right-4 bottom-4 ease-in duration-100 hover:text-gray-900"><TbSend size={30} /></button>
        </div>
      </form>
    </>
  )
}
