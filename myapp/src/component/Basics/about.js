import React from 'react'
import NavBarr from './NavBarr'
import Footer from './Footer'
import './about.css'
import Home from './home.js'

import img1 from '../../imgs/certificate.jpg'
import img2 from '../../imgs/me.jpg'
import img3 from '../../imgs/b.png'

import { BiSolidUserPin } from 'react-icons/bi'
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { FaCircleArrowUp } from "react-icons/fa6";

const About = () => {
    const User = localStorage.getItem('User');
    if (User != 'None') {
        return (
            <div className='About'>

                <NavBarr />

                <header>
                    <div>
                        <div class='Aboutlogo' >
                            <BiSolidUserPin style={{ paddingTop: '19px', fontSize: '130px', color: 'rgb(222, 49, 10)' }} />
                            <h1>class</h1><h1 className='book'>book</h1>
                        </div>
                        <div class='scroldwn'>
                            <p style={{ color: 'wheat', paddingTop: '250px' }}>Scroll down</p><br />
                            <RiArrowDownDoubleLine style={{ paddingTop: '-10px', fontSize: '90px', color: 'wheat' }} />
                        </div>
                    </div>
                </header>

                <main>
                    <ul id="cards">
                        <li class="Aboutcard" id="card_1">
                            <div class="card__content">
                                <div>
                                    <h2>Hello </h2>

                                    <p>Allow me to introduce myself. I am <i>Madhurya Hait </i>, a student of age 20 of Jamshedpur, Jharkhand .
                                        With a relentless drive for excellence and an insatiable curiosity for emerging technologies, I have dedicated a lot of time understanding the social media trends & expertise that laid the foundation for the ambitious project I am about to unveil !</p>
                                </div>
                                <figure>
                                    <img src={img2} alt="Canvas Logo" />

                                </figure>
                            </div>
                        </li>
                        <li class="Aboutcard" id="card_2">
                            <div class="card__content">
                                <div>
                                    <h2>Introducing</h2>
                                    <p>the next social media <i>classbook</i>,
                                        a groundbreaking website that embodies my passion for designing & has the power to change the entire society. As an entrepreneur and visionary, I embarked on this journey with a clear vision to not just build a website, but to create a digital experience that transcends boundaries and leaves a lasting impact.
                                    </p>

                                </div>
                                <figure>
                                    <img src={img3} alt="Canvas Logo" />
                                </figure>
                            </div>
                        </li>
                        <li class="Aboutcard" id="card_3">
                            <div class="card__content">
                                <div>
                                    <h2>Qualifications</h2>
                                    <p>I'm doing my B-Tech from <i>Sikkim Manipal Institute of Technology</i> & currently studying in 5th semester in the deparetment of<i>Artificial intelligence & Data science.</i>
                                        My fascination with the intersection of data, intelligence & technology was ignited by the profound impact these fields have on shaping the future. I aim on harnessing more skills in the upcoming years. </p>

                                </div>
                                <figure>
                                    <img src='https://images.shiksha.com/mediadata/images/1678365578phptdoQ9K.jpeg' alt="Image description" />
                                </figure>
                            </div>
                        </li>
                        <li class="Aboutcard" id="card_4">
                            <div class="card__content">
                                <div>
                                    <h2>Course</h2>
                                    <p>I took the <i>'The Complete 2023 Web Development Bootcamp'</i> course by <i>Dr. Angela Yu</i> which helped me a lot. Enrolling this was a deliberate decision driven by a desire to acquire hands-on skills, taught by industry experts, the course promised a deep dive into the intricacies of front-end and back-end development, responsive design, and the utilization of popular frameworks.
                                    </p>
                                </div>
                                <figure>
                                    <img src={img1} alt="Image description" />
                                </figure>
                            </div>
                        </li>
                    </ul>
                </main>
                <aside>
                    <h3><i style={{ color: 'wheat' }}>Description</i></h3>
                    <p>
                        People cannot be trusted these days whether it be buying goods from the shopkeeper, choosing a cab driver or getting into a relationship. And present itself nicely to serve present and not nicely to others.
                        If you feel some person is not good enough or is not trustworthy, you can just rate him on this app and can help others to know about him. Currently, this app is only made for the students of Artificial intelligence and data, science of college, Sikkim, Manipal Institute of Technology as a prototype.
                        It would be scaled further in future & can used by the world.
                    </p>
                    <p>This app can prove to be immensely useful and powerful for the future generation as anyone can judge a person on basis of how the person is in real life.
                        Anyone can get to know how the person is in real life and can get to know the person better. Even going to an interview the interviewer can easily get to know the person and can easily decide whether to hire the person or not.
                        He just needs a look at the person's profile and he can easily check his past ratings. This app can be used by anyone and everyone.
                    </p>
                    <p>
                        Classbook is not just another addition to the vast expanse of the internet; it is a vision brought to life. It stands as a testament to my commitment to make a better & reliable society .
                        This app is the future and can use in every sector of industry and daily life. It's the perspective of many people that make a person good or bad. This app can help to know the person better and can help to make a better decision.
                        If a person has Grudges against someone, he can just go through his profile and rate the person. Person can be judged on the basis of his past and can be rated accordingly.
                    </p>
                    <p>
                        So even if some person does not do well in the first impression, he can be judge and on the basis of this app.
                        Let's take an example of a person who is doing well for this community. One can know whether to trust him or not on the basis of this.
                    </p>
                    <p><p><a href="#top" style={{ color: 'wheat' }}><FaCircleArrowUp style={{ fontSize: '70px' }} /></a></p></p> <br />
                </aside>
                <Footer />
            </div>


        )
    }
    else {
        return (
            <>
                <Home />
            </>
        )
    }
}

export default About
