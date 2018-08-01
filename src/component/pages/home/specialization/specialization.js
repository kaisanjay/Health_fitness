import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import bodyBuilding from '../../../../assets/images/p8.png';
import pilates from '../../../../assets/images/p4.png';
import zumba from '../../../../assets/images/p1.png';
import dietGuide from '../../../../assets/images/p3.png';
import yoga from '../../../../assets/images/p6.png';
import fitness from '../../../../assets/images/p2.png';
import meditation from '../../../../assets/images/p5.png';
import gym from '../../../../assets/images/p7.png';

const Section = styled('div')`
    margin-top: 50px;
`
const rows = css`
    margin-top: 50px;
`
const Span = styled('span')`
    font-weight: bold;
    font-size: 17px;
`
const textHeight = css`
    margin-top: 10px;
`

export default class Specialization extends Component{
    render(){
        return(
            <Section className="container-fluid bg-3 text-center">
                <h2>Specialization</h2>
                <div className={rows}>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="well">
                                <div>
                                    <img src={bodyBuilding} alt="body building" />
                                </div>
                                <div className={textHeight}>
                                    <Span>Body Building</Span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="well">
                                <div>
                                    <img src={pilates} alt="pilates" />
                                </div>
                                <div className={textHeight}>
                                    <Span>Pilates</Span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="well">
                                <div>
                                    <img src={zumba} alt="zumba" />
                                </div>
                                <div className={textHeight}>
                                    <Span>Zumba</Span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="well">
                                <div>
                                    <img src={dietGuide} alt="diet guide" />
                                </div>
                                <div className={textHeight}>
                                    <Span>Diet Guide</Span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <div className="well">
                                <div>
                                    <img src={yoga} alt="yoga" />
                                </div>
                                <div className={textHeight}>
                                    <Span>Yoga</Span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="well">
                                <div>
                                    <img src={fitness} alt="fitness" />
                                </div>
                                <div className={textHeight}>
                                    <Span>Fitness</Span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="well">
                                <div>
                                    <img src={meditation} alt="meditation" />
                                </div>
                                <div className={textHeight}>
                                    <Span>Meditation</Span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="well">
                                <div>
                                    <img src={gym} alt="gym" />
                                </div>
                                <div className={textHeight}>
                                    <Span>Gym</Span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}