import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '../store/store'

function Projects() {
    const isDark = useStore((state: any) => state.isDark)
    const isMobile = useStore((state: any) => state.isMobile)
    const [projects, setProjects] = useState([])
    const [selectedId, setSelectedId] = useState(null)
    // const [selectedProject, setSelectedProject] = useState([])

    interface Project {
        id: any,
        name: string,
        url: string,
        thumbnail: string,
        desc: string,
        tags: Array<string>,
        start_date: string,
        update_date: string
    }

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
        <div className = {`projects h-screen flex flex-col items-center`}>
            <motion.div
            className = "projects-container grid sm:grid-cols-1 lg:grid-cols-3 gap-10 place-items-center">
                {projects.map((project: Project) => {
                    return <motion.div layoutId= { project.id } onClick={() => setSelectedId(project.id) } whileHover={{scale: 1.05}} whileTap={{scale: 1}}
                    className = { (isDark ? `bg-white text-black` : `bg-neutral-900 text-white`) + ` ` + `w-[400px] h-[225px] flex flex-col hover:outline hover:outline-4 hover:outline-blue-600` + ` ` + (selectedId !== null ? `brightness-reduce` : ``)
                    + ` ` + `rounded-xl text-left p-3`}>
                        <motion.h1 className = {`text-xl font-bold`}>{ project.name }</motion.h1>
                    </motion.div>
                })}
             </motion.div>
             <AnimatePresence>
                {selectedId && (
                    <motion.div layoutId = {selectedId} className = {(isMobile ? `w-[384px] h-[216px]` : `w-[600px] h-[400px]`) + ` ` + (isDark ? `bg-white text-black` : `bg-zinc-800 text-white`) + ` ` + `z-10 absolute`}>
                        <motion.h1> { projects.filter((project: Project) => project.id === selectedId)[0].name } </motion.h1>
                        <motion.button onClick = {() => setSelectedId(null)}>x</motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Projects;