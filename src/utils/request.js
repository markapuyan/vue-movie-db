import axios from 'axios';



class Request {

    constructor() {
        this.moviedbUrl     =  'https://api.themoviedb.org/3/';
        this.moviedbKey     = '0466c61e514a5b0f3783669a41c3b768';
        this.omdbUrl        = 'http://www.omdbapi.com/';
        this.omdbKey        = 'aa697ef1';
    }

    async get(url, objectParams, type='') {
        console.log('process.env', process.env)
        let params = {};

        if (type == 'info-movie') {
            params = Object.assign({api_key : this.moviedbKey}, objectParams);
        }

        if(type == 'info-imdb') {
            params = Object.assign( objectParams , {apikey : this.omdbKey });
        }

        let request_params = { params: params, crossDomain: true }

        return await axios.get( (type== 'info-movie') ? this.moviedbUrl + url : this.omdbUrl , request_params)
            .then(function(response){
                return response
            })
            .catch(function(...error) {
                return error[0].response
            })
    }
}

export default new Request();