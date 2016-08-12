import 'es6-promise';
import 'isomorphic-fetch';

const apiKey = '9b59823f9494d3bceb5ce675017a24a6';
// const baseImageURL = 'http://image.tmdb.org/t/p/{}{}';

export const imageSizes = {
    'small': 'w500',
    'large':'w1280',
    'xlarge':'w1920'
};

function generate_url(path, append) {
    return `https://api.themoviedb.org/3${path}?api_key=${apiKey}&append_to_response=${append}&language=en&include_image_language=en,null`;
}


const client  = {
    get: function(path, append = '') {
        const url = generate_url(path, append);
        return fetch(url)
            .then(function(response) {
                return response.json()
            }).catch(function(ex) {
                console.log('parsing failed', path, ex)
            });
    }
};

export default client;
