import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Footer.css'

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <Link to="/profil" className="choice">
                    <div className="btn_choice">
                        <div>
                            <img src={require("../../img/star.png")} alt="star" className="size_btn_choice"/>
                        </div>
                        <div>
                            <span className="title_btn_choice">Profile</span>
                        </div>
                    </div>
                </Link>
                <Link to="/favoris" className="choice">
                    <div className="btn_choice">
                        <div>
                            <img src={require("../../img/star.png")} alt="star" className="size_btn_choice"/>
                        </div>
                        <div>
                            <span className="title_btn_choice">Favoris</span>
                        </div>
                    </div>
                </Link>
                <Link to="/a_lire" className="choice">
                    <div className="btn_choice">
                        <div>
                            <img src={require("../../img/star.png")} alt="star" className="size_btn_choice"/>
                        </div>
                        <div>
                            <span className="title_btn_choice">ALire</span>
                        </div>
                    </div>
                </Link>
                <Link to="/" className="choice">
                    <div className="btn_choice">
                        <div>
                            <img src={require("../../img/star.png")} alt="star" className="size_btn_choice"/>
                        </div>
                        <div>
                            <span className="title_btn_choice">Playlists</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Footer