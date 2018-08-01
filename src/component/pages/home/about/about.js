import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import aboutImage from '../../../../assets/images/about.png';

const Section = styled('div')`
    margin-top: 50px;
`
const rows = css`
    margin-top: 50px;
`
const title = css`
    text-align: left !important;
    font-size: 20px !important;
    font-weight: bold !important;
`

export default class About extends Component{
    render(){
        return(
            <Section className="container-fluid bg-3 text-center">
                <h2>About Us</h2>
                <div className={rows}>
                    <div className="row">
                        <div className="col-sm-6" style={{'textAlign': 'left'}}>
                            <div className="col-sm-12">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <h4 className={title}>Health and Fitness</h4>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                            </div>

                            <div className="col-sm-12" style={{'marginTop': '15px'}}>
                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <h4 className={title}>Health and Fitness</h4>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                            </div>

                            <div className="col-sm-12" style={{'marginTop': '15px'}}>
                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <h4 className={title}>Health and Fitness</h4>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="col-sm-2"></div>
                            <img src={aboutImage} className="col-sm-8 img-responsive" alt="About Us" />
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}