import { useStore } from '../store/store'

function Footer() {
    const isDark = useStore((state: any) => state.isDark);

    return (
        <div className = { (isDark ? `bg-zinc-950 border-white` : `bg-zinc-200 border-black`) + ` ` + `border-t-2 w-full h-32 flex items-center justify-center`}>
            <h1 className = { (isDark ? `text-slate-300` : `text-slate-500`) + ` ` + `text-center font-thin text-xl` }>Created by Kumar Piyush <br /> {`(vocarista)`}</h1>
        </div>
    )
}

export default Footer;