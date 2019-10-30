import React, { Component } from 'react'
import './Profil.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

class Profil extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="body">
                    <h2>Profil</h2>
                    <div className="bodyProfil">
                        <div className="bodyProfil2">
                            <div className="edit"><b>Nom</b>
                                <span className="data"> : DUPONT</span>
                                <div className="btn_edit">
                                    <button className="btn_form">modifier</button>
                                </div>
                            </div>
                            <div className="edit"><b>Prénom</b>
                                <span className="data"> : Albert</span>
                                <div className="btn_edit">
                                    <button className="btn_form">modifier</button>
                                </div>
                            </div>
                            <div className="edit"><b>Adresse</b>
                                <span className="data"> : 25 rue de la Rose 76200 DIEPPE</span>
                                <div className="btn_edit">
                                    <button className="btn_form">modifier</button>
                                </div>
                            </div>
                            <div className="edit"><b>Téléphone</b>
                                <span className="data"> : 06 11 11 11 11</span>
                                <div className="btn_edit">
                                    <button className="btn_form">modifier</button>
                                </div>
                            </div>
                            <div className="edit"><b>Adresse mail</b>
                                <span className="data"> : azerty@azerty.fr</span>
                                <div className="btn_edit">
                                    <button className="btn_form">modifier</button>
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

export default Profil