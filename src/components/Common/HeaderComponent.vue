<template>
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <b class="movie-brand-tag">MovieDb</b>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar {
    background: rgb(128,202,50);
}
.movie-brand-tag {
    text-decoration: none;
    color: #FFF;
    text-transform: uppercase;
}
</style>