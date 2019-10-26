import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ALire.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'
import aLire from '../../data/aLire.json'

class ALire extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="body">
                    {aLire.map(({id, title, debut}) => (
                        <div>
                        <Link to={`/a_lire/${id}`} key={id}>
                            {title}
                        </Link><br></br>
                        <p>{debut}</p>
                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        )
    }
}

export default ALire