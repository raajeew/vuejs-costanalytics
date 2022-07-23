<template>
    <header>
        <h3>{{title}}</h3>
        <div>
            <select name="type" id="" @change="dataByType($event.target.value)">
                <option value="provider">Provider</option>
                <option value="BU">BU</option>
                <option value="Lease Type">Lease Type</option>
                <option value="Platform">Platform</option>
            </select>
        </div>
    </header>
    <span v-if="loading">Loading...</span>
    <div class="by-cost-wrap" v-if="costs.length">
        <div class="col-a">
            <GChart
                type="PieChart"
                :data="chartData"
                :options="chartOptions"
                @ready="onChartReady"
            />
        </div>
        <div class="col-b">
            <ul class="cost-table">
                <li>
                    <div>Current Cost</div>
                </li>
                <li v-for="cost in tableData.data" :key="cost.title">
                    <div>{{cost.title}}</div>
                    <div>
                        <span>{{cost.cost}}</span>
                        <span>{{cost.variation}}</span>
                        <span>{{cost.trend}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import dataService from '@/services/data.service';
import { GChart } from 'vue-google-charts'
    export default{
        name: 'ByCostView',
        components: {
            GChart
        },
        props: {
            title: String
        },
        data(){
            return{
                costs:[],
                tableData:[],
                loading: true,
                chartData:[],
                chartOptions: {
                    pieHole: 0.3,
                    pieSliceTextStyle: {
                        color: 'black',
                    },
                    legend: { position: 'bottom' },
                    height: '400px'
                }
            }
        },
        async created(){
            try{
                const response = await dataService.getData(`/mcapi/cost`);
                this.costs = response.data.data;
                this.dataByType('provider');
                this.loading = false;
                
            }catch(error){
                this.loading = false;
                console.log(error)
            }
        },
        methods:{
            dataByType(type){
                let data = this.costs.find((item)=>{
                    return item.groupby == type
                })
                this.tableData = data;
                this.prepareChartData(data.data);
            },
            prepareChartData(data){
                this.chartData = [
                    ['Provider', 'Cost']
                ]
                data.forEach(item=>{
                    let ci = [item.title, item.cost]
                    this.chartData.push(ci)
                })
            }
        }
    }
</script>

<style scoped>
    header{
        display: flex;
        width: 100%;
    }
    header h3{
        width: 50%;
    }
    header div{
        width: 50%;
        text-align: right;
    }
    header div select{
        padding: 5px;
    }
    .by-cost-wrap{
        margin-top: 10px;
        display: flex;
        box-sizing: border-box;
    }
    .by-cost-wrap .col-a{
        width: 50%;
        box-sizing: border-box;
    }
    .by-cost-wrap .col-b{
        padding-top: 10px;
        width: 50%;
        box-sizing: border-box;
    }
    .cost-table{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .cost-table li{
        display: flex;
        border-bottom: 1px solid #ccc;
        color: #333;
    }
    .cost-table li > div{
        width: 50%;
        box-sizing: border-box;
        padding: 5px;
        font-size: 0.9rem;
    }
    .cost-table li > div:last-child{
        display: flex;
    }
    .cost-table li > div:last-child span{
        text-align: right;
        box-sizing: border-box;
        padding: 0 5px;
        width: 33%;
    }
    .cost-table li:first-child div{
        width: 100%;
        display: block;
        text-align: right;
        font-weight: bolder;
    }
</style>