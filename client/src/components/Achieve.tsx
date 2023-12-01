import { useState, useEffect } from 'react';
import { useStore } from '../store/store';
import { motion } from 'framer-motion';
import Loader from './Loader';
import ThemedButton from './ThemedButton';

function Achieve() {
    const isDark = useStore((state: any) => state.isDark);
    const isMobile = useStore((state: any) => state.isMobile);
    const [isLoading, setIsLoading] = useState(true);
    const [achieves, setAchieves] = useState([]);
    const base = useStore((state: any) => state.base);
    

    interface Achieve {
        id: string,
        name: string,
        desc: string,
        date: Date,
        url: string
    }

    useEffect(() => {
        async function getAchieve() {
            try {
                const response = await fetch(base + '/achievements');
                const json = await response.json();
                setAchieves(json);
            } catch(err) {
                console.log(`Error encountered while fetching achievements: ${err}`);
            } finally {
                setIsLoading(false)
            }
        }
        getAchieve();
    }, [])

    if(isLoading) {
        return <Loader />
    }

    return (
        <div id = "Achievements" className = { `Achieve h-auto mt-10 flex flex-col items-center pb-20` }>
            <motion.h1
        className={`text-center font-bold ${
          isMobile ? 'text-5xl mb-10' : 'text-7xl mb-20'
        } ${isDark ? 'text-white' : 'text-black'}`}
      >
        Achievements
      </motion.h1>
            {achieves.length > 0 ? <motion.div className = { `achieve-container grid sm:grid-cols-1 lg:grid-cols-3 gap-10` } >
                    {achieves.map((achieve: Achieve) => {
                        return <motion.div className={`${
                            isDark ? 'bg-gradient-to-br from-slate-400 to-white text-black' : 'bg-gradient-to-br from-slate-400 to-slate-800 text-white'
                          } rounded-xl p-3 shadow-lg shadow-neutral-700 ${
                            isMobile ? 'w-[90vw] h-auto' : 'w-[400px] h-auto'
                          } place-items-center flex flex-col`}
                          initial={{ visibility: 'hidden', x: 200 }}
                        whileInView={{ visibility: 'visible', x: 0 }}
                        viewport={{ once: true }}
                        transition = {{duration: 0.1}}
                        whileHover={{scale: 1.05}}>
                            <motion.h1 className = "text-2xl font-bold">{ achieve.name }</motion.h1>
                            <motion.p className = "text-lg">{ achieve.desc }</motion.p>
                            <motion.div className = "flex flex-row mt-2">
                                <motion.h1 className = {`font-thin text-xl text-gray-800`} >Date: </motion.h1>
                                <motion.h1 className = {`font-semibold text-xl ml-3`}>{`${achieve.date}`}</motion.h1>
                            </motion.div>
                            <ThemedButton text={`Visit`} url={achieve.url} isDark={isDark ? false : true} />
                        </motion.div>
                    })}
            </motion.div> : <motion.div className={`${
                        isDark ? 'bg-gradient-to-br from-slate-400 to-white text-black' : 'bg-gradient-to-br from-slate-400 to-slate-800 text-white'
                      } rounded-xl p-3 shadow-lg shadow-neutral-700 ${
                        isMobile ? 'w-[90vw] h-[180px]' : 'w-[400px] h-[225px]'
                      } school-card items-center justify-center flex flex-col`}
                        initial={{ visibility: 'hidden', x: 200 }}
                        whileInView={{ visibility: 'visible', x: 0 }}
                        viewport={{ once: true }}
                        transition = {{duration: 0.1}}
                        whileHover={{scale: 1.05}}>
                        <motion.h1 className = {`text-2xl font-bold`} >So... This is embarrassing</motion.h1>
                    </motion.div>}
        </div>
    )
}

export default Achieve;