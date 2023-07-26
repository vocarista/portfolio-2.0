// import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '../store/store';
import ThemePicker from './ThemePicker';

function Navigation() {
    const isDark = useStore((state: any) => state.isDark);
    const isMobile = useStore((state: any) => state.isMobile);

    function MobileNav() {
        return(
            <motion.div className = { (isDark ? `bg-zinc-950 shadow-neutral-700` : `bg-zinc-200 shadow-black`) + ` ` +
            `shadow-lg w-full h-auto mb-5 flex flex-row item-center p-5 justify-between` }
            transition={{ duration: 0.2 }}>
                <motion.h1
                className={`text-center font-bold text-xl mt-3
                ${isDark ? 'text-white' : 'text-black'}`}
            style={{'fontFamily' : 'monospace'}}>
                
                { `{ "vocarista" }` }
            </motion.h1>
                <ThemePicker />
            </motion.div>
        )
    }

    function DesktopNav () {
        return (
            <motion.div className = { (isDark ? `bg-zinc-950 shadow-neutral-700` : `bg-zinc-200 shadow-black`) + ` ` +
            `shadow-lg w-full h-auto mb-5 flex flex-row items-center p-5 justify-between` }
            transition={{ duration: 0.2 }}>
                 <motion.h1
                className={`text-center font-bold text-2xl
                ${isDark ? 'text-white' : 'text-black'}`}
            style={{'fontFamily' : 'monospace'}}>
                
                { `{ "vocarista" }` }
            </motion.h1>
                <ThemePicker />
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