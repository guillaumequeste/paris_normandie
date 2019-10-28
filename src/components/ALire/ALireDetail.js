import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../AlireFavorisInfosTitresDetail.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

const aLire = {
    1: { 
         title: "En Normandie, immersion dans le potager extraordinaire du champion de France des légumes géants",
         content: "Insolite. Depuis sept ans, Samuel Brault cultive des courges un peu spéciales dans son potager manchois. Et chaque année, il présente ses plus beaux spécimens au concours national des légumes géants de la Motte-Achard, en Vendée. Avec un potiron de 430 kg, il est encore une fois champion de France...."
     },
     2: { 
         title: "En Normandie, immersion dans le potager extraordinaire du champion de France des légumes géants",
         content: "Insolite. Depuis sept ans, Samuel Brault cultive des courges un peu spéciales dans son potager manchois. Et chaque année, il présente ses plus beaux spécimens au concours national des légumes géants de la Motte-Achard, en Vendée. Avec un potiron de 430 kg, il est encore une fois champion de France...."
     },
     3: { 
         title: "En Normandie, immersion dans le potager extraordinaire du champion de France des légumes géants",
         content: "Insolite. Depuis sept ans, Samuel Brault cultive des courges un peu spéciales dans son potager manchois. Et chaque année, il présente ses plus beaux spécimens au concours national des légumes géants de la Motte-Achard, en Vendée. Avec un potiron de 430 kg, il est encore une fois champion de France...."
     },
     4: { 
        title: "En Normandie, immersion dans le potager extraordinaire du champion de France des légumes géants",
        content: "Insolite. Depuis sept ans, Samuel Brault cultive des courges un peu spéciales dans son potager manchois. Et chaque année, il présente ses plus beaux spécimens au concours national des légumes géants de la Motte-Achard, en Vendée. Avec un potiron de 430 kg, il est encore une fois champion de France...."
    },
    5: { 
        title: "En Normandie, immersion dans le potager extraordinaire du champion de France des légumes géants",
        content: "Insolite. Depuis sept ans, Samuel Brault cultive des courges un peu spéciales dans son potager manchois. Et chaque année, il présente ses plus beaux spécimens au concours national des légumes géants de la Motte-Achard, en Vendée. Avec un potiron de 430 kg, il est encore une fois champion de France...."
    }
 }

class ALireDetail extends Component {
    render () {
        return (
            <div>
                <Header />
                    <div className="body body_detail">
                        <Link to="/infosMeteo" className="btn_titre">
                            <div className="btn_titre_logo">
                                <div className="btn_titre_logo_image">
                                NORMANDIE
                                </div>
                                <div className="btn_titre_logo_fr">
                                .fr
                                </div>
                            </div>
                            <div className="btn_titre_titre">
                                <div className="btn_titre_titre2">
                                    les infos et la météo du jour en Normandie
                                </div>
                            </div>
                        </Link>
                        <div className="detail_article">
                            <div className="detail_article_image">
                                <img src={require("../../img/image.jpg")} alt="image" className="view"/>
                            </div>
                            <div className="detail_article_texte">
                                <div className="detail_article_titre">
                                    <h2 className="detail_article_titre2">{aLire[this.props.match.params.id].title}</h2>
                                </div>
                                <div clasName="detail_article_content">
                                    <p className="detail_article_content2">{aLire[this.props.match.params.id].content}</p>
                                </div>
                            </div>
                            <div className="btns">
                                <div className="btn_base">
                                    <div className="disc fav">
                                        <div className="btn_base2">
                                            <div className="btn_icon_star">
                                                <img src={require("../../img/star.png")} alt="star" className="btn_size_icon_star"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn_base">
                                    <div className="disc toread">
                                        <div className="btn_base2">
                                            <div className="btn_icon_read">
                                                <img src={require("../../img/read.png")} alt="read" className="btn_size_icon_read"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn_base">
                                    <div className="disc stop">
                                        <div className="btn_base2">
                                            <div className="btn_icon_read">
                                                <img src={require("../../img/read.png")} alt="read" className="btn_size_icon_read"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn_base">
                                    <div className="disc pause">
                                        <div className="btn_base2">
                                            <div className="btn_icon_read">
                                                <img src={require("../../img/read.png")} alt="read" className="btn_size_icon_read"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default ALireDetail