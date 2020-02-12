<template>
    <Fragment>
        <section class="hero is-info is-large" :style="movieData.backdrop_path ? addStyle(movieData.backdrop_path) : ''">
            <div class="hero-body">
                <div class="container">
                <h1 class="title movie-title">
                    {{movieData.title}}
                </h1>
                <h1 class="release-date" v-if="movieData.release_date">{{ setDate(movieData.release_date)}}</h1>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="movie-info">
                <div class="columns">
                    <div class="column is-two-fifths">
                        <div style="padding: 0 30px">
                            <img class="movie-poster" :src="setImageLink(movieData.poster_path)" alt="" style="text-align: left">
                            <br>
                            <div style="text-align: right; width: 200px; margin: 0 auto">

                                <div class="movie-info-item">
                                    <label class="movie-label" for="" v-if="movieData.release_date">Release Date</label>
                                    <p class="movie-info-value">{{movieData.release_date}}</p>
                                </div>
                                <div class="movie-info-item">
                                    <label class="movie-label" for="" v-if="movieData.release_date">Release Date</label>
                                    <p class="movie-info-value">{{movieData.release_date}}</p>
                                </div>
                                <div class="movie-info-item">
                                    <label class="movie-label" for="" v-if="movieData.genres.length > 0">Genre</label>
                                    <p class="movie-info-value">{{getGenre(movieData.genres || [] )}}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="column">
                        <div style="padding: 0 30px">
                            <h2 class=""  v-if="movieData.tagline"  style="font-family: 'Roboto Slab', serif; font-weight: bold; font-size: 3rem; text-align: left">
                                {{movieData.tagline}}
                            </h2>

                            <p class="movie-info-overview">{{movieData.overview}}</p>
                        </div>
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
            imdb_id: '',
            movieData: []
        }
    },

    watch: {
       '$route.params.id': function () {
            this.getMovieData()
        }
    },

    methods: {
        setDate(date_value) {
            return date_value.substring(0, 4)
        },
        addStyle(backdrop_path) {
            let styleObject = {
                backgroundImage: 'url('+this.setImageLink(backdrop_path)+')',
                backgroundSize: 'cover'
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
                    if(this.movieData.imdb_id) {
                        this.getImdbMovieData(this.movieData.imdb_id)
                    }
                }
            })
            .catch((error) => {
                throw error
            })

        },
        getImdbMovieData(id) {
            console.log('id', id)
            this.imdb_id = id
            const baseURI = `http://www.omdbapi.com/?i=`+this.imdb_id+`&apikey=aa697ef1`
            this.$http.get(baseURI)
            .then((result) => {
                console.log('IMBDB RESULT', result)

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
    padding: 100px 10px 10px 10px;
}

.release-date {
    text-align: right;
    font-size: 10em;
    position: absolute;
    right: 0;
    font-weight: bold;
    opacity: 0.5;
}

.movie-poster {
    height: 300px;
    border-radius: 8px;
}

.movie-title {
    font-size: 70px !important;
    text-align: left;

}
.movie-label {
    font-size: 1.5em;
    text-align: right;
    font-stretch: condensed;
    font-kerning: initial;
    font-stretch: expanded;
    letter-spacing: 2px;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
}

.movie-info-overview {
    font-size: 20px;
    text-align: justify;
    line-height: 2em;
    margin-top: 30px;
}

.movie-info-item {
    margin-top: 20px;
}
.movie-info-item  + .movie-info-item {
    margin-top: 40px;
}
.movie-info-value {
    font-size: 20px;
    text-align: right;
    line-height: 2em;
}
.movie-info-item::after  {
    content: '';
    border-bottom: 2px solid #ccc;
    width: 30px;
    display: block;
    margin-left: auto;
}

</style>


