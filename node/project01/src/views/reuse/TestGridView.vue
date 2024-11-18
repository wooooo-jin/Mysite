<template>
<div>
    <button @click="doSearch" class="btn btn-warning"> 조회 </button>&emsp;
    <button @click="doDelete" class="btn btn-danger"> 삭제 </button>

    <br />
    <br />
    <SimpleGrid 
    :headers = "headers"
    :items = "parentData"
    @diff-change = "changeDiff"
    @change-item = "checkBoxSelected"
    />
</div>
</template>

<script>
import simpleGridVue from '@/components/flagment/SimpleGrid.vue'


export default{ 
    name:'',
    components:{"SimpleGrid" : simpleGridVue},
    data(){
        return{
            parentData : [],
            headers : [
                {title:"통화명", key: "exchange"},
                {title:"살때", key: "sale"},
                {title:"팔때", key: "buy"},
                {title:"전일대비", key: "diff"},
            ],
            allData : [],
            checkedItems : [],
        }
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        doSearch() {
            this.parentData =  
            [{  exchange : "미국 USD",
                sale : 1396,
                buy : 1420,
                diff : "전일 상승"
            },
            
            {  
                exchange : "유럽 EUR",
                sale : 1473,
                buy : 1502,
                diff : "전일 하락"
            },
            
            {  exchange : "일본 JPY",
                sale : 894,
                buy : 909,
                diff : "전일 하락"
            },
            
            {  exchange : "중국 CNY",
                sale : 192,
                buy : 202,
                diff : "전일 상승"
            }]
            this.allData = this.parentData
            this.checkedItems = []

        },
        changeDiff (data) {
            if (data === 'high'){
                console.log(data)
                this.parentData = this.allData.filter( (pdata) =>{
                    return pdata.diff == "전일 상승"
                }
            )
            }
            else if (data === 'low') {
                console.log(data)
                this.parentData = this.allData.filter( (pdata) => {
                    return pdata.diff == '전일 하락'
                })
            }
            else {
                this.parentData = this.allData
            }
        },
        checkBoxSelected(data) {
            console.log(data)
            this.checkedItems = data
        },
        doDelete(){
            this.parentData = this.parentData.filter(
                (data) => !this.checkedItems.includes(data.exchange)
            );
        }
    }
}
</script>