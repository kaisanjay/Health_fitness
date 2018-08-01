import React, { Component } from 'react';
import styled, { css } from 'react-emotion';

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

export default class Contact extends Component{
    render(){
        return(
            <Section className="container-fluid bg-3 text-center">
                <h2>Contact Us</h2>
                <div className={rows}>
                    <div className="row">
                        <div className="col-sm-6" style={{'textAlign': 'left'}}>
                            <div className="col-sm-12">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <h4 className={title}>Email</h4>
                                    <span>email@example.com</span>
                                </div>
                            </div>

                            <div className="col-sm-12" style={{'marginTop': '15px'}}>
                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <h4 className={title}>Mob No.</h4>
                                    <span>+91-9876543210</span>
                                </div>
                            </div>

                            <div className="col-sm-12" style={{'marginTop': '15px'}}>
                                <div className="col-sm-2"></div>
                                <div className="col-sm-8">
                                    <h4 className={title}>Address</h4>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-5">
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>

                                    <div className="col-sm-5">
                                        <input type="text" className="form-control" placeholder="Mobile" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-10">
                                        <textarea className="form-control" rows="5" placeholder="Message"></textarea>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-1">
                                        <button type="submit" className="btn btn-default">Submit</button>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}