import React, { Component } from 'react'
import './InfosMeteo.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

class InfosMeteo extends Component {
    render () {
        return (
            <div>
                <Header />
                <h1>Infos météo</h1>
                <Footer />
            </div>
        )
    }
}

export default InfosMeteo