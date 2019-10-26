import React, { Component } from 'react'
import './ErrorNotFound.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

class ErrorNotFound extends Component {
    render () {
        return (
            <div>
                <Header />
                <h1>Error Not Found</h1>
                <Footer />
            </div>
        )
    }
}

export default ErrorNotFound