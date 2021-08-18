import React from 'react';
import SiteLayout from '../../layout/SiteLayout';
import styles from '../../assets/scss/component/Main.scss';
import {Route} from "react-routger-dom";
import Me from "./Me";
import Location from "./Location";

import Navigation from "../../assets/scss/component/about/Navigation.scss";

export default function About(){
    return (
        <SiteLayout>
            <Route component ={Navigation}/>
            <Route exact path ={'/about'} component ={Me}/>
            <Route path ={'/about/me'} component ={Me}/>
            <Route path ={'/about/location/'} component ={Location}/>
        </SiteLayout>
    );
}
