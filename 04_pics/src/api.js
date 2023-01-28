import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID I1sb5qehrrcTaL-3-zU4gKEJCgy00Y6aUd8P928pXnw'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
}

export default searchImages;