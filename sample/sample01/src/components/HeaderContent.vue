<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <h1 class="logo"><router-link class="navbar-brand" to="/" v-text="pageTitle"></router-link></h1>
            <button type="button" class="navbar-toggler" v-on:click="toggleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav" v-bind:class="{ show: isNavbar }">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="item in items" :key="item.id">
                        <router-link class="nav-link" :to="item.path">{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        <router-view/>
    </div>
</template>

<script>

export default {
    
    data() {
        return {
            isNavbar: false,
            pageTitle: 'Vue2',
            items: [
                { id: 1, name: '기본적인 문법 정리', path: '/basic' },
                { id: 2, name: '강의실', path: '/class' },
                { id: 3, name: 'Class03', path: '/class03' },
                { id: 4, name: 'Class04', path: '/class04' }
            ]
        }
    },
    created(){
        this.$router.afterEach(() => {
            this.isNavbar = false;
        }); 
    },
    methods:{
        toggleNavbar(){
            this.isNavbar = !this.isNavbar;
        }
    }

}
</script>

<style scoped>
    .logo a {
        font-size:24px;
        font-weight: bold;
    }
    .navbar {
        margin-bottom: 20px;
    }
    .navbar-dark .navbar-nav .nav-link.router-link-active {
        color:#fff;
        font-weight: bold;
        text-decoration: underline;
    }
</style>
