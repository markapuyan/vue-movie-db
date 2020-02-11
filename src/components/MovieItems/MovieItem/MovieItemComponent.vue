<template>
        <div class="column is-2 is-narrow-mobile">
            <div class="card">
                <div class="card-image">
                    <img :src="getImageLink(item.poster_path)" alt="">
                    <p><strong style="color: #2B333E">{{item.title}}</strong> <b-tag rounded >{{item.vote_average}} /10</b-tag></p>
                    <br>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    props: {
        item: Object
    },

    data() {
        return {

        }
    },
    methods: {
        getImageLink(imgSource) {
            return 'https://image.tmdb.org/t/p/original'+imgSource;
        },
    },

    mounted() {
    },
}
</script>