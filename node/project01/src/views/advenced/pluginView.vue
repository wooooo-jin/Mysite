<template>
<div> 
    <p>{{$t('Hello',{name : userName})}}</p> <!-- $t 는 해당 문법에 맞는 언어로 바꿔주는 역할 -->
    <p>{{$t('Welcome',) }}</p>
    <p>{{$t('language')}}</p>

    <button @click="changeLanguage('ko')">한국어</button>
    <button @click="changeLanguage('en')">English</button>
    <button @click="changeLanguage('es')">Spanish</button>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            userName: 'ㄱㅇㅈ'
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        changeLanguage(lang){
            this.$i18n.locale =lang;
        }
    }
}
</script>