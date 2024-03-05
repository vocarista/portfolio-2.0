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
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import NavList from './components/NavList'
import Background from './components/Background'
// import MaintenanceComponent from './components/MaintenanceComponent'

function App() {
  const toggleView = useStore((state: any) => state.toggleView);
  const isDark = useStore((state: any) => state.isDark);
  const setTheme = useStore((state: any) => state.setTheme);
  const showNavList = useStore((state: any) => state.showNavList);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) toggleView(true);
      else toggleView(false)
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return (
    <div className= { (isDark ? `bg-transparent` : `bg-white`) + ` App h-full overflow-x-hidden` }>
      <Background />
      <Navigation />
      { showNavList && <NavList /> }
      <Splash />
      <Projects />
      <Roles />
      <Schools />
      <Certs />
      <Skills />
      <Achieve />
      <About />
      <Footer />
      {/* <MaintenanceComponent /> */}
    </div>
  )
}

export default App
