import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Blog, Contact } from './pages';

export default class Routing extends Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}