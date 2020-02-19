<script>

import Movie from "@/utils/api/Movie";

export default {
    data() {
        return {
            data: [],
            MovieApi : Movie,
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

    methods: {
        setTrend(value) {
            this.radio = value.value
            this.getFeaturedMovie()
        },

        async getFeaturedMovie() {
            let featuredMovieData = await this. MovieApi.getFeaturedMovie(this.radio);

            if(featuredMovieData.status === 200) {
                this.data = [];
                featuredMovieData.data.results.forEach((item) => this.data.push(item))
            }
        }
    },
}
</script>
