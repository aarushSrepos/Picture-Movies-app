import axios from 'axios';



API_url = 'https://api.unsplash.com/'

API_key = '3Usfl_OQRvYajtJ0AOLELs7tObtWN_ORW54zJUYMvpQ'


export const GETmovies = async () => {
    try {
        const resp = await axios.get(`${API_url}photos/?client_id=${API_key}`)
        return( resp.data )
        // const data = resp.data
        // return data
    } catch (error) {
        console.error('Error fetching movies:', error)
    }
}


export const SearchMovies = async ({ query }) => {
    try {
        const resp = await axios.get(`${API_url}search/photos?page=1&query=${query}&client_id=${API_key}`)
        console.log(resp)
        return (resp.data.results)
    } catch (error) {
        console.error(error)
    }
}