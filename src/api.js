import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID NAzou4ZuETPTML5lMni2sqRoSGkXH_roO2hIyWyazd0',
        },
        params: {
            query: term
        }
    })
    return response.data.results;
}
export default searchImages;