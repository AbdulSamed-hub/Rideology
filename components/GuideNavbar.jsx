import { NavLink } from "react-router-dom"
import React from 'react'

export default function GuideNavbar() {
    const [introOpen, setIntroOpen] = React.useState(true)
    const [fundOpen, setFundOpen] = React.useState(true)
    const [safeOpen, setSafeOpen] = React.useState(true)
    
    return (
        <div className="fixed bottom-0 left-0 h-[91.5vh] flex flex-col gap-y-8 items-left justify-center px-6">
            <div className="flex flex-col gap-y-2">
                <p className="text-xl tracking-wide cursor-pointer montserrat" onClick={() => setIntroOpen(prevstate => !prevstate)}>Introduction</p>
                <div className={`ml-4 flex flex-col items-left gap-y-1 transition-all duration-300 overflow-hidden ${introOpen ? 'max-h-fit' : 'max-h-0'}`}>
                    <NavLink to='/guide/1.1' className={({isActive}) => isActive ? `text-md tracking-wide montserrat text-white hover:underline` : `text-md tracking-wide montserrat text-white/30 hover:text-white hover:underline duration-200`}>Bikes by Riding Style</NavLink>
                    <NavLink to='/guide/1.2' className={({isActive}) => isActive ? `text-md tracking-wide montserrat text-white hover:underline` : `text-md tracking-wide montserrat text-white/30 hover:text-white hover:underline duration-200`}>Riding Posture</NavLink>
                    <NavLink to='/guide/1.3' className={({isActive}) => isActive ? `text-md tracking-wide montserrat text-white hover:underline` : `text-md tracking-wide montserrat text-white/30 hover:text-white hover:underline duration-200`}>Vision</NavLink>
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <p className="text-xl tracking-wide cursor-pointer montserrat" onClick={() => setFundOpen(prevstate => !prevstate)}>Fundamentals</p>
                <div className={`ml-4 flex flex-col items-left gap-y-1 transition-all duration-300 overflow-hidden ${fundOpen ? 'max-h-fit' : 'max-h-0'}`}>
                    <NavLink to='/guide/2.1' className={({isActive}) => isActive ? `text-md tracking-wide montserrat text-white hover:underline` : `text-md tracking-wide montserrat text-white/30 hover:text-white hover:underline duration-200`}>Clutch Control</NavLink>
                    <NavLink to='/guide/2.2' className={({isActive}) => isActive ? `text-md tracking-wide montserrat text-white hover:underline` : `text-md tracking-wide montserrat text-white/30 hover:text-white hover:underline duration-200`}>Throttle Control</NavLink>
                    <NavLink to='/guide/2.3' className={({isActive}) => isActive ? `text-md tracking-wide montserrat text-white hover:underline` : `text-md tracking-wide montserrat text-white/30 hover:text-white hover:underline duration-200`}>Counter Steering</NavLink>
                    <NavLink to='/guide/2.4' className={({isActive}) => isActive ? `text-md tracking-wide montserrat text-white hover:underline` : `text-md tracking-wide montserrat text-white/30 hover:text-white hover:underline duration-200`}>Shifting</NavLink>
                    <NavLink to='/guide/2.5' className={({isActive}) => isActive ? `text-md tracking-wide montserrat text-white hover:underline` : `text-md tracking-wide montserrat text-white/30 hover:text-white hover:underline duration-200`}>Braking</NavLink>
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <p className="text-xl tracking-wide cursor-pointer montserrat" onClick={() => setSafeOpen(prevstate => !prevstate)}>Safety</p>
                <div className={`ml-4 flex flex-col items-left gap-y-1 transition-all duration-300 overflow-hidden ${safeOpen ? 'max-h-fit' : 'max-h-0'}`}>
                    <NavLink to='/guide/3.1' className={({isActive}) => isActive ? `text-md tracking-wide montserrat text-white hover:underline` : `text-md tracking-wide montserrat text-white/30 hover:text-white hover:underline duration-200`}>Safety Gear Overview</NavLink>
                    <NavLink to='/guide/3.2' className={({isActive}) => isActive ? `text-md tracking-wide montserrat text-white hover:underline` : `text-md tracking-wide montserrat text-white/30 hover:text-white hover:underline duration-200`}>Choosing a Helmet</NavLink>
                    <NavLink to='/guide/3.3' className={({isActive}) => isActive ? `text-md tracking-wide montserrat text-white hover:underline` : `text-md tracking-wide montserrat text-white/30 hover:text-white hover:underline duration-200`}>Choosing Riding Gear</NavLink>
                </div>
            </div>
        </div>
    )
}