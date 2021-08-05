import React, { useState} from 'react';
import PropTypes from "prop-types"


export default function SearchBar({callback,keyword}) {
    console.log('rendring.. searchBar')


    console.log("keyword -> " + keyword);

    const handleChange = function (e) {

        callback(e.target.value);
    }

    return (
        <div className={ 'Searchbar' }>
            찾기: <input 
            type='text' 
            placeholder='search'
            value={keyword} 
            onChange={ handleChange } />
        </div>
    )

}


SearchBar.protoType = {
    callback : PropTypes.func.isRequired,
    keyword : PropTypes.string.isRequired
}