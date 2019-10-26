import React, { Component } from 'react'
import './FavorisDetail.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

const favoris = {
    1: { 
         title: "favori1",
         content: "Ceci est le contenu du favori 1"
     },
     2: { 
         title: "favori2",
         content: "Ceci est le contenu du favori 2"
     },
     3: { 
         title: "favori3",
         content: "Ceci est le contenu du favori 3"
     }
 }

class FavorisDetail extends Component {
    render () {
        return (
            <div>
                <Header />
                    <div className="body">
                        <h2>Favoris détail</h2>
                        <h2>{favoris[this.props.match.params.id].title}</h2>
                        <p>{favoris[this.props.match.params.id].content}</p>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default FavorisDetail