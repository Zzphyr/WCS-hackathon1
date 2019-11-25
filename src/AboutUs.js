import React from 'react';
import './AboutUs.scss';

const About = () => {
    return (
        <div class="page">
            <div class="content">
                <div class="circle">
                    <div class="circle_title">
                        <h2>Manuela</h2>
                    </div>
                    <div class="circle_inner">
                        <div class="circle_inner__layer">
                            <a href="https://www.linkedin.com/in/manuela-cardoso-94b6b829/">
                                <img src="https://res.cloudinary.com/dzvkdhu9c/image/upload/v1574425786/Hackathon/IMG_1426_wxxy1e.jpg" alt="Manuela Cardoso profile"/>
                            </a>
                        </div>

                    </div>
                    <div class="content_shadow"></div>
                </div>
            </div>
            <div class="content">
                <div class="circle">
                    <div class="circle_title">
                        <h2>Angélina</h2>
                    </div>
                    <div class="circle_inner">
                        <div class="circle_inner__layer">
                            <a href="https://www.linkedin.com/in/angelinariet/">
                                <img src="https://res.cloudinary.com/dzvkdhu9c/image/upload/v1574425785/Hackathon/20190610-024032_Photos_dml5jz.jpg" alt="Angélina Riet profile"/>
                            </a>
                        </div>
                    </div>
                    <div class="content_shadow"></div>
                </div>
            </div>
            <div class="content">
                <div class="circle">
                    <div class="circle_title">
                        <h2>Janis</h2>
                    </div>
                        <div class="circle_inner">
                            <div class="circle_inner__layer">
                                <a href="https://www.linkedin.com/in/janis-ellerbrock-2a6982187/">
                                    <img src="https://res.cloudinary.com/dzvkdhu9c/image/upload/v1574424464/Hackathon/IMG_0650_xdga3p.png" alt="Janis Ellerbrock profile"/>
                                </a>
                            </div>
                        </div>
                    <div class="content_shadow"></div>
                </div>
            </div>
        </div>
    )  
}

export default About;