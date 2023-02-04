import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import {Header} from "./Header/Header";
import { Loader } from "./Loader/Loader";

const Home = lazy(() => import('../Home/Home'));
const Movies = lazy(() => import("../Movies/Movies"));
const MovieDetails = lazy(() => import("../components/MovieDetails/MovieDetails"));
const Reviews = lazy(() => import("./MovieDetails/Reviews/Reviews"));
const Cast = lazy(() => import("./MovieDetails/Cast/Cast"));

export const App = () => {
  return <BrowserRouter basename="goit-react-hw-05-movies">
          <Header/>
          <Suspense fallback = {<Loader/>}>
        <Routes>
          <Route path="" element = {<Home/>}/>
          <Route path="/movies" element = {<Movies/>}/>
          <Route path="/movies/:movieId" element = {<MovieDetails/>}>
            <Route path="cast" element = {<Cast/>}/>
            <Route path="reviews" element = {<Reviews/>}/>
            </Route>
          </Routes>
          </Suspense>
         </BrowserRouter>
       

};
