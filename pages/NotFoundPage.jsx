import { animate } from 'animejs'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
    const navigate = useNavigate()
    React.useEffect(() => {})
    
    return (
        <div className='image-404 w-[100vw] h-[100vh] overflow-hidden'>
            <div className='w-[100vw] h-[100vh] bg-gray-900/20 backdrop-blur-xs pt-10'>
                <div>
                    <p className='mx-auto text-7xl w-fit tracking-wide roboto font-light'>Uh Oh... We Crashed</p>
                    <button onClick={() => navigate('/')} className='mt-20 mx-auto block cursor-pointer w-120 h-20 bg-black text-5xl font-extralight roboto tracking-wide rounded-3xl'>Go Back</button>
                </div>
                <img src='/notfoundbike.png' className='absolute top-1 left-5 scale-50'/>
                
            </div>
        </div>
    )
}

               
