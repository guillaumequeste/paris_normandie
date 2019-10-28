import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <Link to="/profil" className="choice">
                    <div className="btn_choice">
                        <div>
                            <img src={require("../../img/profile.jpg")} alt="profile" className="size_btn_choice"/>
                        </div>
                        <div>
                            <span className="title_btn_choice">profile</span>
                        </div>
                    </div>
                </Link>
                <Link to="/favoris" className="choice">
                    <div className="btn_choice">
                        <div>
                            <img src={require("../../img/star.png")} alt="star" className="size_btn_choice"/>
                        </div>
                        <div>
                            <span className="title_btn_choice">favoris</span>
                        </div>
                    </div>
                </Link>
                <Link to="/articles_a_lire" className="choice">
                    <div className="btn_choice">
                        <div>
                            <img src={require("../../img/read.png")} alt="star" className="size_btn_choice"/>
                        </div>
                        <div>
                            <span className="title_btn_choice">A Lire</span>
                        </div>
                    </div>
                </Link>
                <Link to="/" className="choice">
                    <div className="btn_choice">
                        <div>
                            <img src={require("../../img/playlists.png")} alt="star" className="size_btn_choice"/>
                        </div>
                        <div>
                            <span className="title_btn_choice">PlayLists</span>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Footer