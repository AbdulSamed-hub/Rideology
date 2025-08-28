import { useParams } from "react-router-dom"
import guidedata from "../components/data/guidedata"
import ReactMarkdown from 'react-markdown';
import { animate } from 'animejs'
import React from "react"
import Loader from "../components/Loader"
import ScrollToTop from "../components/Scroll";

export default function GuidePage() {
    const [guide, setGuide] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        animate('.button', {
            y: [
                {to: '-15px', duration: 600, ease: 'outExpo',},
                {to: '0px', duration: 800, ease: 'outBounce' }
            ],
            loop: true,
            loopDelay: 800,
        })
    })

    React.useEffect(() => {
        animate('.loader', {
            opacity: [ 1 , 0 ],
            duration: 600,
            delay: 1000,
            easing: 'easeInOutExpo'
        })
        
        animate('.guide', {
            opacity: [ 0 , 1 ],
            duration: 600,
            delay: 1000,
            easing: 'easeInOutExpo'
        })
    }, [id])
    
    React.useEffect(() => {
        const extractData = (id) => {
            const data = guidedata.find(guide => guide.id.toString() === id)
            setGuide(data)
        }
        extractData(id)
    }, [id])

    const buttonHover = () => {
        animate('.button', {
            'background-color' : '#3654ff',
            duration: 600,
            easing: 'easeOut'
        })
        animate('.button-svg', {
            translateY: '-2px',
            duration: 600,
            easing: 'easeOut'
        })
    }

  const buttonHoverReverse = () => {
        animate('.button', {
            'background-color' : 'rgba(0, 0, 0, 0)',
            duration: 600,
            easing: 'easeOut'
        })
        animate('.button-svg', {
            translateY: '0px',
            duration: 600,
            easing: 'easeIn'
        })
    }


    const guideParas = guide?.paragraphs.map((para, index) => {
        const containerClass = guide.images[index] === '' ? '' : index%2 !== 0 ? 'flex flex-row-reverse max-w-[130ch] gap-x-2' : 'flex gap-x-2'
        const openImage = () => guide.links[index] === '' ? '' : window.open(`${guide.links[index]}`, '_blank')
        return (
            <div key={index}>
                {guide.titles[index] !== '' && (
                    <div className="text-2xl font-bold inter tracking-wide mb-3">
                    <ReactMarkdown key={guide.id} >{guide.titles[index]}</ReactMarkdown>
                    </div>
                )}
                <div key={guide.index} className={containerClass}>
                    <div className="ml-3 max-w-[102ch] font-extralight text-[#F2F2F8] inter tracking-wide leading-7">
                        <ReactMarkdown key={guide.title}>{para}</ReactMarkdown>
                    </div>
                    {guide.images[index] !== '' && (
                        <img key={index} src={guide.images[index]} alt='visual representation of the bike' onClick={openImage} className={`cursor-pointer w-[200px] h-[200px] object-cover rounded-md shadow-sm hover:shadow-lg ${index%2 !== 0 ? 'ml-1' : 'mr-16'} mb-2`}/>
                    )}
                </div>
            </div>
        )
    }) 

    return (
        <div className="w-fit mx-auto mt-25">
            <ScrollToTop />
            <div className="w-fit mx-auto mt-60 absolute loader">
                <Loader />
            </div>
            <div className="flex flex-col items-left gap-y-5 absolute right-0 w-[76vw] py-4 guide">
                <p className="text-5xl tracking-wide font-extrabold poppins mb-5 title">{guide?.title}</p>
                {guideParas ? guideParas: ''}
                {guide?.note && (
                    <p className="text-sm font-light ml-2 tracking-wide karla italic w-fit mt-12">{guide.note}</p>
                )}
                <button className="button cursor-pointer ml-108 mt-2 border-[0.2em] border-[#3654ff] rounded-3xl flex items-center justify-center gap-x-3 w-[12em] h-[3.2em]" onMouseEnter={buttonHover} onMouseLeave={buttonHoverReverse} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <svg className="button-svg" width="24px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    <p className="text-lg tracking-wide font-light">Back To Top</p>
                </button>
            </div>
        </div> )
}