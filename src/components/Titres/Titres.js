import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Titres.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'
import titres from '../../data/titres.json'

class Titres extends Component {
    render () {
        return (
            <div>
                <Header />
                    <div className="body">
                        {titres.map(({id, title, debut}) => (
                            <div>
                                <Link to={`/titre/${id}`} key={id}>
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

export default Titres