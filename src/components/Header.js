import React from 'react';
import mainLogo from '../assets/shelflogo.png'

export default function Header(props) {
    return (
        <div>
            <h1>Header</h1>
            <img src={mainLogo} alt="logo" />
        </div>
    )
}