<script>
import _ from 'lodash';
import { mapActions } from 'vuex'
import BaseMixin from './BaseMixin.vue'
export default {
    mixins: [BaseMixin],
    methods: {
        ...mapActions(['getSearchMovie']),
        getAsyncData: _.debounce( function (searchName) {
            this.getSearchMovie(searchName)
        }, 500),
    }
}
</script>