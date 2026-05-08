import { ThemeProvider } from './contexts/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { CursorGlow } from './components/CursorGlow'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <div className="divider" style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)' }} />
        <Experience />
        <div className="divider" style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)' }} />
        <Projects />
        <div className="divider" style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)' }} />
        <Skills />
        <div className="divider" style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)' }} />
        <Contact />
      </main>
    </ThemeProvider>
  )
}

export default App
