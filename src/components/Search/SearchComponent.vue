<template>
    <section class="hero is-light is-bold" style="background: #F6F7F9">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    <!-- Movie Search -->
                </h1>
                <b-autocomplete
                    size="is-large"
                    :data="data"
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
export default {
    data() {
        return {
            searchName: '',
            data: [],
            selected: null,
            isFetching: false
        }
    },

    methods: {
        getAsyncData: _.debounce( function (searchName) {
            if(!searchName.length) {
                this.data = []
                return
            }
            this.isFetching = true
            const baseURI = `https://api.themoviedb.org/3/search/movie?api_key=0466c61e514a5b0f3783669a41c3b768&query=${searchName}`
            this.$http.get(baseURI)
            .then((result) => {
                console.log('RSULT', result.data.results)
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

        goTo(option) {
            this.selected = option;
            this.$router.push({path: `/movie/${this.selected.id}`})
        }
    }
}
</script>