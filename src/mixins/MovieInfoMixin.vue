<script>
export default {
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

        setImageLink(path) {
            return process.env.VUE_APP_IMAGESOURCE + path;
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

