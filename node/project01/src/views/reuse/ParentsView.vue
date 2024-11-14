<template>
<div>
    <h1>Parent Component</h1>
    <div>
        <Child 
        str="star" 
        :num= 10 
        :bool= false
        :arr = parentArray 
        @change-num="getData"
        
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
            parentArray:[1,2,3]
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        getData(data){
            console.log("getData 함수호출");
            console.log(data);
        }
    }
}
</script>