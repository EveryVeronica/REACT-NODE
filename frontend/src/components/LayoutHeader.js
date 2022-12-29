import React , { useState } from 'react'

import './LayoutHeader.css';


function LayoutHeader () {



    return ( 
        <div className="LayoutHeader-header">
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

export default LayoutHeader;

