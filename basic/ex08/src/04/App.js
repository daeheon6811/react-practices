import React, { Fragment } from 'react';
import Header from './Header';
import Content from './Content';
export default function(){  
    return (
        // <Fragment>
        //     <Header name = "App03"/>
        //     <Content/>
        // </Fragment>
        React.createElement(Fragment, null , React.createElement(Header , null , null),React.createElement(Content , null , null) )

    )
}