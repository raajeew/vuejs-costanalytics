<template>
    <h2>Providers</h2>
    <div class="card wrap">
        test
    </div>
</template>

<script>
    import DataService from '@/services/data.service'
    export default{
        name: "ProvidersView",
        data(){
            return{
                skills:[],
                loading: true
            }
        },
        async created(){
            try{
                const response = await DataService.getData(`/mcapi/snapshot`);
                this.skills = response.data.items;
                this.loading = false;
            }catch(error){
                this.loading = false;
                console.log(error)
            }
        }
    }
</script>
<style scoped>
    .card.wrap{
        margin-top: 10px;
    }
</style>