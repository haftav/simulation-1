import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header.js';


export default class Home extends Component {


    render() {
        return (
            <div className="home">
                <Header page="home" id="" name=""/>

                <Link to="/bins/A">Shelf A</Link>
                <Link to="/bins/B">Shelf B</Link>
                <Link to="/bins/C">Shelf C</Link>
                <Link to="bins/D">Shelf D</Link>
            </div>
        )
    }
}