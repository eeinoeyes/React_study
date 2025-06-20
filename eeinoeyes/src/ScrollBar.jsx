import { useEffect, useState } from 'react'
import './ScrollBar.css'

function ScrollProgressBar() {
   const [scrollPercent, setScrollPercent] = useState(0)

   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.scrollY
         const scrollHeight = document.documentElement.scrollHeight
         const clientHeight = document.documentElement.clientHeight

         const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100
         setScrollPercent(scrolled)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   return (
      <div>
         <header>head</header>
         <div className="bar" style={{ width: `${scrollPercent}%` }} />
         <main>main</main>
         <footer>footer</footer>
      </div>
   )
}

export default ScrollProgressBar
