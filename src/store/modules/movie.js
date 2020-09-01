
import axios from 'axios'
const state = {
    featureMovies: [],
    movieData: [],
    imdbMovieData: [],
    searchData: [],
    isFetching: false


}

const getters = {
    allFeaturedMovies: (state) => state.featureMovies,
    movieData: (state) => state.movieData,
    imdbMovieData: (state) => state.imdbMovieData,
    searchData: (state) => state.searchData,
    isFetching: (state) => state.isFetching
}

const actions = {

    async getSearchMovie({commit}, searchQuery) {
        if(!searchQuery.length) {
            commit('SET_SEARCH_DATA', [])
        } else {
            try {
                commit('ISFETCHING', true)
                const response = await axios.get(process.env.VUE_APP_MOVIEDBAPI_URL+`search/movie?api_key=`+process.env.VUE_APP_MOVIEDBAPI_KEY+`&query=${searchQuery}`)
                let tempSearchData = []
                if(response.data.results) {
                    response.data.results.forEach((item) => tempSearchData.push(item))
                }
    
                commit('SET_SEARCH_DATA', tempSearchData)
    
            } catch(error) {
                console.log(error)
            }
        }

        commit('ISFETCHING', false)
    },
    async getMovieData({commit, dispatch}, id) {
        try {
            const response = await axios.get(process.env.VUE_APP_MOVIEDBAPI_URL+`movie/`+id+`?api_key=`+process.env.VUE_APP_MOVIEDBAPI_KEY)
            let movieData =  response.data
            commit('SET_MOVIE_DATA', movieData)
            if(movieData.imdb_id) {
                dispatch('getImdbMovieData', movieData.imdb_id)
            }
        } catch (error) {
            console.log(error)
        }
    },

    async getImdbMovieData({commit}, id) {
        try {
            const response = await axios.get(process.env.VUE_APP_OMDBAPI_URL+`?i=`+id+`&apikey=`+process.env.VUE_APP_OMBDBAPI_KEY)
            commit('SET_IMDB_MOVIE_DATA', response.data)
        } catch(error) {
            console.log(error)
        }
    },

    async getFeaturedMovies({commit}, radio) {
        try {
            const response =  await axios.get(process.env.VUE_APP_MOVIEDBAPI_URL + `trending/`+radio+`/day?api_key=`+process.env.VUE_APP_MOVIEDBAPI_KEY)
            let data = []
            response.data.results.forEach((item) => data.push(item))
            commit('SET_FEATURE_MOVIES', data)

        } catch(error) {
            console.log(error)
        }
    }

}

const mutations = {
    'ISFETCHING': (state, isfetching) => state.isFetching = isfetching,
    'SET_SEARCH_DATA': (state, searchData) => state.searchData = searchData,
    'SET_MOVIE_DATA': (state, movieData) => state.movieData = movieData,
    'SET_IMDB_MOVIE_DATA': (state, imdbMovieData) => state.imdbMovieData = imdbMovieData,
    'SET_FEATURE_MOVIES': (state, data) => state.featureMovies = data


}


export default({
    state,
    getters,
    actions,
    mutations
})