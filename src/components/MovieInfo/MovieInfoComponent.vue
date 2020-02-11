<template>
    <div> {{ id }}
        <div class="columns">
            <div class="column is-two-fifths">
                <img :src="getImageLink(movieData.poster_path)" alt="">
            </div>
            <div class="column">
                <h1>{{movieData.title}}</h1>
                <label for="" v-if="movieData.genres.length > 0">Genre</label>
                <p>{{getGenre(movieData.genres || [] )}}</p>
                <label for="" v-if="movieData.overview">Plot</label>
                <p>{{movieData.overview}}</p>
            </div>
        </div>
        <!-- <p>{{movieData}}</p> -->
    </div>
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
        getImageLink(imgSource) {
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

