<template>
<div>
    <!-- <input type="search" name="" id="" v-model="searchText" 
    @keyup="checkEnter($event)"/> -->
    <input type="search" name="" id="" v-model="searchText"
    @keyup.enter="startSearch" />
    <button @click="startSearch">Search</button>

    <button type="submit" @click.prevent="startSearch">버튼</button>
    <br />
    <br />
    <h1>{{ searchText2 }}</h1>
    <div>
    <input type="radio" name="" id="" @click.prevent='preventClick'>
    <img src="cat-2858293_1280.jpg" style="width:500px; height:auto;"
    @contextmenu.prevent = '' />
</div>
  <div style='width: 200px; height: 200px;' @click="parenteClick" class='parent'>
        <div style='background-color: red;' @click.stop="childClick" class='child'></div>
    </div>
</div>
</template>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            searchText:'hello World',
            searchText2: '', 
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        startSearch() {
            this.searchText2 = this.searchText
        },
        preventClick(){
            alert("클릭금지")
        },

        checkEnter(event){
            if(event.keyCode === 13){
                this.startSearch()
            }
        },
        parenteClick(){
            console.log('부모택의 이벤트 발생!!!')

        },
        childClick(){
            console.log('자식태그')
        }
    }
}
</script>
<style scoped>
.parent {
    border: 1px solid blue; display: inline-block;
}
.child {
    width: 50px; height: 50px; margin: 20px;
}
</style>
