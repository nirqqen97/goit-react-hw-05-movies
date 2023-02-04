import { useEffect, useState,Suspense } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { getDetails } from "Api"
import { Loader } from "components/Loader/Loader";
import { Img,SmallTitle,Text,Title,Flex,Block,Links} from "./MovieDetails.styled"


const DEFAULT_URL = "https://www.themoviedb.org/t/p/original"
export const MovieDetails = () =>{
        const [details, setDetails] = useState([]);
        const {movieId} = useParams()
        const [status, setStatus] = useState("idle");
        const location = useLocation()
        
        useEffect(() => {
          setStatus('loading')
            getDetails(movieId).then(c => {
              setDetails(c.data)
              setStatus('success')}).catch(error => setStatus('error'))
        }, [movieId]);
                
  

    return <>
    <Suspense>
    <Links to = {location.state?.from ?? '/movies'}>back</Links>
        <Flex>
          
          {status === 'success' && <Img  src={DEFAULT_URL + details.poster_path} alt=""/>}
          {status === 'loading' && <Loader/>}
          <Block>
            <Title>{details.original_title}</Title>
            <Text>Vote average: {details.vote_average}</Text>
            <SmallTitle>Overview</SmallTitle>
            <Text>{details.overview}</Text>
            <SmallTitle>Genres</SmallTitle>
            <Text>NEED TO BE DONE</Text>
          </Block>
        
        </Flex>
        <Title>Additional info</Title>
          <Links state={{from : location.state?.from ?? '/movies'}} to="cast">Cast</Links>
          <Links state={{from : location.state?.from ?? '/movies'}} to="reviews">Reviews</Links>
        <Outlet/>
        </Suspense>
        </>
        
   
}



export default MovieDetails