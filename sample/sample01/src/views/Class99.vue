<template>
    <div class="container">
      <div>
        설명: 서버연결 및 데이터 조회<br />
        json-server 설치 후 데이터 조회
        json-server --watch db.json --port 3000
      </div>

      <div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-primary" v-on:click="isShow = true">데이터 추가</button>
      </div>

      <form v-show="isShow">
        <div class="input-group mb-2 mt-3">
          <div class="input-group-prepend">
            <label for="username" class="input-group-text">이름</label>
          </div>
          <input type="text" class="form-control" id="username" placeholder="이름을 입력하세요" v-model="name">
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <label for="email" class="input-group-text">이메일</label>
          </div>
          <input type="text" class="form-control" id="email" placeholder="이메일을 입력하세요" v-model="email">
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button class="btn btn-success mr-2" v-on:click="inputData">데이터 저장</button>
          <button class="btn btn-secondary">데이터 삭제</button>
        </div>
      </form>
      
      <div class="mt-3"> 
        <table class="table table-bordered">
          <caption>회원 목록</caption>
          <colgroup>
            <col style="width: 10%">
            <col style="width: 20%">
            <col style="width: 50%">
            <col style="width: 20%">
          </colgroup>
          <thead class="thead-dark">
            <tr>
              <th class="text-center" scope="col">번호</th>
              <th class="text-center" scope="col">이름</th>
              <th class="text-center" scope="col">이메일</th>
              <th class="text-center" scope="col">수정/삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in members" :key="member.id">
              <td class="text-center">{{ member.id }}</td>
              <td class="text-center">{{ member.name }}</td>
              <td>{{ member.email }}</td>
              <td class="text-center">
                <button class="btn btn-sm btn-success mr-2" v-on:click="getEachData(member.id)">수정</button>
                <button class="btn btn-sm btn-danger" v-on:click="deleteData(member.id)">삭제</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'StudyClass01',
  data() {
    return {
      members: [],
      name: "",
      email: "",
      isShow: false,
      member_id: "",
      search: "",
      agree: false,
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async inputData() {
      try {
        if(this.member_id == "") {
          await axios.post("http://localhost:3000/members", {
            name: this.name,
            email: this.email,
          })
        }
        this.isShow = false;
        this.name = "";
        this.email = "";
        this.getData();
        console.log("데이터 호출 완료");
      }
      catch(err) {
        console.log("서버에 이상이 있습니다.");
      }
    },
    async getData() {
      try {
        const res = await axios.get("http://localhost:3000/members");
        this.members = res.data;
        console.log("데이터 가져오기 성공:", this.members);
      }
      catch(err) {
        console.log("데이터 가져오는데 실패:", err);
      }
    },
    async deleteData(id) {
      try {
        await axios.delete("http://localhost:3000/members/" + id)
        console.log("삭제 성공");
        this.getData();
      }
      catch(err) {
        console.log("삭제 실패:", err);
      }
    },
    async getEachData(id) {
      try {
        const res = await axios.get("http://localhost:3000/members/" + id)
        this.member_id = id;  
        this.name = res.data.name;
        this.email = res.data.email;
        this.isShow = true;
        console.log("수정 성공");
      }
      catch(err) {
        console.log("삭제 실패:", err);
      }
    }
  }
}

</script>
  
<style scoped>
    .input-group-prepend .input-group-text {
        min-width: 80px;
    }
    .flex_area {
        display: flex;
        align-items: center;
        gap:10px;
        padding:10px 0;
    }
    .flex_area label {
        cursor: pointer;
        margin-bottom:0;
    }
</style>