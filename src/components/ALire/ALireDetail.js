import React, { Component } from 'react'
import './ALireDetail.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

const aLire = {
    1: { 
         title: "aLire1",
         content: "Ceci est le contenu de l'article épinglé 1"
     },
     2: { 
         title: "aLire2",
         content: "Ceci est le contenu de l'article épinglé 2"
     },
     3: { 
         title: "aLire3",
         content: "Ceci est le contenu de l'article épinglé 3"
     },
     4: { 
        title: "aLire4",
        content: "Ceci est le contenu de l'article épinglé 4"
    },
    5: { 
        title: "aLire5",
        content: "Ceci est le contenu de l'article épinglé 5"
    }
 }

class ALireDetail extends Component {
    render () {
        return (
            <div>
                <Header />
                    <div className="body">
                        <h2>A lire détail</h2>
                        <h2>{aLire[this.props.match.params.id].title}</h2>
                        <p>{aLire[this.props.match.params.id].content}</p>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default ALireDetail