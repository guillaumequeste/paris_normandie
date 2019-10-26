import React, { Component } from 'react'
import './Profil.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

class Profil extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="body">
                    <h2>Profil</h2>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Profil