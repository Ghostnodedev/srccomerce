/* eslint-disable @next/next/no-img-element */
'use client';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BannerSlider.css';

export default function BannerSlider() {
  return (
    <Carousel fade interval={3000} className="banner-carousel">
      <Carousel.Item>
        <img
          src="/pexels-kampus-7289723.jpg"
          alt="First slide"
          className="banner-img"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="/pexels-max-fischer-5872176.jpg"
          alt="Second slide"
          className="banner-img"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="/pexels-tara-winstead-8850753.jpg"
          alt="Third slide"
          className="banner-img"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
