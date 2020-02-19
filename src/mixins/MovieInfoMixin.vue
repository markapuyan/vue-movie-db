<script>
import BaseMixin from './BaseMixin.vue'

import Movie from "@/utils/api/Movie";

export default {

    data() {
        return {
            MovieApi : Movie
        }
    },
    mixins: [BaseMixin],
    methods: {
        async getMovieData() {
            this.id = this.$route.params.id
            this.movieData = [];
            let movieData = await this.MovieApi.getMovieData(this.id);

            if (movieData.status === 200) {
                this.movieData = movieData.data;
                if(this.movieData.imdb_id) {
                    this.getImdbMovieData(this.movieData.imdb_id)
                }
            }
        },

        async getImdbMovieData(id) {
            this.imdb_id = id
            let imdbData = await this.MovieApi.getImdbMovieData(this.imdb_id);
            if (imdbData.status === 200) {
                this.imdbData = imdbData.data;
            }
        },

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

        setImageLink(path) {
            return this.imageSource + path;
        },

        getGenre(genre) {
            let genreList = []
            genre.forEach(element => {
                return genreList.push(element.name);
            });
            return genreList.join(', ')
        },

    }
}
</script>

