<template>
    <Fragment>
        <section class="hero is-info is-large" :style="movieData.backdrop_path ? addStyle(movieData.backdrop_path) : ''">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    {{movieData.title}}
                </h1>
                <h2 class="subtitle" v-if="movieData.tagline">
                    {{movieData.tagline}}
                </h2>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="movie-info">
                <div class="columns">
                    <div class="column is-two-fifths">
                        <img :src="setImageLink(movieData.poster_path)" alt="">
                    </div>
                    <div class="column">
                        <h1>{{movieData.title}}</h1>
                        <label for="" v-if="movieData.genres.length > 0">Genre</label>
                        <p>{{getGenre(movieData.genres || [] )}}</p>
                        <label for="" v-if="movieData.overview">Plot</label>
                        <p>{{movieData.overview}}</p>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>


</template>
<script>
export default {

    data() {
        return {
            id : '',
            movieData: []
        }
    },

    watch: {
       '$route.params.id': function () {
            this.getMovieData()
        }
    },

    methods: {
        addStyle(backdrop_path) {
            let styleObject = {
                backgroundImage: 'url('+this.setImageLink(backdrop_path)+')',
                filter: 'grayscale(100%)'
            }
            return styleObject;
        },

        setImageLink(imgSource) {
            return 'https://image.tmdb.org/t/p/original'+imgSource;
        },

        getGenre(genre) {
            console.log(genre)
            let genreList = []
            genre.forEach(element => {
                return genreList.push(element.name);
            });
           return genreList.join(', ')

        },
        getMovieData() {
            this.id = this.$route.params.id
            const baseURI = `https://api.themoviedb.org/3/movie/`+this.id+`?api_key=0466c61e514a5b0f3783669a41c3b768`
            this.$http.get(baseURI)
            .then((result) => {
                console.log('RSULT', result)
                this.movieData = []
                if(result) {
                    this.movieData = result.data
                }
            })
            .catch((error) => {
                throw error
            })

        }
    },

    created() {
        this.getMovieData()
    },

}
</script>
<style>
.movie-info {
    padding: 50px 10px 10px 10px;
}
</style>


