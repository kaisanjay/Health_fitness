import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { menuTitle } from './menu';
import { NavLink } from 'react-router-dom';
import icon from '../../../assets/images/icon.png';

const Nav = styled('nav')`
    border-radius: 0px !important;
    margin-bottom: 0px !important;
`
const siteLogo = css`
    height: 80px;
    margin-top: -29px;
`

export default class Header extends Component{
    render(){
        return(
            <Nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">
                            <img src={icon} className={siteLogo} alt="website logo" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            { menuTitle.map((value, index) => <li key={index}><NavLink to={value.link}>{value.title}</NavLink></li>) }
                        </ul>
                    </div>
                </div>
            </Nav>
        );
    }
}