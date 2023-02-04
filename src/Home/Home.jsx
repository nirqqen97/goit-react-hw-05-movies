import { useEffect, useState } from "react";
import {getTrending} from "../Api";
import { Lin, Title } from "./Home.styled";
import {Div} from "../components/MovieDetails/Cast/Cast.styled";
import { Loader } from "components/Loader/Loader";


 const Home = () => {
   const [trends, setTrends] = useState([]);
   const [status, setStatus] = useState("idle");
   
   
   useEffect(() => {
       setStatus('loading')
    getTrending().then(content => {
        setTrends(content.data.results)
            setStatus('success')}).catch(error => setStatus('error'))
   }, []);
   
    return <Div>
    <Title>Trending Films</Title>
    
    {status === 'success' && trends.map(trend =>{
        return <Lin key={trend.id} to={`movies/${trend.id}`}>{trend.original_title}</Lin>
    })}
    
     {status === 'loading' && <Loader/>}
    </Div>
}

export default Home

//https://image.tmdb.org/t/p/original/