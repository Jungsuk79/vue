<template>
  <div class="container mt-3">
    <div class="btn-group" role="group" aria-label="Basic example">
      <button class="btn btn-primary" v-on:click="inputData">데이터 입력</button>
      <button class="btn btn-secondary" v-on:click="getData">데이터 조회</button>
    </div>
    <form>
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
    </form>
    <div class="mt-3"> 
      <table class="table">
        <caption>회원 목록</caption>
        <colgroup>
          <col style="width: 10%">
          <col style="width: 40%">
          <col style="width: 50%">
        </colgroup>
        <thead class="thead-dark">
          <tr>
            <th scope="col">번호</th>
            <th scope="col">이름</th>
            <th scope="col">이메일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members" :key="member.id">
            <td>{{ member.id }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import './assets/css/reset.css';
import axios from 'axios';

export default {
  data() {
    return {
      members: [],
      name: "",
      email: "",
    }
  },
  methods: {
    inputData() {
        axios.post("http://localhost:3000/members",{
        name:"fff",
        email:"fgg@gmail.com"
      })
      .then(() => {
        console.log("데이터 입력 성공!!");
      })
      .catch(() => {
        console.log("서버에 이상이 있습니다.");
      })
    },
    getData() {
      axios.get("http://localhost:3000/members")
      .then(res => {
        this.members = res.data;
      })
      .catch(() => {
        console.log("서버에 이상이 있습니다.");
      })
    }
  }
}

</script>