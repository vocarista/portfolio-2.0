import { useStore, } from "../store/store";
import { useEffect, useState } from 'react'
import { motion } from "framer-motion";

function Roles() {
    interface Roles {
        id: string,
        name: string,
        employer: string,
        icon: string,
        start_date: string,
        end_date: string,
        isOngoing: boolean,
        desc: string
    }
    const [roles, setRoles] = useState<Array<Roles>>();
    const isDark = useStore((state: any) => state.isDark);
    const isMobile = useStore((state: any) => state.isMobile);
    // onst setIsRolesLoading = useStore((state: any) => state.setIsRolesLoading)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getRoles() {
          try {
            const response = await fetch('https://api.main.vocarista.com/roles');
            const json = await response.json();
            setRoles(json);
          } catch(err) {
            console.log(`Error fetching Projects: ${err}`);
          } finally {
            setIsLoading(false);
          }
        }
        getRoles();
      }, [])

      if (isLoading) {
        return (<div className="flex items-center justify-center w-full h-full fixed top-0 left-0 bg-zinc-800 z-50">
                 <div className = "loader"></div>
                </div>)
      }
    return (
        <div className="Roles h-auto mt-10 flex flex-col items-center pb-20">
            <motion.h1 className = { `text-center font-bold` + ` ` + (isMobile ? `text-5xl mb-10` : `text-7xl mb-20`) + ` ` + (isDark ? `text-white` : `text-black`)} >Roles</motion.h1>
            <motion.div className = { `roles-container h-auto grid grid-rows items-center` }>
                {
                    roles && roles.map((role: Roles, key: number) => {
                        return <motion.div className = { (isDark ? `bg-white text-black` : `bg-zinc-800 text-white`) + ` ` + `w-[320px] h-[180px] rounded-xl p-3 shadow-lg shadow-neutral-700` }
                            initial = {{visibility: 'hidden', x: 200}}
                            whileInView={{visibility: 'visible', x: 0}}
                            viewport={{once: true}}
                            transition = {{duration: 0.3}}>
                            <motion.div className = { `flex` }>
                                <motion.h1 className = { `flex-grow text-2xl font-semibold` }>{ role.name }</motion.h1>
                                <motion.img src = { role.icon } className = { `h-10 rounded-lg` }/>
                            </motion.div>
                            <motion.div className = { `flex text-lg` }>At: { <p className = { `ml-2 font-semibold text-lg` }>{ role.employer }</p> }</motion.div>
                            <motion.div className = { `flex text-lg` }>From: { <p className = { `ml-2 font-semibold text-lg` }>{ role.start_date }</p> }</motion.div>
                            <motion.div className = { `flex text-lg` }>To: { <p className = { `ml-2 font-semibold text-lg` }>{ (role.isOngoing ? `Present` : role.end_date) }</p> }</motion.div>
                        </motion.div>
                    })
                }
            </motion.div>
        </div>
    )
}

export default Roles;