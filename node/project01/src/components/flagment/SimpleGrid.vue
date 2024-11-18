<template>
<div>

<select class="form-select mg-5" aria-label="Default select example"
@change="diffChange" v-model="SelectedDate">
  <option value="all">모두 보기</option>
  <option value="high">전일 상승</option>
  <option value="low">전일 하락</option>
</select>
    <table class ="table table-bordered table-striped">
        <thead>
        <tr>
            <th v-show="SelectedDate === 'all'">
                <input type="checkbox" name="" id="">
            </th>
            <th v-show="SelectedDate === 'high'">
                <input type="radio" name="" id="">
            </th>            
            <th v-for="col in headers" :key="col">{{ col.title }}</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in items" :key="i">
            <th v-show="SelectedDate === 'all'">
                <input type="checkbox" name="" id="" 
                @change="selectedCheck" 
                :value="item.exchange" 
                v-model="checkedItems">
            </th>             
            <th v-show="SelectedDate === 'high'">
                <input type="radio" name="" id="" 
                @change="selectedCheck" 
                :value="item.exchange" 
                v-model="checkedItems">
            </th>                     
            <th v-for="col in headers" :key="col.key">{{item[col.key]}}</th>
            </tr>
        </tbody>
        
    </table>
</div>
</template>

<script>

export default{ 
    name:'',
    components:{},
    props:{
        headers : {
            type : Array,
            default : function () {
                return []
            }
        },
        items : {
            type : Array,
            default : function () {
                return []
            },
            checkedItems : [],

        },
    },
    data(){
        return{
            sampleData:'',
            SelectedDate: 'all',
            checkedItems: [],
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        diffChange () {
            console.log(this.SelectedDate)
            this.$emit("diff-change", this.SelectedDate)
            this.checkedItems = []
        },
        selectedCheck(){
            console.log(this.items)
            this.$emit( 'change-item', this.checkedItems)
        }
    }
}
</script>