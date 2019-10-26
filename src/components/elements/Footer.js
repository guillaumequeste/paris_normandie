import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Footer.css'

class Footer extends Component {
    render () {
        return (
            <div>
                <Link to="/profil">Profil</Link>
                <Link to="/favoris">Favoris</Link>
                <Link to="/a_lire">ALire</Link>
                <Link to="/">Playlists</Link>
            </div>
        )
    }
}

export default Footer