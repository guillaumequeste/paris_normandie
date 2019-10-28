import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Header.css'

class Header extends Component {
    render () {
        return (
            <div className="header">
                <Link to="/" className="logo">
                    <div className="title_logo">
                        <div className="paris">PARIS</div>
                        <div className="normandie">NORMANDIE</div>
                    </div>
                </Link>
                <Link to="/s_abonner" className="sabonner">
                    <div className="btn_sabonner">
                        <Link to="/s_abonner" className="link_sabonner">S'abonner</Link>
                    </div>
                </Link>
            </div>
        )
    }
}
export default Header