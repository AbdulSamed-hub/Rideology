import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function CycleText() {
  const words = [" Riding", " Learning", " Safety"];
  const [index, setIndex] = useState(0);

  const total = words.length;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 1300);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className='mt-5'>
      <span className="montserrat lg:text-[78px] text-[88px] text-slate-400 lg:text-white lg:font-light">
        {`Bike `}  
        <AnimatePresence mode="wait">
          <motion.h1
            key={`words_${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.08 }}
            className="inline-block montserrat lg:text-[78px] text-[88px] text-slate-4 00 lg:text-white font-bold"
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </span>
    </div>
  );
}
