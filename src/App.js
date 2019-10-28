import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Header from './components/elements/Header'
import Footer from './components/elements/Footer'

const App = () => (
  <>
    <Header />
    <div className="body">
      <h2>PlayLists :</h2>
      <div className="div_btn_playlists">
        <div className="btn_playlists">
          <Link to="/infosMeteo" className="btn_playlist">
            <div className="btn_playlist_gauche">
              <div className="btn_playlist_gauche_logo">
                <div className="btn_playlist_gauche_logo_image">
                  logo
                </div>
                <div className="btn_playlist_gauche_logo_fr">
                  .fr
                </div>
              </div>
              <div className="btn_playlist_gauche_titre">
                <div className="btn_playlist_gauche_titre2">
                  Infos et Météo du jour
                </div>
              </div>
            </div>
            <div className="btn_playlist_droite">
              <div className="btn_playlist_droite_button">
                <div className="cercle">
                  <div className="triangle"></div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="btn_playlists">
        <Link to="/titres" className="btn_playlist">
            <div className="btn_playlist_gauche">
              <div className="btn_playlist_gauche_logo">
                <div className="btn_playlist_gauche_logo_image">
                  logo
                </div>
                <div className="btn_playlist_gauche_logo_fr">
                  .fr
                </div>
              </div>
              <div className="btn_playlist_gauche_titre">
                <div className="btn_playlist_gauche_titre2">
                  Les titres à la une !
                </div>
              </div>
            </div>
            <div className="btn_playlist_droite">
              <div className="btn_playlist_droite_button">
                <div className="cercle">
                  <div className="triangle"></div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </>
)

export default App;