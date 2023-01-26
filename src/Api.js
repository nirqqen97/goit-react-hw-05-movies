import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/"

export const getPhotos = async( text,page )=>{
    try {
      const response = await axios.get(`3/search/movie?api_key=d2b1f43b135f5d6f20df0dc93193eaa3&language=en-US&query=cat&page=1&include_adult=false`)
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
