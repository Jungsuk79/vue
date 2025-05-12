<template>
    <div class="container">
        <h1>vue 세팅</h1>
        <p class="sub_title">프로그램 세팅</p>
        <ol>
            <li>1. node.js 설치 : <span>node.js 설치 후 터미널에서 명령어 입력</span></li>
            <li>2. vue 설치 : <span>터미널에서 명령어 입력 npm install vue</span></li>
            <li>3. vue cli 설치 : <span>터미널에서 명령어 입력 npm install -g @vue/cli</span></li>
            <li>4. vue 프로젝트 생성 : <span>터미널에서 명령어 입력 vue init webpack 프로젝트명</span></li>
            <li>5. 프로젝트 실행 : <span>터미널에서 명령어 입력 npm run dev</span></li>
        </ol>
        <p class="sub_title">추가 설치</p>
        <ol>
            <li>1. 비동기 페이지를 위한 필수 router 설치 : <span>터미널에서 명령어 입력 npm install vue-router</span></li>
            <li>2. Axios를 이용한 http 통신 : <span>터미널에서 명령어 입력 npm install axios</span></li>
            <li>3. 데이터 바인딩을 위한 필수 vuex 설치 : <span>터미널에서 명령어 입력 npm install vuex</span></li>
        </ol>
    </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
        
    }
  }
  
}
</script>

<style scoped>
    ul li a {
        color: #000;
    }
</style>