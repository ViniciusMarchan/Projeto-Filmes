import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './PAGES/Home';
import Filme from './PAGES/Filme';
import Header from './Components/Header';
import Error from './PAGES/Error';
import Favoritos from './PAGES/Favoritos';

function RoutesApp(){
    return(
      <BrowserRouter>
      <Header/>
         <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/filme/:id' element={ <Filme/> } />
            <Route path='/favoritos' element={ <Favoritos/> } />

            <Route path='*'  element={ <Error/> }/>
         </Routes>
      </BrowserRouter>
    )
};

export default RoutesApp;