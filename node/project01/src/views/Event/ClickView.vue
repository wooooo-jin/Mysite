<template>
<div>
    <p>Count : {{num}}</p>
    <button v-on:click="addCount">Add</button>
    <button @click="minusCount">Add</button>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            num: 0,
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        addCount() {
            this.num += 1
        },
        minusCount() {
            this.num -= 1
        },      
    }
}
</script>