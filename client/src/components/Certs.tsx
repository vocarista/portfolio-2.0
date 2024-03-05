import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { useStore } from '../store/store';
import ThemedButton from './ThemedButton';
import Loader from './Loader';

function Certs() {
    const [certs, setCerts] = useState([]);
    const isDark = useStore((state: any) => state.isDark);
    const isMobile = useStore((state: any) => state.isMobile);
    const [isLoading, setIsLoading] = useState(true);
    const base = useStore((state: any) => state.base);

    interface Certs {
        id: string,
        name: string,
        org_name: string,
        date: string,
        url: string
    }

    useEffect(() => {
        async function getCerts() {
            try {
                const response = await fetch(base + '/certs');
                const json = await response.json();
                setCerts(json);
            } catch(err) {
                console.log(`Error fetching certificates: ${err}`);
            } finally {
                setIsLoading(false);
            }
        }
        getCerts();
    }, [])

    if (isLoading) {
        return <Loader />
      }

    return (
        <div id = "Certifications" className = "Certs h-auto mt-10 flex flex-col items-center pb-20">
            <motion.h1
                className={`text-center font-bold ${
                isMobile ? 'text-5xl mb-10' : 'text-7xl mb-20'
                } ${isDark ? 'text-white' : 'text-black'}`}
            >
                Certifications
            </motion.h1>
            <motion.div className= {`schools-container grid sm:grid-cols-1 lg:grid-cols-3 gap-10`} >
                {
                    certs.map((cert: Certs) => {
                        return <motion.div className = { `${
                            isDark ? 'bg-gradient-to-br from-slate-400 to-white text-black' : 'bg-gradient-to-br from-slate-400 to-slate-800 text-white'
                          } rounded-xl p-3 shadow-lg shadow-neutral-700 ${
                            isMobile ? 'w-[90vw] h-auto' : 'w-[400px] h-auto'
                          } cert-card flex flex-row change-card` }
                          key={cert.id}
                            initial={{ visibility: 'hidden', x: 200 }}
                            whileInView={{ visibility: 'visible', x: 0 }}
                            viewport={{ once: true }}
                            transition = {{duration: 0.1}}
                            whileHover={{scale: 1.05}}>
                            <motion.div className="flex-grow">
                                <motion.h1 className="text-xl font-bold">
                                    {cert.name}
                                </motion.h1>
                                <motion.p className = { `font-extralight text-lg` } >{ cert.org_name }</motion.p>
                                <motion.div className = { `flex text-lg font-extralight` }>Issued: { <p className = { `ml-2 font-medium text-lg` }>{ cert.date }</p> }</motion.div>
                            </motion.div>
                            <ThemedButton text = "View" url = {cert.url} isDark = {isDark ? false : true} />
                        </motion.div>
                    })
                }
            </motion.div>
        </div>
    )
}

export default Certs;