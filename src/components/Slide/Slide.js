import './_slide.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Black from './images/black.png'
import White from './images/white.png'
import Twoimg from './images/img_two.png'
import ImgTwo from './images/img_two_t.png'
import TreeOne from './images/Tree_one.png'
import TreeTwo from './images/Tree_two.png'

function Slide() {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <>
      <div className="slide">
      <Slider {...settings}>
        <div className='slide__content'>
        <div className='one__slide'>
            <div className='text__folder'>
              <h1>3=2</h1>
              <p>Закажи три футболки а заплати только за две</p>
              <button>Перейти в каталог</button>
            </div>
            <div className='folder__img'>
              <img src={Black} alt='Images Black' className='black__one'/>
              <img src={White} alt='Images White' className='white__one'/>
              <img src={Black} alt='Images Black' className='black__two'/>
            </div>
          </div>
        </div>
          <div>
          <div className='two__slide'>
            <div className='two_text'>
              <p>Разработка и пошив командной формы с индивидуальным дизайном</p>
            </div>
            <div className='two__img__folder'>
              <img src={Twoimg} alt='sport short' className='one__slide__img'/>
              <img src={ImgTwo} alt='sport short' className='two__slide__img'/>
              <img src={Twoimg} alt='sport short' className='tre__slide__img'/>
            </div>
          </div>
          </div>
          <div>
            <div className='tree_slide_content'>
              <div className='tree__text'>
                <h1>Разработка и производство одежды</h1>
                <p>Предоставляем ĸомплеĸсное решение по созданию и производству одежды и фирменного мерча.</p>
                <button>Оставить заявку</button>
              </div>
              <div className='foto__img_tree'>
              <img src={TreeTwo} alt='foto slide' className='foto__tree__end'/>
              <img src={TreeOne} alt='foto slide' className='foto__tree'/>
              </div>
            </div>
          </div>
        </Slider>
       
      </div>
    </>
  );
}

export default Slide;
