import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
const [width, setWidth] = React.useState(window.innerWidth)

React.useEffect( () => {
    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
} )
    return width <= 1024 ? (
        <div></div>
    ) : (
        <nav className="absolute w-[100vw] lg:h-15 h-20 top-0 px-8 bg-gray-900/50 backdrop-blur-md flex items-center overflow-hidden justify-between">
            <div></div>
            <div className="flex items-center gap-x-5 navbar">
                <NavLink to='/' className={({isActive}) => isActive ? `text-3xl lg:text-2xl tracking-wide karla text-white`: `text-3xl lg:text-2xl tracking-wide karla text-white/30`}>Home</NavLink>
                <NavLink to='/guide' className={({isActive}) => isActive ? `text-3xl lg:text-2xl tracking-wide karla text-white`: `text-3xl lg:text-2xl tracking-wide karla text-white/30`}>Guide</NavLink>
                <NavLink to='/credits' className={({isActive}) => isActive ? `text-3xl lg:text-2xl tracking-wide karla text-white`: `text-3xl lg:text-2xl tracking-wide karla text-white/30`}>Credits</NavLink>
            </div>
        </nav>
    )
 }