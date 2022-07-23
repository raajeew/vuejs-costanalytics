<template>
    <h3>{{title}}</h3>
    <span v-if="loading">Loading...</span>
    <ul class="insights">
        <li v-for="insight in insights" :key="insight.title">
            <p>{{insight.title}}</p>
        </li>
    </ul>
</template>

<script>
import dataService from '@/services/data.service';

    export default{
        name: 'InsightsView',
        props: {
            title: String
        },
        data(){
            return{
                insights:[],
                loading: true
            }
        },
        async created(){
            try{
                const response = await dataService.getData(`/mcapi/insites`);
                this.insights = response.data;
                this.loading = false;
            }catch(error){
                this.loading = false;
                console.log(error)
            }
        }
    }
</script>

<style scoped>
.insights{
    margin: 0;
    padding: 0;
    list-style: none;
}
.insights > li p{
    margin: 0;
    padding: 0;
}
.insights > li{
    padding: 7px 10px;
    box-sizing: border-box;
    background: #f5f5f5;
    margin: 10px 0;
    font-size: 0.9rem;
}
</style>