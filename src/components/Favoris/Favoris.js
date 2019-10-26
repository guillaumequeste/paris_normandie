import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Favoris.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'
import favoris from '../../data/favoris.json'

class Favoris extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="body">
                    {favoris.map(({id, title, debut}) => (
                        <div>
                        <Link to={`/favori/${id}`} key={id}>
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

export default Favoris