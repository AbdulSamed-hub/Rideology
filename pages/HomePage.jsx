import CycleText from "../components/cycle-text";
import Button from "../components/Button";
import React from 'react'
import { animate } from "animejs";
import Loader from "../components/LazyLoader";

export default function HomePage() {

    const [width, setWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {

        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        if(width >= 1024) {
            const animation = 
                animate('.para',{
                    x: [-200,0],
                    duration: 1000,
                    filter: ['blur(15px)', 'blur(0px)'],
                    easing: 'easeOutExpo',
                    autoplay: false
                })
            const animationTrigger = document.querySelector('.para')
            const speed = 500
            const offset = 1200

            window.onscroll = function () {
                const scrollPercent = (window.pageYOffset - animationTrigger.offsetTop) + offset ;
                animation.seek((scrollPercent / speed) * 1000)
            }
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    })
    
    return width <= 1024 ? (
        <div className="flex justify-center items-center w-[100vw] h-[100vh]">
            <div className="flex justify-center items-center flex-col gap-y-2 text-center">
                <Loader />
                <p className="mt-15 text-3xl karla tracking-wide leading-11">We are Working on bringing the guide to mobile</p>
                <p className=" text-3xl karla tracking-wide leading-11">For now please open it on desktop</p>
            </div>
        </div>
    ) : (
            <div className="bg-blue-950 w-[100vw] min-h-[100vh] pb-8">
                <div className="hero w-[100vw] h-[35vh] lg:h-[85vh] lg:pt-30 pt-45 bg-cover">
                    <div className="w-fit lg:absolute mx-auto lg:right-0 lg:max-w-[40.2vw]">
                        <h1 className="montserrat lg:text-[78px] text-[88px] text-slate-400 lg:text-white lg:font-light tracking-wide leading-20 max-w-[15ch] lg:max-w-[15ch] ml-auto">Welcome to a Minimal Guide to:</h1>
                        <CycleText />
                    </div>
                </div>
                <div className="mt-50 px-15 para">
                    <h3 className="poppins lg:text-5xl text-7xl tracking-wide font-bold">Why Bikes ?</h3>
                    <p className="lg:ml-3 ml-6 max-w-[80ch] lg:text-xl text-3xl leading-12 lg:leading-8 font-light tracking-wide roboto mt-8 flex flex-col items-center gap-y-[18px]">
                        <span>Yeah, cars are safer — no doubt about that. You're in a metal box with airbags and crumple zones. But let’s be honest… bikes are just way more fun.</span>
                        <span>That feeling when you're out on the road, the bike light under you, picking up speed fast — it’s hard to beat. The control, the maneuverability, the wind blasting through your helmet — it’s not just transportation, it’s an experience. Plus, bikes are easier on fuel and always leave room to learn new stuff — whether it's cornering better or just getting smoother overall.</span>
                        <span>I get it, they aren’t the “safe” option — but that’s why I’m making this guide. I’m here to help make sure you don’t hurt yourself on those occasional rides, so you can enjoy everything that makes biking awesome, without the nasty surprises.</span>
                    </p>
                </div>
                <Button />
            </div>
        )
}