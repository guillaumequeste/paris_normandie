import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Header.css'

class Header extends Component {
    render () {
        return (
            <div className="header">
                <Link to="/" className="logo">
                    <div className="titreLogo">
                        <div className="paris">PARIS</div>
                        <div className="normandie">NORMANDIE</div>
                    </div>
                </Link>
                <div className="sabonner">
                    <div className="btn_sabonner">
                        <Link to="/s_abonner" className="linkSabonner">S'abonner</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header