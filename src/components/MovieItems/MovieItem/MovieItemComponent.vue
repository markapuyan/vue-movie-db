<template>
    <div class="movie-item">
        <div class="card" @click="goTo(item)">
            <div class="card-image">
                <img class="movie-item-img" :src="getImageLink(item.poster_path)" alt="">
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
        goTo(item) {
            console.log(item)
            this.$router.push({path: `/movie/${item.id}`})
        }
    },

    mounted() {
    },
}
</script>

<style>
.movie-item{
     padding: 10px;
}

.card-body {
    padding: 5px;
    min-height: 60px;
}
.overlay {
    position: absolute;


    z-index: 10;
    background: transparent;
    width: 100%;
    height: 100%;

    text-transform: uppercase
}

.overlay-title {
    position: absolute;
    background: rgba(43,51,62, 0.5);
    color: #FFF;
    left: 0;
    bottom: 2px;
    width: inherit;
    padding: 10px;
}
.overlay h1 strong {
    color: #FFF;
}

.overlay:hover .overlay-title {
    height: 100%;
    background: rgba(43,51,62, 0.7);
    padding-top: 30px;
}
.overlay .overlay-title p {
    display: none;
    text-transform: none;
    font-weight: normal;
    font-size: 14px;
}

.overlay:hover .overlay-title p {
    display: block;
}

.movie-item-img {
    border-radius: 5px;
}
</style>
