import './App.css';
import Home from './Navigation/Home';
import Naavbar from './Navigation/Naavbar';
import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

class App extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  back() {
    this.slideRef.current.goBack();
  }

  next() {
    this.slideRef.current.goNext();
  }

  render() {
    const properties = {
      duration: 5000,
      autoplay: true,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      size:5,
      indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages = [
      "https://www.arrosage-distribution.fr/media/wp/slide1.jpg",
      "https://www.arrosage-distribution.fr/media/wp/slide2.jpg",
    ];
    const slideImages1 = [
      "https://www.rainbird.com/sites/default/files/styles/large/public/media/images/2017-11/RD1800.jpg?itok=xI3zT5a9",
     " https://www.rainbird.com/sites/default/files/styles/large/public/media/images/2018-05/5000-5000plus-hero.jpg?itok=IEQVTR_k",
     "https://www.rainbird.com/sites/default/files/inline-images/rb-smartvalvescatpage-hv-hvf.png",
     "https://www.rainbird.com/sites/default/files/styles/max_550x550/public/media/images/2018-10/esp-rzxe-1_whitev2.jpg?itok=2onpSzy3",

    ];
    return (
      <div className="App">
       <Naavbar/>
        
        <div className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>

        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Go Back
          </button>
          <button onClick={this.next} type="button">
            Go Next
          </button>
        </div>
      
      <Home/>
      <div style={{width:'500px'}} className="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages1.map((each, index) => (
              <div key={index} className="each-slide">
                <img className="lazy" src={each} alt="sample" />
              </div>
            ))}
          </Slide>
        </div>

        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Go Back
          </button>
          <button onClick={this.next} type="button">
            Go Next
          </button>
        </div>
      </div>
    );
  }
}




export default App;
