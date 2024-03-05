import { useState, useEffect } from 'react';
import { useStore } from '../store/store';
import { motion } from 'framer-motion';
import Loader from './Loader';

function Skills() {
    const [skills, setSkills] = useState([]);
    const isDark = useStore((state: any) => state.isDark);
    const isMobile = useStore((state: any) => state.isMobile);
    const [isLoading, setIsLoading] = useState(true);
    const base = useStore((state: any) => state.base);

    interface Skill {
        id: string,
        name: string,
        icon: string
    }

    useEffect(() => {
        async function getSkills() {
            try {
                const response = await fetch(base + '/skills');
                const json = await response.json();
                setSkills(json);
            } catch(err) {
                console.log(`Error fetching Skills: ${err}`);
            } finally {
                setIsLoading(false);
            }
        }
        getSkills();
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <div id = "Skills" className = { `Skills h-auto mt-10 flex flex-col items-center pb-20` }>
            <motion.h1
                className={`text-center font-bold ${
                isMobile ? 'text-5xl mb-10' : 'text-7xl mb-20'
                } ${isDark ? 'text-white' : 'text-black'}`}
            >
                Skills
            </motion.h1>
            <motion.div className = { `skills-container grid gap-10 p-5` + ` ` + (isMobile ? `grid-cols-3` : `grid-cols-5`)} >
                {
                    skills.map((skill: Skill) => {
                        return <motion.div className = { `flex flex-col items-center change-card` } 
                        initial={{ visibility: 'hidden', y: 200 }}
                            whileInView={{ visibility: 'visible', y: 0}}
                            viewport={{ once: true }}
                            transition = {{duration: 0.4}}
                            whileHover={{scale: 1.05}}>
                            <motion.img className = { (isMobile ? `w-[50px] h-[50px]` : `w-[150px] h-[150px]`) + ` ` + `rounded-full bg-white` } src = {skill.icon} />
                            <motion.p className = { `font-bold text-center` + ` ` + (isDark ? `text-white` : `text-black`) + ` ` + (isMobile ? `text-lg mt-2` : `text-2xl mt-5`)}>{ skill.name }</motion.p>
                        </motion.div>
                    })
                }
            </motion.div>
        </div>
    )
}

export default Skills;