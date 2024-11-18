<template>
<div>
    <ChildVue />
</div>
</template>

<script>
import ChildVue from '../../components/flagment/Child.vue';
import DeepChildVue from '../../components/flagment/DeepChild.vue';

export default{ 
    name:'',
    components:{ChildVue, DeepChildVue},
    provide(){
        return{
            deepChildData: "새로운문자"
        }
    },
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>