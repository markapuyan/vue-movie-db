<script>
import BaseMixin from './BaseMixin.vue'
export default {
    mixins: [BaseMixin],
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

