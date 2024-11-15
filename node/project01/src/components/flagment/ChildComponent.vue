<template>
<div>
    <p>{{ childData }}</p>
    <p>{{ str }}</p>
    <p>{{ num }}</p>
    <p>{{ bool }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>  
    <select name="" id="" @change="callparent" v-model="selectedNum">
        <option :value="n" :key="n" v-for="n in arr">{{ n }}</option>
    </select>
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
            selectedNum: 0,
            childData : '이데이터는 자식컴포넌트에서 전달된 데이터입니다.'
        };
    },
    setup(){},
    created(){},
    mounted(){
        this.$emit('child-send', this.childData)
    },
    unmounted(){},
    methods:{
        callparent(){
            this.$emit('change-num', this.selectedNum)
        },
        childPrint(){
            console.log(this.childData)
        }
    }
}
</script>