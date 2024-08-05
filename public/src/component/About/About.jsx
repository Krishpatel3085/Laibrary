import React from 'react';
import '../About/about.css';
import NavBar from '../NavBar/Nav';
import Footer from '../footer/Footer';

import book2 from '../images/books-2.jpg';
import book3 from '../images/img_7.jpg';
import book4 from '../images/img_8.jpg';
import book5 from '../images/img_9.jpg';

function About() {
    return (
        <>
        <NavBar/>
            <section id='AboutUs'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='text-center text-light'>About Us</h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* second */}
            <div className="container pt-4">
                <div className="row text-center py-2">
                    <h2>Welcome to Bookarazi</h2>
                    <p>For bookworms, by passionate writers  </p>
                </div>
            </div>

            <div className="container py-3" id='writers'  >
                <div className="welcome p-3 mb-3" >
                    <div className="row px-4 pt-4">
                        <div className="col-md-6">
                            <p>Euismod magna dui sagittis curabitur convallis pulvinar. Mollis neque lacinia himenaeos eleifend sit justo convallis augue. Tellus rhoncus euismod vestibulum vehicula parturient sagittis laoreet conubia hac. Tortor faucibus sem facilisi efficitur amet fusce. Consequat facilisis taciti lorem conubia venenatis cursus odio egestas. Neque mattis dis est non augue. Feugiat sed velit ornare ad blandit semper erat congue integer consequat. </p>

                            <h4>  Porttitor consectetur ad sed vitae accumsan in maximus commodo semper iaculis. Vel sociosqu mattis quis eros neque fermentum justo bibendum amet.</h4>

                            <p>Dictum quam natoque ridiculus ligula pretium. Magna vel felis dolor nisi tristique viverra platea placerat imperdiet montes. Blandit penatibus imperdiet leo primis ipsum. Suscipit rutrum finibus vulputate ut mauris odio suspendisse libero. Urna cubilia metus sollicitudin dapibus condimentum molestie est vehicula netus sed efficitur.</p>
                        </div>
                        <div className="col-md-6">
                            <p>Laoreet gravida congue aliquam etiam facilisi porta mollis. Platea feugiat a scelerisque imperdiet parturient enim venenatis vitae ut sed luctus. Nisl primis vulputate si interdum conubia sit cursus mollis enim. Lacus ridiculus nisi risus quam enim venenatis consectetuer libero lectus.</p>
                            <a href="#">  Discover More</a>
                            <img src={book2} className='w-100 h-50 img-fluid' />
                        </div>
                    </div>

                </div>
            </div>

            {/* third */}
            <section className='py-5' style={{ background: "#f8f8f8" }}>
                <div className="container">
                    <div className="row">
                        <div className="danger-blog col-md-4">
                            <h6 className='text-uppercase'>The Team</h6>
                            <h2>Our <br />Creative <br />Team</h2>
                            <p>Volutpat placerat sollicitudin per tristique magnis iaculis arcu torquent turpis.</p>

                            <button className='btn btn-danger'>View All Member</button>
                        </div>
                        <div className="john-blog col-md-8 d-flex gap-4">
                            <div className="john">
                                <img src={book3} className='w-100 img-fluid ' id='img-blog' />
                                <div className="overlay">
                                    <p>John D. Black</p>
                                    <h6 className='text-secondary'>Director</h6>
                                    <div className="icon">
                                        <i className='fab fa-twitter'></i>
                                        <i className="fab fa-facebook"></i>
                                        <i className='fab fa-instagram'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="john">
                                <img src={book5} className='w-100 img-fluid' id='img-blog' />
                                <div className="overlay">
                                    <p>Amanda Baughn</p>
                                    <h6 className='text-secondary'>Author</h6>
                                    <div className="icon">
                                        <i className='fab fa-twitter'></i>
                                        <i className="fab fa-facebook"></i>
                                        <i className='fab fa-instagram'></i>
                                    </div>
                                </div>
                            </div>
                            <div className="john">
                                <img src={book4} className='w-100 img-fluid' id='img-blog' />
                                <div className="overlay">
                                    <p>Joehar</p>
                                    <h6 className='text-secondary'>Author</h6>
                                    <div className="icon">
                                        <i className='fab fa-twitter'></i>
                                        <i className="fab fa-facebook"></i>
                                        <i className='fab fa-instagram'></i>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default About