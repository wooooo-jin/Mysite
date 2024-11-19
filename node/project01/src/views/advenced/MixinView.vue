<template>
<div>
    <h1>Mixin</h1>
</div>
</template>
<script>
//import Formatter from '@/mixins/formatter'
//import Axios from '@/mixins/axios'


export default{ 
    name:'',
    components:{},
  //mixins : [Formatter, Axios],
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){
        console.log(Date('20241119'))
        //console.log(Date('20241119').getFullYear())
        //console.log(this.convertDateFormat('20241119', 'YYYY년MM월DD'))
        console.log('created of view')
    },
    mounted(){},
    unmounted(){},
    methods:{
            $convertDateFormat(date, format){
            let year = '' 
            let month = '' 
            let day =''
            '20241119'
            if(typeof date==='string' && date.length === 8){
                year = date.substring(2,4)
                month = date.substring(4,6)
                day = date.substring(6,8)
            }else if (typeof date === 'object') {
                year =date.getFullYear()
                month = (date.getMonth() +1).toString().padStart(2,0)
                day = (date.getDay() +1).toString().padStart(2,0)
            }
        return format.replace('YYYY', year).replace('MM',month).replace('DD',day)
        },
        async getCustomers() {
            const customres = await this.$get('http://localhost/3000')
            console.log(customres)
        }
    }
}
</script>