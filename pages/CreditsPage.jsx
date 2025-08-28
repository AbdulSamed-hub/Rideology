import Tooltip from "../components/YoutubeDisplay";
import React from "react";
import Loader from "../components/Loader";
import { animate } from "animejs";
import TextPressure from '../components/TextPressure';

export default function CreditsPage() {
    
    React.useEffect(() => {
        animate('.credits', {
            filter: ['blur(12px)', 'blur(0px)'],
            duration: 1000,
            delay: 1200,
            easing: 'easeInOutExpo'
        })
        animate('.loader', {
            opacity: [ 1,0 ],
            duration: 600,
            delay: 1000,
            easing: 'easeInOutExpo'
        })
        animate('.main-content', {
            opacity: [0,1],
            duration: 600,
            delay: 1000,
            easing: 'easeInOutExpo'
        })
    }, [])

    return (
        <div className="bg-blue-950 w-[100vw] min-h-[100vh] pb-8">
            <div className="w-fit ml-[50vw] mt-60 absolute loader">
                <Loader />
            </div>
            <div className="credits-hero w-[100vw] h-[85vh] bg-cover p-1 main-content">
                <div className="w-fit max-w-[26vw] mt-45 absolute right-0">
                    <h1 className="text-6xl max-w-[10ch] montserrat tracking-wide leading-17 credits">Riders Behind the</h1>
                    <div style={{position: 'relative', height: '300px'}}>
                        <TextPressure
                            text="Ride"
                            flex={true}
                            alpha={false}
                            stroke={false}
                            width={true}
                            weight={true}
                            italic={true}
                            textColor="#ffffff"
                            strokeColor="#ff0000"
                            minFontSize={16}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-26 p-4 main-content">
                <h3 className="poppins text-5xl tracking-wide font-bold">Credits</h3>
                <p className="text-xl ml-3 max-w-[80ch] font-light tracking-wide leading-8 mt-4 flex flex-col gap-y-4">
                    <span>This guide wouldn’t have been possible without the countless creators who’ve shared their knowledge, tips, and passion for biking online. A lot of what you’ll find here is inspired by their insights, riding techniques, and overall approach to bike safety and enjoyment.</span>
                    <span> Huge shoutout to all the YouTubers and bloggers whose content helped shape this guide whether it was breaking down tricky maneuvers or just sharing the love for the ride.</span>
                    <span> Be sure to check out their channels linked below and show them some support — they truly deserve it.</span></p>
            </div>
            <div className="flex gap-x-35 mx-auto w-fit mt-20 bg-blue-950 main-content">
                <Tooltip name='Anurag' link='https://www.youtube.com/@AnuragSalgaonkar' subs='393K'/>
                <Tooltip name='Papa Saar' link='https://www.youtube.com/@PAPASAARmoto' subs='111K'/>
                <Tooltip name='Moto Control' link='https://www.youtube.com/@MotoControlEn' subs='201K'/>
                <Tooltip name='MotorInc' link='https://www.youtube.com/@motorinc' subs='477K'/>
            </div>
        </div>
    )
}