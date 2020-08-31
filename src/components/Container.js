import React, { Component } from 'react';
import Nav from './Nav';

import Dieuhuong from '../routers/Dieuhuong';
import {
    BrowserRouter as Router

} from "react-router-dom";

class Container extends Component {
    render() {
        return (
            <div id="page" className="page-layout">
                <Router>
                    <Nav></Nav>
                    <Dieuhuong></Dieuhuong>
                </Router>
            </div>
        );
    }
}

export default Container;