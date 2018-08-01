import React, { Component, Fragment } from 'react';
import Carousel from './carousel/carousel';
import About from './about/about';
import Specialization from './specialization/specialization';
import Gallery from './gallery/gallery';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Carousel/>
                <About/>
                <Specialization/>
                <Gallery/>
            </Fragment>
        )
    }
}
