
import { useStore } from '../store/store'
import { motion } from 'framer-motion';
import Button from './Button';
import ScrollAnimation from '../assets/ScrollAnimation';

function Splash() {
    const isDark = useStore((state: any) => state.isDark);
    const isMobile = useStore((state: any) => state.isMobile);

    return (
        <div className= {`splash flex flex-col justify-center items-center pb-20 pt-36 gap-10` + (isMobile ? `h-auto` : `h-full`)}>
            <motion.div
            className = 'text-center flex flex-col items-center'>
                <motion.h1
                initial = {{opacity: 0, scale: 0, y: 100}}
                animate = {{opacity: 1, scale: 1, y: 0}}
                transition = {{duration: 0.6}}
                className = { (isMobile ? `text-3xl` : `text-5xl` ) + ` font-semibold ` + (isDark ? `text-white` : `text-black`)}>Hi! I am</motion.h1>
                <motion.h1
                initial = {{opacity: 0, scale: 0, y: 150}}
                animate = {{opacity: 1, scale: 1, y: 0}}
                transition = {{duration: 0.6}}
                className = { (isMobile ? `text-5xl` : `text-9xl` ) + ` font-thin mt-6 ` + (isDark ? `text-white` : `text-black`)}>Kumar Piyush</motion.h1>
                
                <motion.h1
                initial = {{opacity: 0, scale: 0, y: 200}}
                animate = {{opacity: 1, scale: 1, y: 0}}
                transition = {{duration: 0.6}}
                className = {(isMobile ? 'text-3xl' : 'text-6xl') + ` ` + `mt-8 font-thin bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text` }>{ `{ "learner", "dreamer", "developer" }` }</motion.h1>
                <Button text = {`Download CV`} url = {`https://api.main.vocarista.com/download`} />
                <ScrollAnimation />
            </motion.div>
        </div>
    )
}

export default Splash;