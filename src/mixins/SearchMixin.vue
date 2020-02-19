<script>
import _ from 'lodash';
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
         getAsyncData: _.debounce( async function (searchName) {
            if(!searchName.length) {
                this.data = []
                return
            }
            this.isFetching = true
            let searchData = await this.MovieApi.getSearchData({query : searchName});
            if(searchData.status === 200) {
                this.isFetching = false
                this.data = [];
                if(searchData.data.results) {
                    searchData.data.results.forEach((item) => this.data.push(item))
                }
            }
        }, 500),
    }
}
</script>