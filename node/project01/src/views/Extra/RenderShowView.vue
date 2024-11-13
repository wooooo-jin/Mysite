<template>
<div>
    <p>당신이 가장 좋아하는 프로선수는 누구입니까?</p>
    <input type="radio" name="" id="one" value='t1' v-model="selectedPlayer">
    <label for="">1. 대상혁</label>
        <input type="radio" name="" id="two" value='gen' v-model="selectedPlayer">
    <label for="">2. 쵸비</label>
        <input type="radio" name="" id="three" value='kt' v-model="selectedPlayer">
    <label for="">3. 비디디</label>
        <input type="radio" name="" id="four" value='dam' v-model="selectedPlayer">
    <label for="">4. 쇼메</label>
        <input type="radio" name="" id="five" value='other' v-model="selectedPlayer">
    <label for="">5. 기타</label>
    <!-- <input type="text" v-if="selectedPlayer === 'other'" > -->
    <input type="text" v-show="selectedPlayer === 'other'" >

</div>
</template>

<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            selectedPlayer:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>