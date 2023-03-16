import React from 'react'

const Slide = () => {
  return (
    <section className="slide">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
          <ol className="carousel-indicators">
          <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
          <div className="carousel-item active">
              <a href="#" className="w-100">
              <img
                  className="d-block w-100"
                  src="./Uploads/slide/1.png"
                  alt="First slide"
              />
              </a>
          </div>
          <div className="carousel-item">
              <a href="#" className="w-100">
              <img
                  className="d-block w-100"
                  src="./Uploads/slide/2.png"
                  alt="Second slide"
              />
              </a>
          </div>
          <div className="carousel-item">
              <a href="#" className="w-100">
              <img
                  className="d-block w-100"
                  src="./Uploads/slide/3.png"
                  alt="Third slide"
              />
              </a>
          </div>
          </div>
          <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
          </a>
          <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
          </a>
      </div>
    </section>
  )
}

export default Slide
