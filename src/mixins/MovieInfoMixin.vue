<script>
import BaseMixin from './BaseMixin.vue'
export default {
    mixins: [BaseMixin],
    methods: {
        getMovieData() {
            this.id = this.$route.params.id
            const baseURI = this.movieDbApi.url+`movie/`+this.id+`?api_key=`+this.movieDbApi.key
            this.$http.get(baseURI)
            .then((result) => {
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
            this.imdb_id = id
            const baseURI = this.omdbApi.url+`?i=`+this.imdb_id+`&apikey=`+this.omdbApi.key
            this.$http.get(baseURI)
            .then((result) => {
                this.imdbData = result.data
            })
            .catch((error) => {
                throw error
            })
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

