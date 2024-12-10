<template>
<div>
    <div>
      <form @submit="postUser">
        <fieldset>
          <legend>사용자 등록</legend>
          <div><input v-model="newUser.name" type="text" placeholder="이름"></div>
          <div><input v-model="newUser.age" type="number" placeholder="나이"></div>
          <div><input v-model="newUser.married" type="checkbox" id="married"><label for="married">결혼 여부</label></div>
          <button type="submit">등록</button>
        </fieldset>
      </form>
    </div>
    <table>
    <thead>
        <th>아이디</th>
        <th>이름</th>
        <th>나이</th>
        <th>결혼여부</th>                        
    </thead>
    <tbody>
        <tr v-for="user in users" :key="user.id" >
        <td>{{ user._id }}</td>
        <td>{{ user.name }}</td>    
        <td>{{ user.age }}</td>        
        <td>{{ user.married ? "기혼" : "미혼" }}</td>
        </tr>
    </tbody>
</table>
<br>
<form @submit.prevent="postComment">
    <fieldset>
        <legend>댓글등록</legend>
    <div>
        <input v-model="newComment.userid"  type="text" placeholder="사용자 아이디">
    </div>
    <div>
        <input v-model="newComment.comment" type="text" placeholder="댓글">
    </div>    
    <button type="submit">등록</button>
    </fieldset>
    </form>
    <br>    
    <table id="comment-list">   
    <thead>
      <tr>
        <th>아이디</th>
        <th>작성자</th>
        <th>댓글</th>
        <th>수정</th>
        <th>삭제</th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="comment in comments" :key="comment.id">
        <td>{{ comment.id }}</td>
        <td>{{ comment.User.name }}</td>
        <td>{{ comment.comment }}</td>
        <td><button @click="patchComment(comment.id)">수정</button></td>
        <td><button @click="deleteComment(comment.id)">삭제</button></td>
      </tr>
      </tbody>
    </table>    

    <div>
    <form @submit.prevent="searchComment(searchUser)">
    <fieldset>
        <legend>댓글검색</legend>
        <div>
          <input type="text" v-model="searchUser" placeholder="아이디 검색" required>
        </div>
         <button>검색</button>
    </fieldset>
    </form>
    </div>
</div>
</template>

<script>
import axios from"axios"

export default{ 
    name:'',
    components:{},
    data(){
        return{
            newUser:{
                name:'',
                age: null,
                married: false,
            },
            users: [],
            newComment : {
                userid :'',
                comment : '',
            }  ,
            comments:[],
            searchUser:'',
        };
    },
    setup(){},
    created(){
        // this.getComments()
    },
    mounted(){
        this.getUsers()
    },
    unmounted(){},
    methods:{
        //사용자 조회(get)
        async getUsers(){
            try{
                const response = await axios.get("http://localhost:3000/user");
                console.log(Response);
                this.users = response.data;
                console.log(response.data)
            }catch(err){
                console.error(err);
            }
        },
        // 사용자 등록
        async postUser(){   // || 또는
            if (!this.newUser.name || !this.newUser.age){
                alert("이름과 나이를 입력하셔야됩니다.")
                return;  // try로 가지않고 끊어주기 위해서 사용
            }
            try{
            //response 방법 서버쪽에서 정렬을 해준다. 서버에서 response 데이터를 준비해준다.
            //     const response = await axios.post('http://localhodt:3000/user', this.newUser); //요청을 받은 값을 axios.post는 서버로 데이터를 전달 하는게 끝
            //     this.users = response.data; //user
            //     this.newUser = {new:'', age: null, married:flase} // 초기화 시켜줘야 다시 새로운 값을 받으니 초기화로 비워준다.
                await axios.post('http://localhost:3000/user', this.newUser); //요청을 받은 값을
                this.getUser();
                this.newUser = {new:'', age: null, married:flase} // 초기화 시켜줘야 다시 새로운 값을 받으니 초기화로 비워준다.
            }catch(err){
                console.error(err);
            }
        },
        // 댓글 조회(get)
        async getComments(){
            try{
                const response = await axios.get('http://localhost:3000/comment'); // get요청
                console.log('response',response)
                this.comments = response.data;
            }catch(err){
                console.error(err)
            }
        },
        // 댓글 등록(psot)
        async postComment(){
            if (!this.newComment.userid || !this.newComment.comment){
                alert("사용자의 아이디와 댓을을 입력해");
                return;
            }
            try{
                console.log('postcomment start')
                const response = await axios.post('http://localhost:3000/comment', this.newComment)
                this.getComments()
                this.newComment = {userid:'', comment: ''}
            }catch(err){
                console.error(err)
            }
        },
        // 댓글 수정
        async patchComment(commentId) {
            const newText = prompt("바꿀내용 입력해");
            if(!newText){
                alert("바꿀 댓글을 입력해");
                return;
            }
            try{
                await axios.patch(`http://localhost:3000/comment/${commentId}`, {text: newText}); //텍스트 수정
                this.getComments();
            }catch(err){
                console.log(err);
            }
        },
        // 댓글 삭제
    async deleteComment(commentId){
        try{
            await axios.delete(`http://localhost:3000/comment/${commentId}`);
            this.getComments();
        }catch (err){
            console.log(err);
        }
    },
    // 특정 id comment 조회
    async searchComment(userId){
        try{
            console.log('search start')
            const response = await axios.get(`http://localhost:3000/user/${userId}/comments`);
            console.log('search end')
            this.comments = response.data;
            this.searchUser = ''
        }catch(err){
            console.error(err);
        }
    },

    }
}
</script>
<style>
table {
  border: 1px solid black;
  border-collapse: collapse;
}
table th,
table td {
  border: 1px solid black;
  padding: 5px;
}
</style>