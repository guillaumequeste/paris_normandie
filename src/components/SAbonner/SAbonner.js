import React, { Component } from 'react'
import './SAbonner.css'
import Header from '../elements/Header'
import Footer from '../elements/Footer'

class SAbonner extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="body">
                    <h2>S'abonner</h2>
                    <div className="bodySabonner">
                        <form className="bodySabonner2">
                            <div className="edit"><b>Nom</b>
                                <input className="input_form"/>
                            </div>
                            <div className="edit"><b>Prénom</b>
                                <input className="input_form"/>
                            </div>
                            <div className="edit"><b>Adresse</b>
                                <input className="input_form"/>
                            </div>
                            <div className="edit"><b>Téléphone</b>
                                <input className="input_form"/>
                            </div>
                            <div className="edit"><b>Adresse mail</b>
                                <input className="input_form"/>
                            </div>
                            <div className="btn_submit">
                                <button>Valider</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SAbonner