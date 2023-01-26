import { getPhotos } from "Api";
import { useState } from "react"
import {FilmList} from "./FilmList/FilmList";

import { Container, Input,Btn,Form} from "./Movies.styled"

export const Movies = () =>{
    const [search, setSearch] = useState("");
    const [films, setFilms] = useState([]);
  
    const handleChange = e =>{  
        setSearch(e.currentTarget.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const photos = await getPhotos();
        setFilms(photos.data.results);;
       
    }
    
    return <Container>
        <Form onSubmit={handleSubmit}>
        <Input
        onChange={handleChange}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films "
        value={search} />
        <Btn type="submit">Search</Btn>
        </Form>
        <FilmList films={films}/>
    </Container>
}


// const smth = async() => {
//     const photos = await getPhotos();
//     console.log(photos);;
// }