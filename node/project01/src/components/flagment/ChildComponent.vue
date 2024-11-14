<template>
<div>
    <p>{{ str }}</p>
    <p>{{ num }}</p>
    <p>{{ bool }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>
    <select name="" id="" @change="callparent" v-model="selectedNum">
        <option :value="n" :key="n" v-for="n in arr">{{ n }}</option>
    </select>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    props:{
        str : {
            type:String,
            default : ""
        },

        num : {
            type:Number,
            default : 0
        },

        bool : {
            type:Boolean,
            default : true
        },

        arr : {
            type:Array,
            default: function() {
                return []
            }
        },

        obj : {
            type:Object,
            default: function() {
                return {}
            }
        },

    },
    data(){
        return{
            sampleData:'',
            selectedNum: 0
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        callparent(){
            this.$emit('change-num', this.selectedNum)
        }
    }
}
</script>