import { useStore } from '../store/store';
import { motion } from 'framer-motion';
import closeIcon from '../assets/remove.png';

function NavList() {
  const isDark = useStore((state: any) => state.isDark);
  const isMobile = useStore((state: any) => state.isMobile);
  const toggleShowNavList = useStore((state: any) => state.toggleShowNavList);

  return (
    <motion.div
      className={`flex items-start justify-between nav-list h-full z-50 right-0 top-0 fixed shadow-xl p-10 ${
        isMobile ? 'w-[70vw]' : 'w-[30vw]'
      } ${isDark ? 'bg-zinc-950 shadow-neutral-700' : 'bg-zinc-200 shadow-black'}`}
    initial = {{opacity: 0, x: 200}}
    whileInView={{opacity: 1, x: 0}}
    transition={{duration: 0.3}}>
      <motion.div className="flex flex-col">
        <motion.a
          onClick={() => {
            toggleShowNavList();
          }}
          href="#Projects"
          className={`text-2xl focus:underline duration-150 mb-5 hover:text-neutral-500 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Projects
        </motion.a>
        <motion.a
          onClick={() => {
            toggleShowNavList();
          }}
          href="#Roles"
          className={`text-2xl focus:underline duration-150 mb-5 hover:text-neutral-500 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Roles
        </motion.a>
        <motion.a
          onClick={() => {
            toggleShowNavList();
          }}
          href="#Schools"
          className={`text-2xl focus:underline duration-150 mb-5 hover:text-neutral-500 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Education
        </motion.a>
        <motion.a
          onClick={() => {
            toggleShowNavList();
          }}
          href="#Certifications"
          className={`text-2xl focus:underline duration-150 mb-5 hover:text-neutral-500 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Certifications
        </motion.a>
        <motion.a
          onClick={() => {
            toggleShowNavList();
          }}
          href="#Skills"
          className={`text-2xl focus:underline duration-150 mb-5 hover:text-neutral-500 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Skills
        </motion.a>
        <motion.a
          onClick={() => {
            toggleShowNavList();
          }}
          href="#Achievements"
          className={`text-2xl focus:underline duration-150 mb-5 hover:text-neutral-500 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          Achievements
        </motion.a>
        <motion.a
          onClick={() => {
            toggleShowNavList();
          }}
          href="#About"
          className={`text-2xl focus:underline duration-150 mb-5 hover:text-neutral-500 ${isDark ? 'text-white' : 'text-black'}`}
        >
          About Me
        </motion.a>
        <motion.a
          onClick={() => {
            toggleShowNavList();
          }}
          href="https://api.main.vocarista.com/download"
          className={`text-2xl focus:underline duration-150 mb-5 hover:text-neutral-500 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Download CV
        </motion.a>
      </motion.div>
      <motion.img
        onClick={() => {
          toggleShowNavList();
        }}
        src={closeIcon}
        className="cursor-pointer h-8 hover:opacity-75 transition-opacity duration-200"
      />
    </motion.div>
  );
}

export default NavList;
