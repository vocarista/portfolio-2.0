import { useStore } from '../store/store'
import { motion } from 'framer-motion';
import LightButton from '../assets/sun.png'
import DarkButton from '../assets/moon.png'

function ThemePicker() {
    const toggleTheme= useStore((state: any) => state.toggleTheme);
    const isDark = useStore((state: any) => state.isDark);

    return(
        <motion.div>
            <motion.img src = { isDark ? DarkButton : LightButton }
            className = { `theme h-[50px] w-[50px] rounded-full cursor-pointer border-2 p-1` + ` ` + (isDark ? `border-white` : `border-gray-400`)  } 
            onClick = {() => {
                toggleTheme();
            }} 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            transition = {{duration: 0.1}}/>
        </motion.div>
    )
}

export default ThemePicker;