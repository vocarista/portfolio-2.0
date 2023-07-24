import { motion } from 'framer-motion';

function Button(props: any) {
    const { text, url, isDark } = props;

    return (
        <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        className = { (isDark ? `bg-white` : `bg-zinc-900`) + ` w-36 flex h-12 justify-center items-center m-5 mt-10 hover:shadow-md ` + (isDark ? `hover:shadow-zinc-300` : `hover:shadow-zinc-950`) }>
            <a className = { (isDark ? `text-black` : `text-white`) + ` flex-grow font-semibold text-xl text-center` } href = { url }>{ text }</a>
        </motion.div>
    )
}

export default Button;