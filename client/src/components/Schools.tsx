import { useEffect, useState } from 'react';
import { useStore, } from '../store/store';
import { motion } from 'framer-motion';
import Loader from './Loader'

function Schools() {
  const [schools, setSchools] = useState<Array<School>>([]);
  const isDark = useStore((state: any) => state.isDark);
  const isMobile = useStore((state: any) => state.isMobile);
  // const setIsSchoolsLoading = useStore((state: any) => state.setIsSchoolsLoading);
  const [isLoading, setIsLoading] = useState(true);
  
  const base = useStore((state: any) => state.base);

  interface School {
    id: string;
    name: string;
    degree: string;
    course: string;
    grade: string;
    icon: string;
    start_date: string;
    end_date: string;
    isOngoing: boolean;
  }

  useEffect(() => {
    async function getSchools() {
      try {
        const response = await fetch(base + '/education');
        const json = await response.json();
        setSchools(json);
      } catch(err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getSchools();
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      
      <div id = "Schools" className="Schools pb-20 flex flex-col items-center">
      <motion.h1
        className={`text-center font-bold ${
          isMobile ? 'text-5xl mb-10' : 'text-7xl mb-20'
        } ${isDark ? 'text-white' : 'text-black'}`}
      >
        Education
      </motion.h1>
        <motion.div className= {`schools-container pb-10 h-auto flex items-center gap-10` + ` ` + (isMobile ? `flex-col` : `flex-row`)}>
          {schools.map((school: School) => (
            <motion.div
              className={`${
                isDark ? 'bg-gradient-to-br from-slate-400 to-white text-black' : 'bg-gradient-to-br from-slate-400 to-slate-800 text-white'
              } rounded-xl p-3 shadow-lg shadow-neutral-700 ${
                isMobile ? 'w-[90vw] h-[220px]' : 'w-[400px] h-[225px]'
              } school-card`}
              key={school.id}
              initial={{ visibility: 'hidden', x: 200 }}
              whileInView={{ visibility: 'visible', x: 0 }}
              viewport={{ once: true }}
              transition = {{duration: 0.1}}
              whileHover={{scale: 1.05}}
            >
              <div className="flex">
                <motion.h1 className="flex-grow text-2xl font-bold">
                  {school.name}
                </motion.h1>
                <motion.img
                  src={school.icon}
                  className="h-14 rounded-lg"
                />
              </div>
              <motion.p className="flex-grow text-xl font-semibold w-60">
                {school.degree + (school.course ? ` in ` + school.course : ``)}
              </motion.p>
              <motion.div className = { `flex text-lg` }>Grade: { <p className = { `ml-2 font-semibold text-lg` }>{ school.grade }</p> }</motion.div>
              <motion.div className = { `flex text-lg` }>Started: { <p className = { `ml-2 font-semibold text-lg` }>{ school.start_date }</p> }</motion.div>
              <motion.div className = { `flex text-lg` }>Graduated: { <p className = { `ml-2 font-semibold text-lg` }>{ school.isOngoing ? school.end_date + ` (expected)` : school.end_date }</p> }</motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Schools;