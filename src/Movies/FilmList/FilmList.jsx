import { Item, List } from "./FilmList.styled"


export const FilmList = ({films}) =>{
     return (<List>
        {films.map(film => {
           return (<Item key={film.id}>{film.original_title}</Item>)
        })}
    </List>)
}