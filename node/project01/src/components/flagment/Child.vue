<template>
<div>
    <DeepChild :deepChildData=ChildData />
</div>
</template>

<script>
import DeepChild from './DeepChild.vue';

export default{ 
    name:'',
    components:{DeepChild},
    props:{
        ChildData:String
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
