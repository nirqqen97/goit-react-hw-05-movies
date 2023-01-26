import { useEffect, useState } from "react";
import {getTrending} from "../Api";
import { Lin, Title } from "./Home.styled";


export const Home = () => {
   const [trends, setTrends] = useState([]);
   
   useEffect(() => {
    getTrending().then(content => setTrends(content.data.results))
   }, []);
   
    return <>
    <Title>Trending Films</Title>
    {trends.map(trend =>{
        return <Lin key={trend.id}>{trend.original_title}</Lin>
    })}
    </>
}



// const funk = async () => {
//     const content = await getTrending();
// }