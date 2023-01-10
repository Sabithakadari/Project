import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import DetailPage from './detailPage';
import WishListPage from './wishListPage';

class App extends React.Component {
  
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/detailsPage' element={<DetailPage/>}/>
          <Route path='/detailsPage/wishlistPage' element={<WishListPage/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
