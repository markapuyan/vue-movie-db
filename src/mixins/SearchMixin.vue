<script>
import _ from 'lodash';
import BaseMixin from './BaseMixin.vue'
export default {
    mixins: [BaseMixin],
    methods: {
        getAsyncData: _.debounce( function (searchName) {
            if(!searchName.length) {
                this.data = []
                return
            }
            this.isFetching = true
            const baseURI = this.movieDbApi.url+`search/movie?api_key=`+this.movieDbApi.key+`&query=${searchName}`
            this.$http.get(baseURI)
            .then((result) => {
                this.data = [];
                if(result.data.results) {
                    result.data.results.forEach((item) => this.data.push(item))
                }
            })
            .catch((error) => {
                this.data = []
                throw error
            })
            .finally(() => {
                this.isFetching = false
            })
        }, 500),
    }
}
</script>