import React, { Component } from 'react'
import './TitresDetail.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

const titres = {
    1: { 
         title: "title1",
         content: "Ceci est le contenu de l'article 1"
     },
     2: { 
         title: "title2",
         content: "Ceci est le contenu de l'article 2"
     },
     3: { 
         title: "title3",
         content: "Ceci est le contenu de l'article 3"
     },
     4: { 
        title: "title4",
        content: "Ceci est le contenu de l'article 4"
    },
    5: { 
        title: "title5",
        content: "Ceci est le contenu de l'article 5"
    },
    6: { 
        title: "title6",
        content: "Ceci est le contenu de l'article 6"
    },
    7: { 
        title: "title7",
        content: "Ceci est le contenu de l'article 7"
    },
    8: { 
        title: "title8",
        content: "Ceci est le contenu de l'article 8"
    },
    9: { 
        title: "title9",
        content: "Ceci est le contenu de l'article 9"
    },
    10: { 
        title: "title10",
        content: "Ceci est le contenu de l'article 10"
    }
 }

class TitresDetail extends Component {
    render () {
        return (
            <div>
                <Header />
                    <div className="body">
                        <h2>Titres détail</h2>
                        <h2>{titres[this.props.match.params.id].title}</h2>
                        <p>{titres[this.props.match.params.id].content}</p>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default TitresDetail