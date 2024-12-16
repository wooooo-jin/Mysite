<template>
<div class="timeline">
    <form id="join-form" @submit.prevent="join">
        <div class="input-group">
            <label for="join-email">e-mail</label>
            <input id="join-email" type="email" v-model="joinData.email" required/>
        </div>
        <div class="input-group">
            <label for="join-snsID">snsID</label>
            <input id="join-snsID" type="text" v-model="joinData.snsid" required/>
        </div>
        <div class="input-group">
            <label for="join-Password">Password</label>
            <input id="join-Password" type="Password" v-model="joinData.password" required/>
        </div>
        <div class="input-group">
            <label for="join-cpw">Confirm Pw</label>
            <input id="join-cpw" type="Password" v-model="confirmPassword" required/>
            <p v-if="confirmPassword && confirmPassword !== joinData.password" class="error-msg">비밀번호가 틀립니다.</p>
        </div>
        <div class="input-group">
            <label for="join-nic">nickname</label>
            <input id="join-nic" type="text" v-model="joinData.nick"/>
        </div>
        <div class="input-group">
            <label for="join-phone">phone Number</label>
            <input id="join-phone" type="text" v-model="joinData.phone" required/>
        </div>
        <button id="join=btn" type="submit" class="btn">회원가입</button>
    </form>

</div>
</template>


<script>
import axios from "axios"



export default{ 
    name:'JoinComponent',
    components:{},
    data(){
        return{
            joinData: {  //데이너는 백엔드에 전달하는 데이터.
                snsid:'',
                password:"",
                email:'',
                phone:'',
                nick:'', 
            },
            confirmPassword :''     //내가 전달할 필요가 없는 데이터

        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{
        async join(){
            if (this.joinData.password !== this.confirmPassword){
                alert('비밀번호가 틀립니다. 돌아가')
                return 
            }
            try {
                await axios.post("http://localhost:3000/auth/join", this.joinData);
                alert("회원가입이 완료되었습니다.")
                await axios.get("http://localhost:3000/")
            }catch(err){
                console.error(err);
                if (err.response && err.response.data.error === "exist"){
                    alert("이미 존재하는 회원정보입니다.")
                } else {
                    alert("회원가입중 오류가 발생하였습니다. 나중에 다시 시도해 주십시오.")
                }
            }
        }
    },
    computed:{},
    watch:{}
}
</script>
<style scoped>
.error-msg{
    color:red;
    font-size:20px;
}
.timeline {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.input-group {
  margin-bottom: 15px;
}
.input-group label {
  display: block;
  margin-bottom: 5px;
}
.input-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
.btn:hover {
  background-color: #0056b3;
}
</style>