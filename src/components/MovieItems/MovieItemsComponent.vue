<template>
    <div class="main">
        <section id="trending">
            <h3 class="section-title">Trending</h3>
            <div class="section-filter">
                <b-radio v-for="trendingItem in trending"
                    :key="trendingItem.id"
                    v-model="radio"
                    :name="trendingItem.name"
                    :native-value="trendingItem.value"
                    type="is-success"
                     @click.native="sample(trendingItem)">
                    {{trendingItem.name}}

                </b-radio>
            </div>
            <div class="columns">
                <!-- <MovieItem v-for="item in data.slice(0, 6)" :key="item.id" :item="item" /> -->
            </div>
        </section>

    </div>

</template>

<script>
// import MovieItem from '@/components/MovieItems/MovieItem/MovieItemComponent'
export default {
    data() {
        return {
            data: [],
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
            radio: 'movie'
        }
    },
    components: {
        // MovieItem
    },

    methods: {
        sample(value) {
            if(this.radio != value) {
                this.getFeaturedMovie()
                this.radio = value;
            }

        },
        getFeaturedMovie() {
            const baseURI = `https://api.themoviedb.org/3/trending/`+this.radio+`/day?api_key=0466c61e514a5b0f3783669a41c3b768`
            this.$http.get(baseURI)
            .then((result) => {
                console.log('RSULT', result)
                this.data = []
                result.data.results.forEach((item) => this.data.push(item))
            })
            .catch((error) => {
                throw error
            })
        }
    },
    mounted() {
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
section .columns {
    clear: both;
}

.section-filter {
    float: right;
    padding: 20px 0 20px 10px;
    margin-top: 12px;
}
</style>
