import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useStore } from './store/store'
import Splash from './components/splash'
import Projects from './components/Projects'

function App() {
  const toggleView = useStore(state => state.toggleView);
  const isDark = useStore(state => state.isDark);
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

  return (
    <div className= { (isDark ? `bg-zinc-900` : `bg-neutral-200`) + ` App h-full` }>
      <Splash />
      <Projects />
    </div>
  )
}

export default App
