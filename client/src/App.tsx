import { useState, useEffect } from 'react'
import { useStore } from './store/store'
import Splash from './components/Splash'
import Projects from './components/Projects'

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

  return (
    <div className= { (isDark ? `bg-zinc-900` : `bg-white`) + ` App h-full` }>
      <Splash />
      <Projects />
    </div>
  )
}

export default App
