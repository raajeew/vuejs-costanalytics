<template>
    <div class="potential-savings">
        <h3>{{title}}</h3>
        <p v-for="ps in potentialSavings" :key="ps.groupby">
            {{ps.groupby}}
        </p>
        <span v-if="loading">Loading..</span>
    </div>
</template>

<script>
import dataService from '@/services/data.service';

    export default{
        name: 'PotentialSavings',
        props: {
            title: String
        },
        data(){
            return{
                potentialSavings:[],
                loading: true
            }
        },
        async created(){
            try{
                const response = await dataService.getData(`/mcapi/cost`);
                this.potentialSavings = response.data.data;
                this.loading = false;
            }catch(error){
                this.loading = false;
                console.log(error)
            }
        }
    }
</script>