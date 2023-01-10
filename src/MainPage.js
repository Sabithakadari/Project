import React from 'react';
import './App.scss';
import  IndicatorCarousel  from './carouselDis';

class MainPage extends React.Component {
    render(){
        return (
            <div>
              <header className="App-header">
                <h3>MYTHERESA</h3>
                <button>Wishlist Items</button>
              </header>
              <div className="App">
                <IndicatorCarousel/>
              </div>
            </div>
          );
    }
}

export default MainPage;