import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SAbonner from './components/SAbonner/SAbonner'
import Profil from './components/Profil/Profil'
import InfosMeteo from './components/InfosMeteo/InfosMeteo'
import InfosMeteoDetail from './components/InfosMeteo/InfosMeteoDetail'
import Titres from './components/Titres/Titres'
import TitresDetail from './components/Titres/TitresDetail'
import Favoris from './components/Favoris/Favoris'
import FavorisDetail from './components/Favoris/FavorisDetail'
import ALire from './components/ALire/ALire'
import ALireDetail from './components/ALire/ALireDetail'
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound'


const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/s_abonner' component={SAbonner}/>
            <Route path='/profil' component={Profil}/>
            <Route path='/infosMeteo' component={InfosMeteo}/>
            <Route path='/titres' component={Titres}/>
            <Route path='/favoris' component={Favoris}/>
            <Route path='/a_lire' component={ALire}/>
            <Route path='/infosMeteo/:id' component={InfosMeteoDetail}/>
            <Route path='/titres/:id' component={TitresDetail}/>
            <Route path='/favorisDetail' component={FavorisDetail}/>
            <Route path='/a_lire/:id' component={ALireDetail}/>
            <Route path="*" component={ErrorNotFound}/>
        </Switch>
    </Router>
)



ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();