import Request from '../request'

/**
 *  API for Movie
 *
 */


 class Movie
 {
    /**
     * get featured movies
     * @param {string} type
     */
    getFeaturedMovie(type) {
        return Request.get(`trending/${type}/day`, {}, 'info-movie');
    }

    /**
     * search movie
     * @param {object} params
     *
     */
    getSearchData(params) {
        return Request.get(`search/movie`, params, 'info-movie');
    }

    /**
     * get movie data
     * @param {string} id
     */
    getMovieData(id) {
        return Request.get(`movie/${id}`, {}, 'info-movie')
    }

    /**
     * get imdb movie data
     * @param {string} id
     */
    getImdbMovieData(id) {
        let objectParams = { i : id }
        return Request.get(``, objectParams, 'info-imdb')
    }
 }


 export default new Movie();