import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Movies } from "../Movies/Movies";
import { Home } from "../Home/Home";
import {Header} from "./Header/Header";
// import {Container} from "./App.styled";


export const App = () => {
  return <BrowserRouter basename="goit-react-hw-05-movies">
          <Header/>
        <Routes>
          <Route path="" element = {<Home/>}/>
          <Route path="/Movies" element = {<Movies/>}/>
          </Routes>
            
          
         </BrowserRouter>
       

};
