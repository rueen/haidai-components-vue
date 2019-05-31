<template>
    <div id="app" class="wrapper">
        <nav class="nav">
            <ul>
                <li><a href="#/countdown">倒计时</a></li>
            </ul>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {}
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
}
a{
    text-decoration: none;
    color: #717171;
}
a:hover,a:active,a:visited{
    color: #2089dc;
}
.wrapper{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.nav{
    width: 20%;
}
.container{
    width: 76%;
}
.code-box{
    border-left: 4px solid #5388d0;
    background: #f1f7fc;
    margin: 16px 0;
    overflow-x: scroll;
}
</style>
