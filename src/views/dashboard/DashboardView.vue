<template>
    <div class="dashboard">
        <h2>Dashboard</h2>
        <div class="wrap">
            <ul class="snapshots">
                <li class="w50 pl0">
                    <div class="card">
                        <ByCostView :title="'By Cost'" />
                    </div>
                </li>
                <li>
                    <div class="card">
                        <PotentialSavings :title="'Potential Savings'" />
                    </div>
                </li>
                <li class="pr-0">
                    <div class="card">
                        <InsightsViewVue :title="'Insights'" />
                    </div>
                </li>
                <li class="w50 pl0">
                    <div class="card">
                        Cost By
                    </div>
                </li>
                <li>
                    <div class="card">
                       Cost Variations
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
    //import dataService from '@/services/data.service';
    import InsightsViewVue from './widgets/InsightsView.vue'
    import PotentialSavings from './widgets/PotentialSavings.vue'
    import ByCostView from './widgets/ByCost.vue'
    
    export default{
        name: "DashboardView",
        components: {
            PotentialSavings,
            InsightsViewVue,
            ByCostView
        },
        data(){
            return{
                snapshot:[],
                loading: true
            }
        }
    }
</script>

<style scoped>
.wrap{
    margin-top: 10px;
}
 .snapshots{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
 }
 .snapshots > li{
    width: 25%;
    box-sizing: border-box;
    padding: 5px 7px 7px;
 }
 .snapshots > li .card{
    min-height: 300px;
 }
 .w50{
    width: 50% !important;
 }
 .pl0{padding-left: 0 !important;}
 .pr0{padding-right: 0 !important;}
</style>