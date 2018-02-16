import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home.js';
import Shelf from './components/Shelf.js';
import Add from './components/Add.js';
import Edit from './components/Edit.js';



export default (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/bins/:id" component={Shelf} />
            <Route path="/create/:id" component={Add} />
            <Route path="/bin/:id" component={Edit} />
        </Switch>
    </div>
)