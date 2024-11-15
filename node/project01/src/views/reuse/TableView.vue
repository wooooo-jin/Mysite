<template>
<div> 
    <button class="btn btn-primary" @click="doSearch">조회</button>
    <!-- <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>제품번호</th>
                <th>제품명</th>
                <th>제조회사</th>
                <th>가격</th>
            </tr>
        </thead>
        <tbody>
            <tr :key= "i" v-for="(air, i) in humidifier">
                <th>{{ air.Id }}</th>
                <th>{{ air.Name }}</th>
                <th>{{ air.Comp }}</th>
                <th>{{ air.price }}</th>
            </tr>
        </tbody>
    </table> -->
<simpleGridVue 
:headers = "headers"
:items = "humidifier"
/>

</div>
</template>

<script>
import SimpleGridVue from '@/components/flagment/SimpleGrid.vue';

export default{ 
    name:'',
    components:{'SimpleGridVue' : SimpleGridVue},
    data(){
        return{
            humidifier: [],
            headers: [
                {title: "ProductNo", key:'Id'},
                {title: "ProductName", key:'Name'},
                {title: "Company", key:'Comp'},
                {title: "Price", key:'price'},
            ]
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        doSearch () {
            this.humidifier = [{
                    Id: '1',
                    Name: '에어메이드 AMH-9000',
                    Comp: '에어메이드',
                    price: 108000,
                    qty: 0
                },
                                {
                    Id: '2',
                    Name: '한경희 가열 복합식 가습기',
                    Comp: '한경희 생활과학',
                    price: 104000,
                    qty: 0
                },
                                {
                    Id: '3',
                    Name: '아이닉 대용량 타워형 복합식',
                    Comp: '아이닉',
                    price: 119000,
                    qty: 0
                },
                                {
                    Id: '4',
                    Name: '밀리빙 복합식 대용량 가습기 타워형',
                    Comp: '밀리빙',
                    price: 208000,
                    qty: 0
                },
                                {
                    Id: '5',
                    Name: 'LG 하이드로타워 클레이 브라운',
                    Comp: 'LG',
                    price: 1190000,
                    qty: 0
                }]     
        }
    }
}
</script>