import React, { Component, Fragment } from 'react';
import { Header, Footer } from './layouts';
import Routing from './routing';
import { HashRouter } from 'react-router-dom';
import '../assets/css/base.css';

export default class App extends Component{
    render(){
        return(
            <HashRouter>
                <Fragment>
                    <Header />
                    <Routing />
                    <Footer />
                </Fragment>
            </HashRouter>
        );
    }
}