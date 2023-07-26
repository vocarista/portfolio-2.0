import { useEffect } from 'react'
import { useStore } from './store/store'
import Splash from './components/Splash'
import Projects from './components/Projects'
import Roles from './components/Roles'
import Schools from './components/Schools'
import Certs from './components/Certs'
import Skills from './components/Skills'
import Achieve from './components/Achieve'
import About from './components/About'

function App() {
  const toggleView = useStore((state: any) => state.toggleView);
  const isDark = useStore((state: any) => state.isDark);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) toggleView(true);
      else toggleView(false)
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  // if (isProjectsLoading || isRolesLoading || isSchoolsLoading) {
  //   return (<div className="flex items-center justify-center w-full h-full fixed top-0 left-0 bg-zinc-800 z-50">
  //            <div className = "loader"></div>
  //           </div>)
  // }

  return (
    <div className= { (isDark ? `bg-zinc-900` : `bg-white`) + ` App h-full` }>
      <Splash />
      <Projects />
      <Roles />
      <Schools />
      <Certs />
      <Skills />
      <Achieve />
      <About />
    </div>
  )
}

export default App
