import React from 'react';
import './home.css'
import '../MediaQurey/media.css'

function Home() {
  return (
    <>

      <div className="container-fluid ">
        <div className="row">
          <div className="main-section">
            <div className="col-md-12 ">
              <div className="main_description d-grid">
                <div className="description p-5 ">
                  <p className='text-white ms-2'>Sale Up To 20% OFF</p>
                  <h1 className='text-white'>Grab your next <br /> favorite book</h1>
                  <p className='text-white'>Books are the quietest and most constant of friends; they are <br /> the most accessible and wisest of counselors, and the most <br /> patient of teachers</p>
                  <a href="#target-section" className="btn btn-primary go-to-button "> <i class="fa-solid fa-cart-shopping"></i> Go to Shop </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3">
              <div className="delivery">
                <div className="icon_bar">

                </div>
                <div className="info-section ">
                  <span>Free Delivery</span>
                  <span>For all member community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
