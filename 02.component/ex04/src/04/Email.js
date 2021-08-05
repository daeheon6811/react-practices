import React, { Fragment } from 'react';
import PropTypes from "prop-types"

export default function Email({firstName , lastName,email}){

     return(
        <li> 
        { `${firstName}${lastName}` }
                        <br/>
                      {email}</li>

         ) ;
         
}

Email.propTypes = {
    no : PropTypes.number,
    firstName : PropTypes.string.isRequired, 
    lastNmae : PropTypes.string.isRequired,
    lastNmae : PropTypes.string.isRequired,

}