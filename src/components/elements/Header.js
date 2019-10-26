import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Header.css'

class Header extends Component {
    render () {
        return (
            <div>
                <span>Paris Normandie</span>
                <Link to="/s_abonner">S'abonner</Link>
            </div>
        )
    }
}
export default Header