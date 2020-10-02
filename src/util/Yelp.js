// API Key
const apiKey = "lIKc43znjUZemWuADLJ9krfNUONiiueiKBak_2ebvaa3qBYgR9xmY_38uVUrFN-iV8hMFbAIQKuKzWwuDBRO2f_B4W1AStk5V9rD5h4z3y_PVCvw3t_9GxB3BL10X3Yx"
// Client ID
// LBQ9meWCaeqmfWbeDYkQOw
const fetch = require("node-fetch")
const cors = "https://cors-anywhere.herokuapp.com/";
const Yelp = {
    search(term, location, sortBy, corsEnable) {
        return fetch((corsEnable? cors: "") + `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            method: 'get',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address,
                        city: business.location.city,
                        zipcode: business.location.zipcode,
                        rating: business.rating,
                        price: business.price,
                        categories: business.categories,
                        review_count: business.review_count
                    }
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    }
};

export default Yelp;
