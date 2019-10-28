import React, { Component } from 'react'
import './SAbonner.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

class SAbonner extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="body">
                    <h2>S'abonner</h2>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SAbonner