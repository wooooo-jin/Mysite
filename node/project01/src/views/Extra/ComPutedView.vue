<template>
<div>
    <div>
    <p> {{title}} / {{date}} / {{create}} </p>
    <p>{{ totalText }}</p>
    </div>
    <div>
        <input type="text" v-model.number="age">
        <p>{{ age >=20 ? '성인' : '미성년자' }}</p>
        <p>{{ isAdult }}</p>
    </div>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            title:'computed란 무엇인가?',
            date:'2024.11.13',
            create:'d',
            age: '0',
        };
     },
        computed:{
            totalText(){
                return this.title + " / " + this.date + " / " + this.create
            },
            isAdult(){
                return this.age >=20 ? '성인' : '미성년자' //데이터가 this.age의 "값이" 변하면 스스로 감지해서 뿌려줌 매서드는 호출 되었을때
            },
        },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>