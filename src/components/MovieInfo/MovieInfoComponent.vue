<template>
    <div>
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
                    <div class="column is-two-fifths movie-item-side">
                        <div style="padding: 0 30px">
                            <img class="movie-poster" :src="setImageLink(movieData.poster_path)" alt="" style="text-align: left">
                            <br>
                            <div style="text-align: right; width: 200px; margin: 0 auto">

                                <div class="movie-info-item">
                                    <label class="movie-label" for="" v-if="movieData.release_date">Release Date</label>
                                    <p class="movie-info-value">{{movieData.release_date}}</p>
                                </div>
                                <div class="movie-info-item">
                                    <label class="movie-label" for="" v-if="imdbMovieData.Director">Directed By</label>
                                    <p class="movie-info-value">{{imdbMovieData.Director}}</p>
                                </div>
                                <div class="movie-info-item">
                                    <label class="movie-label" for="" v-if="movieData.genres">Genre</label>
                                    <p class="movie-info-value">{{getGenre(movieData.genres || [] )}}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="column movie-item-body">
                        <div style="padding: 0 30px">
                            <h2 class=""  v-if="movieData.tagline"  style="font-family: 'Roboto Slab', serif; font-weight: bold; font-size: 3rem; text-align: left">
                                {{movieData.tagline}}
                            </h2>
                            <p class="movie-info-overview">{{movieData.overview}}</p>
                            <div class="rating">
                                <div class="columns">
                                    <div class="column">

                                    </div>
                                </div>  
                            </div>
                            <!-- <Rating/> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import MovieInfoMixin from '@/mixins/MovieInfoMixin.vue'
export default {

    data() {
        return {
            id : '',
        }
    },
    components: {
        // Rating
    },
    mixins: [ MovieInfoMixin ],

    computed: {
        ...mapGetters(['movieData', 'imdbMovieData'])
    },

    watch: {
       '$route.params.id': function () {
            this.getMovieData(this.$route.params.id)
        }
    },

    methods: {
        ...mapActions(['getMovieData', 'getImdbMovieData'])
    },

    mounted() {
        this.getMovieData(this.$route.params.id)
    },
    created() {
        
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
    padding-right: 30px;
}

.movie-poster {
    height: 300px;
    border-radius: 8px;
}

.movie-title {
    font-size: 70px !important;
    text-align: left;
    padding-left: 30px;

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

.movie-item-body .movie-info-value{
    text-align: left;
}
.movie-item-body .movie-info-value{
    text-align: left;
}
.movie-item-body .movie-info-item {
    text-align: left !important;
}
.movie-info-value {
    font-size: 20px;
    /* text-align: right; */
    line-height: 2em;
}

.movie-info-item::after  {
    content: '';
    border-bottom: 2px solid #ccc;
    width: 30px;
    display: block;
}
.movie-item-side .movie-info-item::after {
    margin-left: auto;
}


</style>


