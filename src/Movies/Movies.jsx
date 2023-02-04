import { getFilms } from "Api";
import { useState } from "react";
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
    const handleChange = e =>{  
        setSearchParams({search : e.currentTarget.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setStatus('loading')
            const content = await getFilms(search,1);
            setFilms(content.data.results);
          } catch (error) {
            setStatus('error')
          } finally {
          setStatus('success')
          }
    }
    
    return <Container>
        
        <Form onSubmit={handleSubmit}>
            <Input
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films "
            value={search} 
            />
            <Btn type="submit">Search</Btn>
        </Form>
        {status === 'success' &&  <FilmList films={films} location={location}/>}
        {status === 'loading' && <Loader/>}
    </Container>
}

export default Movies