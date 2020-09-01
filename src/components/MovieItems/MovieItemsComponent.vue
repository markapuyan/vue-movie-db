<template>
    <div class="container">
        <div class="main">
            <section id="trending">
                <h3 class="section-title">Trending</h3>
                <div class="section-filter">
                    <b-radio v-for="trendingItem in trending"
                        :key="trendingItem.id"
                        v-model="trendValue"
                        :name="trendingItem.name"
                        :native-value="trendingItem.value"
                        type="is-success"
                        @click.native="setTrend(trendingItem)">
                        {{trendingItem.name}}
                    </b-radio>
                </div>
                <div class="section-body">
                    <div class="container">
                        <carousel :perPage="5">
                            <slide v-for="item in allFeaturedMovies" :key="item.id" >
                                <MovieItem :item="item" />
                            </slide>
                        </carousel>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MovieItem from '@/components/MovieItems/MovieItem/MovieItemComponent'
export default {
    data() {
        return {
            limitationList:5,
            trending: [{
                id: 1,
                name: 'Movie',
                value: 'movie'
            },{
                id: 2,
                name: 'TV Show',
                value: 'tv'
            }],
            trendValue: 'movie'
        }
    },
    components: {
        MovieItem
    },

    computed: {
        ...mapGetters(['allFeaturedMovies'])
    },

    methods: {
        ...mapActions(['getFeaturedMovies']),
        setTrend(value) {
            this.radio = value.value
            this.getFeaturedMovie()
        },
        getFeaturedMovie() {

            this.getFeaturedMovies(this.radio)

        }
    },
    created() {
        this.getFeaturedMovie();
    },
}
</script>

<style>
section {
    padding: 10px;

}
.section-title {
    font-size: 45px;
    line-height: 2rem;
    font-weight: bolder;
    padding: 20px 0;
    float: left;
    display: inline;
}
section .section-body {
    clear: both;
}

.section-filter {
    float: right;
    padding: 20px 0 20px 10px;
    margin-top: 12px;
}
</style>
