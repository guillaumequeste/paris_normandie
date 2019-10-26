import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Header from './components/elements/Header'
import Footer from './components/elements/Footer'

const App = () => (
  <>
    <Header />
    <div className="body">
      <h2>Playlists</h2>
      <Link to="/infosMeteo">Infos météo</Link>
      <Link to="/titres">Titres</Link>
    </div>
    <Footer />
  </>
)

export default App;