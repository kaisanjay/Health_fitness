import React, { Component } from 'react';
import slider1 from '../../../../assets/images/slider1.jpg';
import slider2 from '../../../../assets/images/slider2.jpg';

export default class Carousel extends Component{
    render(){
        return(
            <div>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={slider1} alt="Slider1" className="sliderWidth" />
                            <div className="carousel-caption">
                                <h3>First Slider Title</h3>
                                <p>Slider Description</p>
                            </div>
                        </div>

                        <div className="item">
                            <img src={slider2} alt="Slider2" className="sliderWidth" />
                            <div className="carousel-caption">
                                <h3>Second Slider Title</h3>
                                <p>Slider Description</p>
                            </div>
                        </div>
                    </div>

                    {/* Left and right controls */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}