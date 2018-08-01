import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import gallery1 from '../../../../assets/images/g1.jpg';
import gallery2 from '../../../../assets/images/g2.jpg';
import gallery3 from '../../../../assets/images/g3.jpg';
import gallery4 from '../../../../assets/images/g4.jpg';
import gallery5 from '../../../../assets/images/g5.jpg';
import gallery6 from '../../../../assets/images/g6.jpg';

const Section = styled('div')`
    margin-top: 50px;
`
const rows = css`
    margin-top: 50px;
`
const galleryImage = css`
    height: 220px;
    width: 350px;
    object-fit: cover;
`

export default class Gallery extends Component{
    render(){
        return(
            <Section className="container-fluid bg-3 text-center">
                <h2>Gallery</h2>
                <div className={rows}>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={gallery1} className={galleryImage} alt="gallery" />
                        </div>

                        <div className="col-sm-4">
                            <img src={gallery2} className={galleryImage} alt="gallery" />
                        </div>

                        <div className="col-sm-4">
                            <img src={gallery3} className={galleryImage} alt="gallery" />
                        </div>
                    </div>
                </div>

                <div className={rows}>    
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={gallery4} className={galleryImage} alt="gallery" />
                        </div>

                        <div className="col-sm-4">
                            <img src={gallery5} className={galleryImage} alt="gallery" />
                        </div>

                        <div className="col-sm-4">
                            <img src={gallery6} className={galleryImage} alt="gallery" />
                        </div>

                    </div>
                </div>
            </Section>
        );
    }
}