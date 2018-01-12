var React = require('react');
var Slider = require('react-slick').default;
var slider1 = require('../img/FMF2018_New_Slider_Dec.jpg')
// var foyle2018 = require( '../img/FMF-logo2018.png')
// var homecoming2018 = require( '../img/Homecoming-v2.png')

class Carousel extends React.Component {
    render () {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false, //TODO issues with previous arrow on carousel
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoPlay: true,
      swipeToSlide: true,
      lazyLoad: true,
      autoplaySpeed: 500
    };
    return (
      <Slider className='sliderTest' {...settings}>
        <div><img src={slider1} className='img-responsive' height="500"  alt='test'/></div>
        <div><img src={slider1} className='img-responsive' height="500"  alt='test'/></div>
        <div><img src={slider1} className='img-responsive' height="500"  alt='test'/></div>
        <div><img src={slider1} className='img-responsive' height="500"  alt='test'/></div>
        
      </Slider>
    );
  }
}
export default Carousel