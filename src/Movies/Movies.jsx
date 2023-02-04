import { getFilms } from "Api";
import { useEffect, useState } from "react";
import {FilmList} from "./FilmList/FilmList";
import {Loader} from "../components/Loader/Loader";

import { Container, Input,Btn,Form} from "./Movies.styled"
import { useLocation, useSearchParams } from "react-router-dom";

const Movies = () =>{
    const [films, setFilms] = useState([]);
    const [status, setStatus] = useState("idle");
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search') ?? '';
    const location = useLocation()
    const [query, setQuery] = useState('');
    
    const handleChange = e =>{
        setQuery(e.currentTarget.value)  
       
    }
    useEffect(() => {
     if (!search) {
         return
     }
     setStatus('loading')
     getFilms(search,1).then(film => {
         setFilms(film.data.results)
         setStatus('success')
     }).catch(setStatus('error'))
     
    }, [search]);
    
    
    const handleSubmit = async (e) => {
        setSearchParams({search : query})
        console.log();
        e.preventDefault();
    }
    
    return <Container>
        
        <Form onSubmit={handleSubmit}>
            <Input
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films "
            value={query} 
            />
            <Btn type="submit">Search</Btn>
        </Form>
        {status === 'success' &&  <FilmList films={films} location={location}/>}
        {status === 'loading' && <Loader/>}
    </Container>
}

export default Movies

// useEffect(() => {
//     setStatus('loading')
//     getReview(id.movieId).then(c => {
//         setReviews(c.data.results)
//         setStatus('success')}).catch(setStatus('error'))
// }, [id]);
