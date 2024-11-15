<template>
<div>
    <h1>Parent Component</h1>
    <br />
    <br />
    <br />
    <h2>{{ receivedData }}</h2>
    <h2>{{ childData }}</h2>
    <button @click="changeValue" class="btn btn-danger">ChildData</button>
    <div>
        <Child 
        str="star" 
        :num= 10 
        :bool= false
        :arr = parentArray 
        @change-num="getData"
        @child-send='getCildData'
        ref = "child"
        />
    </div>
</div>
</template>
<script>
import ChildComponentVue from '@/components/flagment/ChildComponent.vue';

export default{ 
    name:'',
    components:{'Child' : ChildComponentVue},
    data(){
        return{
            parentNumber:10,
            parentArray:[1,2,3],
            data:{},
            receivedData : '',
        }
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        getData(data){
            console.log("getData 함수호출");
            console.log(data);
        },
        getCildData(data){
            this.receivedData = data
        },
        changeValue(){
            this.$refs.child.childData = "해당 데이터는 변경되었습니다."
            this.$refs.child.childPrint()
        }
    }
}
</script>