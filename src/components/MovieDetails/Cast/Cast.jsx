import { getCast } from "Api"
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Photo,Info,Div} from "./Cast.styled";

const DEFAULT_URL = "https://www.themoviedb.org/t/p/w500/"

const Cast = () =>{
    const id = useParams()
    const [casts, setCasts] = useState([]);
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        setStatus('loading')
        getCast(id.movieId).then(c => {
            setCasts(c.data.cast)
            setStatus('success')}).catch(error => setStatus('error'))
    }, [id]);

     
    return casts.map(cast => {
             return <Div key={cast.id}>
                 {status === 'loading' &&  <Loader/>}
                 {status === 'success' && <Photo src={DEFAULT_URL + cast.profile_path}/>} 
                <Info>{cast.name}</Info>
                <Info>Character: {cast.character}</Info>
                </Div>
            })
}


export default Cast