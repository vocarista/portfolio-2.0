import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '../store/store'

function Projects() {
    const isDark = useStore(state => state.isDark)
    const isMobile = useStore(state => state.isMobile)
    const [projects, setProjects] = useState([])
    const [selectedId, setSelectedId] = useState(null)
    
    useEffect(() => {
        async function getProjects() {
            const response = await fetch('http://localhost:7120/main/projects');
            const json = await response.json();
            // console.log(json)
            setProjects(json)
        }
        getProjects();
    }, [])
    return (
        <div className = 'projects h-screen flex flex-col justify-center'>
            <motion.div
            className = "projects-container grid sm:grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
                {projects.map(project => {
                    return <motion.div layoutId= { project.id } onClick={() => setSelectedId(project.id)}
                    className = { (isDark ? `bg-white text-black` : `bg-zinc-800 text-white`) + ` ` + `w-[400px] h-[225px] flex flex-col` }>
                        <motion.h1>{ project.name }</motion.h1>
                    </motion.div>
                })}
             </motion.div>
            <AnimatePresence>
                {selectedId && (
                    <motion.div layoutId = {selectedId} className = {(isMobile ? `w-[400px] h-[600px]` : `w-[600px] h-[400px]`) + ` ` + (isDark ? `bg-white text-black` : `bg-zinc-800 text-white`) + ` ` + `absolute left-[50vw]`}>
                        <motion.h1> { projects.filter(project => project.id === selectedId)[0].name } </motion.h1>
                        <motion.button onClick = {() => setSelectedId(null)}>x</motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Projects;