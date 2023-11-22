import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useStore, } from '../store/store'
import removeIcon from '../assets/remove.png'
import ThemedButton from './ThemedButton'
import Loader from './Loader';

function Projects() {
    const isDark = useStore((state: any) => state.isDark)
    const isMobile = useStore((state: any) => state.isMobile)
    // const setIsProjectsLoading = useStore((state: any) => state.setIsProjectsLoading)
    const [projects, setProjects] = useState([])
    const [selectedId, setSelectedId] = useState(null)
    const [selectedProject, setSelectedProject] = useState<Project>(projects[0])
    const [isLoading, setIsLoading] = useState(true);

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
          try {
            const response = await fetch('https://api.main.vocarista.com/projects');
            const json = await response.json();
            setProjects(json);
          } catch (error) {
            console.error('Error fetching projects:', error);
          } finally {
            setIsLoading(false);
          }
        }
        getProjects();
      }, []);

      if (isLoading) {
        return <Loader />
      }

    return (
        <div id = "Projects" className = {`projects h-full flex flex-col items-center pb-10`}>
            <motion.h1 className = {(isMobile ? `text-5xl mb-10` : `text-7xl mb-20`) + ` ` + (isDark ? `text-white` : `text-black`) + ` ` + `font-bold`}>Projects</motion.h1>
            <motion.div
            className = "projects-container grid lg:grid-cols-3 gap-10 place-items-center">
                {projects.map((project: Project) => {
                    return <motion.div layoutId= { project.id } onClick={() => {
                        setSelectedId(project.id)
                        setSelectedProject(project)}} whileHover={{scale: 1.05}} whileTap={{scale: 1}}
                    className = {(isMobile ? `w-[90vw] h-[198px]` : `w-[400px] h-[225px]` ) + ` ` + `flex flex-col hover:outline hover:outline-4 hover:outline-blue-600` + ` ` + (selectedId !== null ? `brightness-reduce` : ``)
                    + ` ` + `rounded-xl text-left p-3 bg-cover shadow-neutral-700 shadow-lg text-white`} style = {{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url(${project.thumbnail})`}}
                    initial = {{visibility: 'hidden', x: 200}}
                    whileInView={{visibility: 'visible', x: 0}}
                    viewport={{once: true}}>
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
                    <motion.div layoutId = {selectedId} className = {(isMobile ? `w-[90vw] h-auto self-center centered-popup` : `w-[720px] min-h-[395px] h-auto`) + ` ` + (isDark ? 'bg-gradient-to-br from-slate-400 to-white text-black' : 'bg-gradient-to-br from-slate-400 to-slate-800 text-white') + ` ` + `z-10 absolute` + 
                ` ` + `p-4 rounded-xl shadow-lg shadow-neutral-700 flex flex-col`}
                    >
                       <motion.div className = "flex">
                        <motion.h1 className = "text-3xl font-bold flex-grow" >{ selectedProject.name} </motion.h1>
                        <motion.img onClick = {() => setSelectedId(null)} src= { removeIcon } className={ `cursor-pointer h-8 hover:brightness-75 transition-opacity duration-200` }/>
                       </motion.div>
                       <motion.div className= { `flex` + ` ` + (isMobile ? `flex-col` : `flex-row`) + ` ` }>
                        <motion.div className = { `mt-5 mr-5` }>
                            <motion.p className = { `w-80` }>{ selectedProject.desc }</motion.p>
                            <motion.p className = { `w-80 mt-5` }>Tags: { selectedProject.tags.map((tag: string) => tag + `, `) }</motion.p>
                        </motion.div>
                        <motion.div>
                            <motion.img src = { selectedProject.thumbnail } className = { `w-[352px] h-[198] mt-5 shadow-lg rounded-xl` + ` ` + (isDark ? `shadow-neutral-700` : `shadow-black`)}/>
                        </motion.div>
                       </motion.div>
                        <motion.div className="flex justify-center mt-5">
                            <ThemedButton text={`Visit`} url={selectedProject.url} isDark={isDark ? false : true} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Projects;