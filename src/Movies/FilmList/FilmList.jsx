import { Item, List } from "./FilmList.styled"


export const FilmList = ({films, location}) =>{
        return (<List>
        {films.map(film => {
           return (<Item state={{from : location}} key={film.id} to ={`${film.id}`}>{film.original_title}</Item>)
        })}
    </List>)
}