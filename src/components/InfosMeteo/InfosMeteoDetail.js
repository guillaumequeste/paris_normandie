import React, { Component } from 'react'
import './InfosMeteoDetail.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

const infosMeteo = {
    1: { 
         title: "info1",
         content: "Ceci est le contenu de l'info 1"
     },
     2: { 
         title: "info2",
         content: "Ceci est le contenu de l'info 2"
     },
     3: { 
         title: "info3",
         content: "Ceci est le contenu de l'info 3"
     },
     4: { 
        title: "info4",
        content: "Ceci est le contenu de l'info 4"
    },
    5: { 
        title: "info5",
        content: "Ceci est le contenu de l'info 5"
    },
    6: { 
        title: "info6",
        content: "Ceci est le contenu de l'info 6"
    },
    7: { 
        title: "info7",
        content: "Ceci est le contenu de l'info 7"
    },
    8: { 
        title: "info8",
        content: "Ceci est le contenu de l'info 8"
    },
    9: { 
        title: "info9",
        content: "Ceci est le contenu de l'info 9"
    },
    10: { 
        title: "info10",
        content: "Ceci est le contenu de l'info 10"
    }
 }

class InfosMeteoDetail extends Component {
    render () {
        return (
            <div>
                <Header />
                    <div className="body">
                        <h2>Infos détail</h2>
                        <h2>{infosMeteo[this.props.match.params.id].title}</h2>
                        <p>{infosMeteo[this.props.match.params.id].content}</p>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default InfosMeteoDetail