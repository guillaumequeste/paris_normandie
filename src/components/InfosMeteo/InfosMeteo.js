import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../AlireFavorisInfosTitres.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'
import aLire from '../../data/infosMeteo.json'

class InfosMeteo extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="body">
                    <h2>Infos et météo du jour :</h2>
                    <div className="articles">
                        {aLire.map(({id, title}) => (
                            <Link to={`/infoMeteo/${id}`} key={id} className="titre_article">
                                <div className="titre_article_image">
                                    <div className="titre_article_image_apercu">
                                        <img src={require("../../img/image.jpg")} alt="imageInfosMeteo" className="apercu"/>
                                    </div>
                                </div>
                                <div className="titre_article_title">
                                    {title}
                                </div>
                                <div className="container_cercle">
                                    <div className="cercle_supp">
                                        <div className="icone_supp">
                                            <img src={require("../../img/read.png")} alt="star" className="size_icone_supp"/>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default InfosMeteo