import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../AlireFavorisInfosTitresDetail.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

const titresDetail = {
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
    },
    6: { 
        title: "En Normandie, immersion dans le potager extraordinaire du champion de France des légumes géants",
        content: "Insolite. Depuis sept ans, Samuel Brault cultive des courges un peu spéciales dans son potager manchois. Et chaque année, il présente ses plus beaux spécimens au concours national des légumes géants de la Motte-Achard, en Vendée. Avec un potiron de 430 kg, il est encore une fois champion de France...."
    },
    7: { 
        title: "En Normandie, immersion dans le potager extraordinaire du champion de France des légumes géants",
        content: "Insolite. Depuis sept ans, Samuel Brault cultive des courges un peu spéciales dans son potager manchois. Et chaque année, il présente ses plus beaux spécimens au concours national des légumes géants de la Motte-Achard, en Vendée. Avec un potiron de 430 kg, il est encore une fois champion de France...."
    },
    8: { 
       title: "En Normandie, immersion dans le potager extraordinaire du champion de France des légumes géants",
       content: "Insolite. Depuis sept ans, Samuel Brault cultive des courges un peu spéciales dans son potager manchois. Et chaque année, il présente ses plus beaux spécimens au concours national des légumes géants de la Motte-Achard, en Vendée. Avec un potiron de 430 kg, il est encore une fois champion de France...."
   },
   9: { 
       title: "En Normandie, immersion dans le potager extraordinaire du champion de France des légumes géants",
       content: "Insolite. Depuis sept ans, Samuel Brault cultive des courges un peu spéciales dans son potager manchois. Et chaque année, il présente ses plus beaux spécimens au concours national des légumes géants de la Motte-Achard, en Vendée. Avec un potiron de 430 kg, il est encore une fois champion de France...."
   },
   10: { 
    title: "En Normandie, immersion dans le potager extraordinaire du champion de France des légumes géants",
    content: "Insolite. Depuis sept ans, Samuel Brault cultive des courges un peu spéciales dans son potager manchois. Et chaque année, il présente ses plus beaux spécimens au concours national des légumes géants de la Motte-Achard, en Vendée. Avec un potiron de 430 kg, il est encore une fois champion de France...."
}
 }

class Titres extends Component {
    render () {
        return (
            <div>
                <Header />
                    <div className="body">
                        <div className="btn_titre_detail">
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
                        </div>
                        <div className="detail_body_article">
                            <div className="detail_article">
                                <div className="detail_article_image">
                                    <img src={require("../../img/image.jpg")} alt="image" className="view"/>
                                </div>
                                <div className="detail_article_texte">
                                    <div className="detail_article_titre">
                                        <h2 className="detail_article_titre2">{titresDetail[this.props.match.params.id].title}</h2>
                                    </div>
                                    <div clasName="detail_article_content">
                                        <p className="detail_article_content2">{titresDetail[this.props.match.params.id].content}</p>
                                    </div>
                                </div>
                                <div className="btns">
                                    <div className="btns_base">
                                        <div className="btns-1">
                                            <img src={require("../../img/rond.png")} alt="rond" className="btns-img"/>
                                        </div>
                                    </div>
                                    <div className="btns_base">
                                        <div className="btns-2">
                                            <img src={require("../../img/rond.png")} alt="rond" className="btns-img"/>
                                        </div>
                                    </div>
                                    <div className="btns_base">
                                        <div className="btns-2">
                                            <img src={require("../../img/rond.png")} alt="rond" className="btns-img"/>
                                        </div>
                                    </div>
                                    <div className="btns_base">
                                        <div className="btns-3">
                                            <img src={require("../../img/rond.png")} alt="rond" className="btns-img"/>
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

export default Titres