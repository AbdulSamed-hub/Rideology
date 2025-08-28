import { animate } from 'animejs'
import { useNavigate } from 'react-router-dom'

const Button = () => {
  const navigate = useNavigate()

  const buttonHover = () => {
    animate('.button', {
        'background-color' : '#3654ff',
        duration: 600,
        easing: 'easeOut'
    })
    animate('.button-svg', {
        translateX: '5px',
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
        translateX: '-5px',
        duration: 600,
        easing: 'easeIn'
    })
  }
  
  return (
    <button className="button cursor-pointer mx-auto mt-24 border-[0.2em] border-[#3654ff] rounded-md flex items-center justify-center gap-x-4 w-[22em] h-[5.2em] lg:w-[16em] lg:h-[3.2em]" onMouseEnter={buttonHover} onMouseLeave={buttonHoverReverse} onClick={() => navigate('/guide/1.1')}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="lg:w-8 lg:h-8 w-10 h-10 mr-3 button-svg">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
      </svg>
      <div className="karla text-4xl lg:text-2xl mr-2">
        Learn More
      </div>
    </button>
  );
}

export default Button;
