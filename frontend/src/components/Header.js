import React , { useState } from 'react'

import './Header.css';


function Header () {



    return ( 
        <div className="App-header">
            <div className='left'>
                <input type="text" />
            </div>

            <div className='right'>
                <input type="text" />
                <input type="text" />
                <button type="text">login</button>
            </div>
                   
        </div>
    );
}

export default Header;

