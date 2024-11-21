<template>
<div>
    <div>{{ todos }}</div>
    <p>{{ todosCount }}</p>
    <p>{{ donetodosCount }}</p>
    <p>{{ notDonetodosCount }}</p>
    <p>{{ isLoginCheck }}</p>
    <button @click="addItem">추가</button>
    <button @click="removeItem(4)">삭제</button>
    <button @click="doneYN({id:1, done:false})">Change</button>
    <button @click="removeAll">스토리지 삭제</button>
</div>
</template>

<script>

export default{ 
    name:'',
    components:{},
    data(){ 
        return{
            sampleData:''
        };
    },
    computed:{
        todos(){
            return this.$store.state.todo.todos
        },
        todosCount() {
            return this.$store.getters['todo/todosCount'];
        },
        donetodosCount(){
            return this.$store.getters['todo/donetodosCount'];
        },
        notDonetodosCount(){
            return this.$store.getters['todo/notDonetodosCount'];
        },
        isLoginCheck(){
            return this.$store.state.todo.loginUser
        },
    },
    setup(){},
    created(){},
    mounted(){
        this.$store.commit('todo/setUserInfo')
    },
    unmounted(){},
    methods:{
        addItem(){
           this.$store.commit('todo/add', {id:4, title:'할일 4', done: false})
        //    /this.$store.dispatch('add',{id:4, title:'할일 4', done: false})
        },
        removeItem(id){
            this.$store.commit('todo/remove', id)
        },
        doneYN(doneState){
            this.$store.commit('todo/doneYN', doneState)
        },
        removeAll(){
            this.$store.commit('todo/removeAll')
        }
    }
}
</script>