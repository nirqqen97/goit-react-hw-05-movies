import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {Info,Div} from "../Cast/Cast.styled";
import { Loader } from "components/Loader/Loader";
import { getReview } from "Api";

export const Reviews = () =>{
    const id = useParams()
    const [reviews, setReviews] = useState([]);
    const [status, setStatus] = useState('idle');
    
    useEffect(() => {
        setStatus('loading')
        getReview(id.movieId).then(c => {
            setReviews(c.data.results)
            setStatus('success')}).catch(setStatus('error'))
    }, [id]);
    
    return <>
    {status === 'loading' && <Loader/>}
    {status === 'success' && reviews.map(review =>{
        return <Div key={review.id}>
            <Info>Author :{review.author}</Info>
            <Info>{review.content}</Info>
        </Div>
    })}
    
    </>
}

