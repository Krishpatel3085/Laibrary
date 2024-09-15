import React from 'react';
import './blog.css';
import './BlogMedia.css';
import NavBar from '../NavBar/Nav';
import Footer from '../footer/Footer';
import bg from '../images/one_book.jpg';
import customer from '../images/customer_review.jpg';
import young from '../images/young-woman.jpg';
import cropped from '../images/cropped.jpg';
import man from '../images/man-reading.jpg';
import books from '../images/books.jpg'

function Blog() {
  return (
    <>
      <NavBar />

      {/* first */}
      <section id='blog'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h4 className='text-white text-center' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"><span>Home <span className='mx-3'><i class="bi bi-book fs-5 "></i></span>  Blog</span></h4>
              <h2 className='text-center text-white'  data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"  data-aos-duration="2000">Our Blog</h2>
            </div>
          </div>
        </div>
      </section>


      {/* second */}
      <div className="container py-5">
        <div className="row gap-4">
          <div className="commited col-md-4 pb-3" data-aos="zoom-in-down"  data-aos-duration="2000">
            <img src={bg} alt="img" className='img-fluid w-100' id='book-img' />
            <h4>How to Get Started on Bookstagram in 2022</h4>
            <span className='pb-4'>May 10, 2024  No Comments</span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  nascetur</p>
            <span className='text-decoration-none text-dark'>Continue Reading »</span>
          </div>
        
        
          <div className="commited col-md-4 pb-3" data-aos="zoom-in-down"  data-aos-duration="2000">
            <img src={customer} alt="img" className='img-fluid w-100' id='book-img' />
            <h4>The 61 Greatest Indie Books of All Time</h4>
            <span>May 10, 2024  No Comments</span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  nascetur</p>
            <span className='text-decoration-none text-dark'>Continue Reading »</span>
          </div>


          <div className="commited col-md-4 pb-3" data-aos="zoom-in-down"  data-aos-duration="2000">
            <img src={young} alt="img" className='img-fluid w-100' id='book-img' />
            <h4>Books you won’t be able to put down on World Book Day</h4>
            <span>May 10, 2024  No Comments</span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  nascetur</p>
            <span className='text-decoration-none text-dark'>Continue Reading »</span>
          </div>
        
        </div>
        <div className="row mt-3 pt-2 gap-4">
          <div className="commited col-md-4 pb-3" data-aos="zoom-in-down"  data-aos-duration="2000">
            <img src={cropped} alt="img" className='img-fluid w-100' id='book-img' />
            <h4>How to Get Started on Bookstagram in 2022</h4>
            <span className='pb-4'>May 10, 2024  No Comments</span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  nascetur</p>
            <span className='text-decoration-none text-dark'>Continue Reading »</span>
          </div>
          <div className="commited col-md-4 pb-3" data-aos="zoom-in-down"  data-aos-duration="2000">
            <img src={man} alt="img" className='img-fluid w-100' id='book-img' />
            <h4>The 61 Greatest Indie Books of All Time</h4>
            <span>May 10, 2024  No Comments</span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  nascetur</p>
            <span className='text-decoration-none text-dark'>Continue Reading »</span>
          </div>
          <div className="commited col-md-4 pb-3" data-aos="zoom-in-down"  data-aos-duration="2000">
            <img src={books} alt="img" className='img-fluid w-100' id='book-img' />
            <h4>Books you won’t be able to put down on World Book Day</h4>
            <span>May 10, 2024  No Comments</span>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,  nascetur</p>
            <span className='text-decoration-none text-dark'>Continue Reading »</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Blog