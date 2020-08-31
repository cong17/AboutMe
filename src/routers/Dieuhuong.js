import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import ContentIndex from '../components/ContentIndex';
import ContentResume from '../components/ContentResume';
import ContentGallery from '../components/ContentGallery';

class Dieuhuong extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={ContentIndex} ></Route>
                    <Route exact path="/resume" component={ContentResume} ></Route>
                    <Route exact path="/gallery" component={ContentGallery} ></Route>
                    <Route exact path="/index" component={ContentIndex}></Route>
                </Switch>
            </div>
        );
    }
}

export default Dieuhuong;