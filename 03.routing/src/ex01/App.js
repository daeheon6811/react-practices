import React, { Fragment } from 'react';
import {HashRouter} from "react-router-dom";
import {Guestbook} from "../../../07.integration/app03.Guestbook/backend/models";

export default function () {
    return (
        <HashRouter>
            <Route path='/' component={Main} />
            <Route path='/guestbook' component={Guestbook} />
            <Route path='/guestbook' component={Gallery} />


        </HashRouter>
    );
}

