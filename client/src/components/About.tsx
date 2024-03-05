import { useState, useEffect } from 'react'
import { useStore } from '../store/store'
import { motion } from 'framer-motion'
import Loader from './Loader';

function About() {
    const isDark = useStore((state: any) => state.isDark);
    const isMobile = useStore((state: any) => state.isMobile);
    const [isLoading, setIsLoading] = useState(true);
    const [about, setAbout] = useState("")
    const base = useStore((state: any) => state.base);

    useEffect(() => {
        async function getAbout() {
            try {
                const response = await fetch(base + '/about',);
                const json = await response.json();
                setAbout(json.about);
            } catch(err) {
                console.log(`Error fetching about: ${err}`);
            } finally {
                setIsLoading(false);
            }
        }
        getAbout();
    })

    if (isLoading) {
        return <Loader />
    }

    return (
        <div id = "About" className = { `h-auto mt-10 flex flex-col items-center justify-center pb-20`}>
             <motion.h1
                className={`text-center font-bold ${
                isMobile ? 'text-5xl mb-10' : 'text-7xl mb-20'
                } ${isDark ? 'text-white' : 'text-black'}`}
            >
                
                About Me
            </motion.h1>
            <motion.div className = { `grid items-center gap-10 p-10 rounded-xl shadow-lg shadow-neutral-700` + ` ` + (isMobile ? `w-[90vw] grid-cols-1` : `w-[80vw] grid-cols-2`) + ` change-card ` + (isDark ? 'bg-gradient-to-br from-slate-400 to-white text-black' : 'bg-gradient-to-br from-slate-400 to-slate-800 text-white') } 
            initial ={{opacity: 0, x: 300}}
            whileInView = {{opacity: 1, x: 0}}
            transition = {{duration: 0.3}}
            viewport={{once: true}}>
                <motion.div className = { `flex flex-col items-center` }>
                    <motion.img src = { `https://i.imgur.com/Mizegwh.jpg`} className = { (isMobile ? `w-[200px] h-[200px]` : `w-[300px] h-[300px]`) + ` ` + `rounded-full border-4 border-black shadow-lg` + ` ` + (isDark ? `shadow-neutral-700` : `shadow-black`) } />
                    <motion.h1 className = { `text-3xl font-extrabold text-center mt-5` } >Kumar Piyush</motion.h1>
                    <motion.p className = { `text-lg font-thin text-center` + ` ` + (isDark ? `text-neutral-700` : `text-neutral-300`) } >B.Tech (CSE) 2026, Manipal University Jaipur</motion.p>
                </motion.div>
                <motion.div className= { `flex flex-col` }>
                    <motion.p className = { `text-center font-normal` + ` ` + (isMobile ? `text-lg` : `text-xl`) }>
                        {about}
                    </motion.p>
                    <motion.div className = { `mt-8 flex flex-row justify-between` }>
                        <motion.img src = { `https://i.imgur.com/VKydwlG.png` } onClick = {() => {
                            window.open("https://linkedin.com/in/vocarista", "_blank")
                        }} className = { `h-[50px] w-[50px] rounded-full hover:scale-105 cursor-pointer duration-100 active:scale-95 shadow-lg`  + ` ` + (isDark ? `shadow-neutral-700` : `shadow-black`)} />
                        <motion.img src = { `https://i.imgur.com/XnafFSm.png` } onClick = {() => {
                            window.open("https://instagram.com/vocarista", "_blank")
                        }} className = { `h-[50px] w-[50px] rounded-full hover:scale-105 cursor-pointer duration-100 active:scale-95 shadow-lg`  + ` ` + (isDark ? `shadow-neutral-700` : `shadow-black`)} />
                        <motion.img src = { `https://i.imgur.com/t2nlfPP.png` } onClick = {() => {
                            window.open("https://github.com/vocarista", "_blank")
                        }} className = { `h-[50px] w-[50px] rounded-full hover:scale-105 cursor-pointer duration-100 active:scale-95 shadow-lg`  + ` ` + (isDark ? `shadow-neutral-700` : `shadow-black`)} />
                        <motion.img src = { `https://i.imgur.com/kuGwTNw.png` } onClick = {() => {
                            window.open("mailto:vocarista@gmail.com", "_blank")
                        }} className = { `h-[50px] w-[50px] rounded-full hover:scale-105 cursor-pointer duration-100 active:scale-95 shadow-lg`  + ` ` + (isDark ? `shadow-neutral-700` : `shadow-black`)} />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default About;