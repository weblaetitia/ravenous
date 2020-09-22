import {YELP_API_KEY} from './apiKey'

const infos = { 
    headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
    }
}


// ****** Yelp object stores the functionaly needed to interact with Yel api **** //
const Yelp = { 
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, infos)
        .then(response => {
            return response.json()
        })
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address : business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }) )
            }
        })
    }
  }

export default Yelp;