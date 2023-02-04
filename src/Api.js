import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/"

export const getFilms = async( text,page )=>{
    try {
      const response = await axios.get(`3/search/movie?api_key=d2b1f43b135f5d6f20df0dc93193eaa3&language=en-US&query=${text}&page=${page}&include_adult=false`)
      return response
    } catch (error) {
      console.error(error)
    }
}

export const getTrending = async()=>{
    try {
      const response = await axios.get(`3/trending/all/day?api_key=d2b1f43b135f5d6f20df0dc93193eaa3`)
      return response
    } catch (error) {
      console.error(error)
    }
}

export const getDetails = async(id) =>{
  try {
    const response = await axios.get(`3/movie/${id}?api_key=d2b1f43b135f5d6f20df0dc93193eaa3&language=en-US`)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const getCast = async(id) =>{
  try {
    const response = await axios.get(`3/movie/${id}/credits?api_key=d2b1f43b135f5d6f20df0dc93193eaa3&language=en-US`)
    return response
  } catch (error) {
    console.error(error)
  }
}

export const getReview = async(id) =>{
  try {
    const response = await axios.get(`3/movie/${id}/reviews?api_key=d2b1f43b135f5d6f20df0dc93193eaa3&language=en-US&page=1`)
    return response
  } catch (error) {
    console.error(error)
  }
}

