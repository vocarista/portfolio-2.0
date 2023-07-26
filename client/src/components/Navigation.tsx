import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/store';
import ThemePicker from './ThemePicker';
import HamBurger from '../assets/hamburger.png'

function Navigation() {
    const isDark = useStore((state: any) => state.isDark);
    const isMobile = useStore((state: any) => state.isMobile);
    const showNavList = useStore((state: any) => state.showNavList);
    const toggleShowNavList = useStore((state: any) => state.toggleShowNavList)
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
  
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);

    
    const navbarStyles: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        visibility: visible && !showNavList ? 'visible' : 'hidden',
        opacity: visible && !showNavList ? 1 : 0,
        transition: 'visibility 0s, opacity 0.5s ease-in-out',
      };



    function MobileNav() {
        return(
            <motion.div className = { (isDark ? `bg-zinc-950 shadow-neutral-700` : `bg-zinc-200 shadow-black`) + ` ` +
            `shadow-lg w-full h-auto mb-5 flex flex-row item-center p-5 justify-between` }
            transition={{ duration: 0.2 }}
            style = {navbarStyles}>
                <motion.h1
                className={`text-center font-bold text-2xl mt-3
                ${isDark ? 'text-white' : 'text-black'}`}
            style={{ 'fontFamily' : 'monospace'}}>
                
                { `{ "vocarista" }` }
            </motion.h1>
            <motion.div className = 'flex flex-row items-center justify-end'>
                <ThemePicker />
                <motion.img src = { HamBurger }
            className = { `theme h-[50px] w-[50px] rounded-full cursor-pointer border-2 p-1 ml-5` + ` ` + (isDark ? `border-white` : `border-gray-400`)  } 
            onClick = {() => {
                toggleShowNavList();
            }} 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            transition = {{duration: 0.1}}/>
                </motion.div>
            </motion.div>
        )
    }

    function DesktopNav () {
        return (
            <motion.div className = { (isDark ? `bg-zinc-950 shadow-neutral-700` : `bg-zinc-200 shadow-black`) + ` ` +
            `shadow-lg w-full h-auto mb-5 flex flex-row items-center p-5 justify-between` }
            transition={{ duration: 0.2 }}
           style = {navbarStyles}>
                 <motion.h1
                className={`text-center font-bold text-4xl
                ${isDark ? 'text-white' : 'text-black'}`}
            style={{'fontFamily' : 'monospace'}}>
                
                { `{ "vocarista" }` }
            </motion.h1>
            <motion.div className = 'flex flex-row items-center justify-end'>
                <ThemePicker />
                <motion.img src = { HamBurger }
            className = { `theme h-[50px] w-[50px] rounded-full cursor-pointer border-2 p-1 ml-5` + ` ` + (isDark ? `border-white` : `border-gray-400`)  } 
            onClick = {() => {
                toggleShowNavList();
            }} 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            transition = {{duration: 0.1}}/>
                </motion.div>
            </motion.div>
        )
    }
    return (
        <div>
            {isMobile ? <MobileNav /> : <DesktopNav />}
        </div>
    )
}

export default Navigation;