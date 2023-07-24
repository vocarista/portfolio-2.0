import { useEffect, useState } from 'react';
import { useStore, } from '../store/store';
import { motion } from 'framer-motion';

function Schools() {
  const [schools, setSchools] = useState<Array<School>>([]);
  const isDark = useStore((state: any) => state.isDark);
  const isMobile = useStore((state: any) => state.isMobile);
  // const setIsSchoolsLoading = useStore((state: any) => state.setIsSchoolsLoading);
  const [isLoading, setIsLoading] = useState(true);

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
        const response = await fetch('https://api.main.vocarista.com/education');
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
    return (<div className="flex items-center justify-center w-full h-full fixed top-0 left-0 bg-zinc-800 z-50">
             <div className = "loader"></div>
            </div>)
  }

  return (
    <>
      <motion.h1
        className={`text-center font-bold ${
          isMobile ? 'text-5xl mb-10' : 'text-7xl mb-20'
        } ${isDark ? 'text-white' : 'text-black'}`}
      >
        Education
      </motion.h1>
      <div className="Schools pb-20 flex flex-col items-center overflow-y-hidden">
        {/* Use responsive grid classes */}
        <motion.div className="schools-container pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-auto scrollbar-hide">
          {schools.map((school: School) => (
            <motion.div
              className={`${
                isDark ? 'bg-white text-black' : 'bg-zinc-800 text-white'
              } rounded-xl p-3 shadow-lg shadow-neutral-700 ${
                isMobile ? 'w-[368px] h-[198px]' : 'w-[400px] h-[225px]'
              } school-card`}
              key={school.id}
              initial={{ visibility: 'hidden', x: 200 }}
              whileInView={{ visibility: 'visible', x: 0 }}
              viewport={{ once: true }}
              transition = {{duration: 0.3}}
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
              <motion.p className="flex-grow text-xl font-thin w-60">
                {school.degree + (school.course ? ` in ` + school.course : ``)}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Schools;