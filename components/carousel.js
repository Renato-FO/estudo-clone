
import React from 'react'
import Head from 'next/head'


const Carousel = (props) => {
  const { images } = props
  return (
    <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
      <ol className="carousel-indicators">
        {
          images.map((images, index) => (
            <li
            key={images.id}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={index === 0 ? 'active' : ''}>
            </li>
          )
          )
        }
      </ol>
      <div className="carousel-inner" role="listbox">
        {
          images.map((images, index) => (
            <div key={images.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
               
              className={images.url} 
              src={images.url}
              alt={images.name} />
            </div>
          )
          )
        }
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <style jsx>{`
        .carousel-item {
          max-height: 400px;
        }
      `}
      </style>
    </div>
  )
}
export default Carousel;
