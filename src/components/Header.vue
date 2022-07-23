<template>
    <div class="navbar">
        <div class="logo">Cost Analytics</div>
        <div class="menu-items">
            <ul>
                <li v-for="menu in menuItems" :key="menu.id">
                    <router-link :to="menu.path">{{menu.name}}</router-link>
                </li>
               
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'PageHeader',
        props: {
            menuItems: []
        }
    }
</script>

<style scoped>
    .navbar {
        box-sizing: border-box;
        padding: 0 15px;
        display: flex;
        height: 50px;
    }
    .navbar-wrap{
        display: flex;
        width: 100%;
    }
    .logo{
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 1.25rem;
    }
    .menu-items ul{margin: 0; padding:0; list-style: none; margin-left: 20px;}
    .menu-items ul{display: flex; height: 50px;}
    .menu-items li{
        display: flex;
        padding: 0 10px;
        align-items: center;
    }
    .menu-items li a{
        text-decoration: none;
        color: #333333;
        font-size: 1rem;
    }
    .router-link-active{
        font-weight: bold;
    }
</style>