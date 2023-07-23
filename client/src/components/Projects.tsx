import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '../store/store'

function Projects() {
    const isDark = useStore((state: any) => state.isDark)
    const isMobile = useStore((state: any) => state.isMobile)
    const [projects, setProjects] = useState([])
    const [selectedId, setSelectedId] = useState(null)
    const [selectedProject, setSelectedProject] = useState<Project>(projects[0])

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
            const response = await fetch('https://api.main.vocarista.com/main/projects');
            const json = await response.json();
            // console.log(json)
            setProjects(json)
        }
        getProjects();
    }, [])
    return (
        <div className = {`projects h-full flex flex-col items-center`}>
            <motion.h1 className = {(isMobile ? `text-4xl mb-10` : `text-7xl mb-20`) + ` ` + (isDark ? `text-white` : `text-black`) + ` ` + `font-bold`}>Projects</motion.h1>
            <motion.div
            className = "projects-container grid lg:grid-cols-3 gap-10 place-items-center">
                {projects.map((project: Project) => {
                    return <motion.div layoutId= { project.id } onClick={() => {
                        setSelectedId(project.id)
                        setSelectedProject(project)}} whileHover={{scale: 1.05}} whileTap={{scale: 1}}
                    className = {(isMobile ? `w-[368px] h-[198px]` : `w-[400px] h-[225px]` ) + ` ` + `flex flex-col hover:outline hover:outline-4 hover:outline-blue-600` + ` ` + (selectedId !== null ? `brightness-reduce` : ``)
                    + ` ` + `rounded-xl text-left p-3 bg-cover shadow-neutral-700 shadow-lg text-white`} style = {{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url(${project.thumbnail})`}}>
                        <motion.h1 className = {`text-3xl font-bold`}>{ project.name }</motion.h1>
                        <motion.div className = "flex flex-row mt-2">
                            <motion.h1 className = {`font-thin text-xl text-gray-400`} >Last Updated: </motion.h1>
                            <motion.h1 className = {`font-semibold text-xl ml-3`}>{project.update_date}</motion.h1>
                        </motion.div>
                        <motion.div className = "flex flex-row mt-2">
                            <motion.h1 className = {`font-thin text-xl text-gray-400`} >Created: </motion.h1>
                            <motion.h1 className = {`font-semibold text-xl ml-3`}>{project.start_date}</motion.h1>
                        </motion.div>
                        <motion.h1 className = {`text-2xl text-center text-gray-300 mt-10 cursor-default`}>Click to know more</motion.h1>
                    </motion.div>
                })}
             </motion.div>
             <AnimatePresence>
                {selectedId && (
                    <motion.div layoutId = {selectedId} className = {(isMobile ? `w-[384px] h-[216px] self-center` : `w-[640px] h-[360px]`) + ` ` + (isDark ? `bg-white text-black` : `bg-zinc-800 text-white`) + ` ` + `z-10 absolute`}
                    >
                        <motion.h1> { selectedProject.name } </motion.h1>
                        <motion.button onClick = {() => setSelectedId(null)}>x</motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Projects;