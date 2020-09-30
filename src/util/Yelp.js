// API Key
const apiKey = "lIKc43znjUZemWuADLJ9krfNUONiiueiKBak_2ebvaa3qBYgR9xmY_38uVUrFN-iV8hMFbAIQKuKzWwuDBRO2f_B4W1AStk5V9rD5h4z3y_PVCvw3t_9GxB3BL10X3Yx"
// Client ID
// LBQ9meWCaeqmfWbeDYkQOw

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}` 
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name
                    }
                });
            }
        });
    }
};
