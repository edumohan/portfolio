import React from 'react';
import { Container } from './resume.css';

const Resume = () => (
    <Container>
        <div className="work-experience">
            <div className="left-column">
                <h3>What have I <br/>done so far</h3>
            </div>
            <div className="right-column">
                <div className="exp-row">
                    <div className="exp-head-row">
                        <h4>{`HackerEarth`}</h4><label>{`/ Senior product designer`}</label>
                    </div>
                    <p className="date-row">2019 May - Present</p>
                </div>
                <div className="exp-row">
                    <div className="exp-head-row">
                        <h4>{`[24]7.ai`}</h4><label>{`/ User experience designer`}</label>
                    </div>
                    <p className="date-row">2016 Jan - 2017 Dec</p>
                </div>
                <div className="exp-row">
                    <div className="exp-head-row">
                        <h4>{`Verizon India`}</h4><label>{`/ User experience designer`}</label>
                    </div>
                    <p className="date-row">2014 Oct - 2015 Dec</p>
                </div>
                <div className="exp-row">
                    <div className="exp-head-row">
                        <h4>{`Technical University of Darmstadt, Germany`}</h4><label>{`/ Design Intern`}</label>
                    </div>
                    <p className="date-row">2013 May - 2013 Jul</p>
                </div>
            </div>
        </div>
        <div className="work-experience">
            <div className="left-column">
                <h3>Whats not <br/>on my <br/>resume</h3>
            </div>
            <div className="right-column">
                <p>{`I’m a mechanical engineer with a master’s degree in motorsports engineering and one of India’s top 15 motorcycle racers in the expert category (Indian National Motorcycle Racing Championship 2020). I click good pictures and I play the drums as well`}</p>
                <div className="img-container">
                    <div className="img-col-1">
                        <figure>
                            <img
                            src="/images/Aboutme/IMG_6028.jpg"  alt=""/>
                        </figure>
                        <figure>
                            <img 
                            src="/images/Aboutme/PMP_8188.jpg"  alt=""/>
                        </figure>
                        <figure>
                            <img src="/images/Aboutme/IMG_20210401_004542_187.jpg" alt="" />
                        </figure>
                    </div>
                    <div className="img-col-2">
                        <figure>
                            <img 
                            src="/images/Aboutme/IMG_20210311_010044_724.jpg"  alt=""/>
                        </figure>
                        <figure>
                            <img 
                            src="/images/Aboutme/shotGixxerkid.jpg"  alt=""/>
                        </figure>
                    </div>
                    
                </div>
            </div>
        </div>
    </Container>
);


export default Resume;
