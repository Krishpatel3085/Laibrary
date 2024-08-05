import React from 'react'
import './event.css';
import NavBar from '../NavBar/Nav';
import Footer from '../footer/Footer'
// import young from '../images/young-student.jpg'

function Event() {
  return (
    <>
      <NavBar />

      <section id='event'>
        <div className="container-fluid">
          <div className="row text-center ">
            <div className="col-md-12">
              <div className="upComing">
                <h4 className='text-light'>Home  Event</h4>
                <h2 className='text-center text-light'>Upcoming Events</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* second  */}
      <div className="container">
        <div className="row py-5">
          <div className="Festival  col-md-12 text-center">
            <h6 className='text-danger'>Event</h6>
            <h2>Book promotions</h2>
            <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
        </div>


        <div className="row d-flex gap-3 py-2">
          <div className="reading col-md-6 d-flex gap-3 p-0 mb-3">
            <div className="books text-center">
              <button className="add_to_cart">View More</button>
            </div>
            <div className="dolor">
              <h2>Festival of Books</h2>
              <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit dolor</p>
              <li><i class="fa-solid fa-location-dot me-3"></i>JCC, Jakarta</li>
              <li><i class="fa-regular fa-clock me-2 "></i>  May 14, 2024</li>
            </div>
          </div>
          <div className="reading col-md-6 d-flex gap-3 p-0 mb-3">
            <div className="books text-center">
              <button className="add_to_cart">View More</button>
            </div>
            <div className="dolor">
              <h2>Guide presents a reading corner</h2>
              <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit dolor</p>
              <li><i class="fa-solid fa-location-dot me-3"></i>Istora GBK, Jakarta</li>
              <li><i class="fa-regular fa-clock me-2 "></i>May 21, 2022</li>
            </div>
          </div>

        </div>
        <div className="row d-flex gap-3 py-2">
          <div className="reading col-md-6 d-flex gap-3 p-0 mb-3">
            <div className="books text-center">
              <button className="add_to_cart">View More</button>
            </div>
            <div className="dolor">
              <h2>Read free books in Jakarta</h2>
              <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit dolor</p>
              <li><i class="fa-solid fa-location-dot me-3"></i>JCC, Jakarta</li>
              <li><i class="fa-regular fa-clock me-2 "></i> May 28, 2022</li>
            </div>
          </div>
          <div className="reading col-md-6 d-flex gap-3 p-0 mb-3">
            <div className="books text-center">
              <button className="add_to_cart">View More</button>
            </div>
            <div className="dolor">
              <h2>Promotion Book</h2>
              <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit dolor</p>
              <li><i class="fa-solid fa-location-dot me-3"></i>ICE BSD, Tangerang</li>
              <li><i class="fa-regular fa-clock me-2 "></i>  June 4, 2022</li>
            </div>
          </div>

        </div>
        <div className="row d-flex gap-3 py-2">
          <div className="reading col-md-6 d-flex gap-3 p-0 mb-3">
            <div className="books text-center">
              <button className="add_to_cart">View More</button>
            </div>
            <div className="dolor">
              <h2>New Friends with Books</h2>
              <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit dolor</p>
              <li><i class="fa-solid fa-location-dot me-3"></i>Istora GBK, Jakarta</li>
              <li><i class="fa-regular fa-clock me-2 "></i> June 11, 2022</li>
            </div>
          </div>
          <div className="reading col-md-6 d-flex gap-3 p-0 mb-3">
            <div className="books text-center">
              <button className="add_to_cart">View More</button>
            </div>
            <div className="dolor">
              <h2> Book Signing</h2>
              <p>Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit dolor</p>
              <li><i class="fa-solid fa-location-dot me-3"></i>ICE BSD, Tangerang</li>
              <li><i class="fa-regular fa-clock me-2 "></i> June 18, 2022</li>
            </div>
          </div>

        </div>
      </div>

      {/* third */}
      <div className="container py-3">
        <div className="row py-3">
          <div className="question col-md-4">
            <h6 className='text-uppercase'>Most popular questions</h6>
            <h2>Frequently asked <br /> questions</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar <br />dapibus leo.</p>
          </div>
          <div className="col-md-8">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Accordion Item #1
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}
export default Event