<template>
<div>
    <div>
    <input type="text" name="" id="" v-model="yourName">
    </div>
    <div>
        <p>{{ yourName }}</p>
    </div>
    <div>
        <p>{{ selected }}</p>
    </div>
    <div>
        <select v-model="selected">
            <option value="A">A</option>
            <option value="B">B</option> 
        </select>
    </div>
</div> 
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            yourName:'',
            selected:'',
            selectedHistory:[],
        };
    },
    watch:{
    yourName(newValue, oldVlaue){
        console.log('oldVlaue :', oldVlaue)
        console.log('newValue :', newValue)
    },
    selected(newValue){
        this.selectedHistory.push(newValue);
        console.log(this.selectedHistory);
        }        
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>