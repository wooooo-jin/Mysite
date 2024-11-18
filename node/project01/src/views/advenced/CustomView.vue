<template>
<div>
    <div>
        <label for="email" class="form-label">이메일주소</label>
        <input type="email" id="email" class="form-control" v-focus/>
    </div>
    <div>
        <label for="pw" class="form-label"> 비밀번호 </label>
        <input type="password" id="pw" class="form-control"/>
    </div>
    <div>
        <label for="pw" class="form-label"> 전화번호 </label>
        <input type="password" id="pw" class="form-control"/>
    </div>
    <div>
        <input type="text" v-number/> - <input type="text" v-number/> - <input type="text" v-number/>
    </div>
    <div>
        <button class="btn btn-primary">로그인</button>
    </div>
</div>
</template>

<script>
export default{ 
    name:'',
    components:{},
    directives:{
     focus : {
        mounted(el, binding) {
            el.focus()
        }
     },
    number : {
         mounted(el){
            el.addEventListener('input', (event) => {
                 event.target.value = event.target.value.replace(/\D/g,"")
            })
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
}
</script>