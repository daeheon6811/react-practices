import React, { Fragment } from 'react';
import Email from './Email';
import PropTypes  from "prop-types"

export default function Emaillist({emails , keyword}){


     return(
        <ul className={'Emaillist'}>
            {
               emails
               .filter(item => item.firstName.indexOf(keyword) != -1 ||  item.lastName.indexOf(keyword) != -1 
               || item.email.indexOf(keyword) != -1 ) 
               .map(item =>
                          
                
                        <Email key = {item.no} firstName = {item.firstName} lastName = {item.lastName} email = {item.email} />
                )
                
    
            }
    </ul>
         );

         console.log(a);
         
}
Emaillist.propTypes = {
    emails : PropTypes.arrayOf(PropTypes.shape(Email.PropType)), 


}