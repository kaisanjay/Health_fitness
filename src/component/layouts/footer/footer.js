import React, { Component } from 'react';
import './footer.css';
import { menuTitle } from '../header/menu';
import { NavLink } from 'react-router-dom';
import { css } from 'emotion';

export default class Footer extends Component{
    render(){
        return(
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h3>About Us</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        </div>

                        <div className="col-sm-2"></div>

                        <div className="col-sm-4">
                            <h3>Quick Links</h3>

                            <ul className="nav">
                            { menuTitle.map((value, index) => <li key={index}><NavLink to={value.link} className="footer_navbar">{value.title}</NavLink></li>) }
                            </ul>
                        </div>

                        <div className="col-sm-3">
                            <h3>We Are Social</h3>
                            &nbsp;&nbsp;
                            <i className="fa fa-instagram fa-3x"></i>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-facebook-square fa-3x"></i>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="fa fa-twitter fa-3x"></i>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}