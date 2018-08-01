import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import blogImage from '../../../assets/images/blog.jpg';
import blog1 from '../../../assets/images/b1.jpg';
import blog2 from '../../../assets/images/b2.jpg';
import blog3 from '../../../assets/images/b3.jpg';
import blog4 from '../../../assets/images/b4.jpg';

const Section = styled('div')`
    margin-top: 50px;
`
const rows = css`
    margin-top: 50px;
`
const sideBlog = css`
    width: 300px;
    height: 100px;
    object-fit: cover;
`
const sideBlogText = css`
    margin-top: 10px;
    text-align: left;
`

export default class Blog extends Component{
    render(){
        return(
            <Section className="container-fluid bg-3 text-center">
                <h2>Blog</h2>
                <div className={rows}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="well">
                                    <div>
                                        <img src={blogImage} className="img-responsive" />
                                    </div>
                                    <div className={sideBlogText}>
                                        <span>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="col-sm-12">
                                    <div className="well" style={{'textAlign': 'left'}}>
                                        <div>
                                            <img src={blog1} className={sideBlog} />
                                        </div>
                                        <div className={sideBlogText}>
                                            <span>It is a long established fact that a reader will be distracted by the readable content</span>
                                        </div>
                                    </div> 
                                </div>

                                <div className="col-sm-12">
                                    <div className="well" style={{'textAlign': 'left'}}>
                                        <div>
                                            <img src={blog2} className={sideBlog} />
                                        </div>
                                        <div className={sideBlogText}>
                                            <span>It is a long established fact that a reader will be distracted by the readable content</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="well" style={{'textAlign': 'left'}}>
                                        <div>
                                            <img src={blog3} className={sideBlog} />
                                        </div>
                                        <div className={sideBlogText}>
                                            <span>It is a long established fact that a reader will be distracted by the readable content</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="well" style={{'textAlign': 'left'}}>
                                        <div>
                                            <img src={blog4} className={sideBlog} />
                                        </div>
                                        <div className={sideBlogText}>
                                            <span>It is a long established fact that a reader will be distracted by the readable content</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        );
    }
}