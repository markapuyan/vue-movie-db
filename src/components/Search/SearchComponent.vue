<template>
    <section class="hero is-light is-bold" style="background: #F6F7F9">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    Movie Search
                </h1>
                <b-autocomplete
                    size="is-large"
                    :data="searchData"
                    placeholder="e.g. Fight Club"
                    field="title"
                    :loading="isFetching"
                    @typing="getAsyncData"
                    @select="option => goTo(option)">

                    <template slot-scope="props">
                        <div class="media">
                            <div class="media-left">
                                <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`">
                            </div>
                            <div class="media-content">
                                {{ props.option.title }}
                                <br>
                                <small>
                                    Released at {{ props.option.release_date }},
                                    rated <b>{{ props.option.vote_average }}</b>
                                </small>
                            </div>
                        </div>
                    </template>
                </b-autocomplete>
            </div>
        </div>
    </section>
</template>
<script>
import _ from 'lodash';
import {mapGetters, mapActions} from 'vuex'
export default {
    data() {
        return {
            searchName: '',
            selected: null,
        }
    },
    computed: {
        ...mapGetters(['isFetching', 'searchData'])
    },
    methods: {
        ...mapActions(['getSearchMovie']),
        getAsyncData: _.debounce( function (searchName) {
            this.getSearchMovie(searchName)
        }, 500),

        goTo(option) {
            if(option !== undefined && option !== null) {
                this.selected = option;
                const path = `/movie/${this.selected.id}`
                if (this.$route.path !== path) this.$router.push(path)
            }
        }
    }
}
</script>
<style scoped>
    .title {
        text-align: left;
    }
</style>