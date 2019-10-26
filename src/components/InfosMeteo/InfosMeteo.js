import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './InfosMeteo.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'
import infosMeteo from '../../data/infosMeteo.json'

class InfosMeteo extends Component {
    render () {
        return (
            <div>
                <Header />
                    <div className="body">
                        {infosMeteo.map(({id, title, debut}) => (
                            <div>
                                <Link to={`/infoMeteo/${id}`} key={id}>
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

export default InfosMeteo