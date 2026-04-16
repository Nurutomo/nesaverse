import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import WelcomeCard from './components/WelcomeCard'
import SectionHeader from './components/SectionHeader'
import FeatureCards from './components/FeatureCards'
import AppFooter from './components/AppFooter'
import { instagramAccounts } from './data/instagramAccounts'

function App() {
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )
  function toggleTheme() {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch { /* ignore */ }
  }

  return (
    <div className="site">
      <Header dark={dark} onToggleTheme={toggleTheme} accounts={instagramAccounts} />

      <main className="main">
        <WelcomeCard accounts={instagramAccounts} />
        <SectionHeader />
        <FeatureCards accounts={instagramAccounts} />
      </main>

      <AppFooter />
    </div>
  )
}

export default App
