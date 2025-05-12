<template>
    <div class="container">
      <div>
        <h2>{{ classTitle }}</h2>
        <p class="sub_title">vue에서 지주 사용하는 문법을 정리하겠습니다.</p>
        <dl>
          <dt>1. v-text, v-html, v-bind 디렉티브</dt>
          <dd>
            둘다 텍스트를 반환하는 디렉티브이다. <br />
            v-text는 텍스트를 반환하고, v-html은 html을 반환한다. <br />
            * 하지만 v-html은 보안상 권장하지 않는다.
            <div class="ex_type">
              <p v-text="text1"></p>
            </div>
            <div class="ex_type">
              <p v-html="html1"></p>
            </div>
            <div class="ex_type">
              <img :src="imgSrc" alt="" />
            </div>
          </dd>
        </dl>
        <dl>
          <dt>2. v-model ,v-on:input 디렉티브</dt>
          <dd>
            양방향 데이터 바인딩이 가능하다. <br />
            즉, 데이터가 변경되면 화면이 자동으로 변경된다. <br />
            * 영문이나 숫자는 괜찮은데, 한글에서 바로 안바뀌는 문제가 있어서 이럴때는 v-on:input 디렉티브를 사용한다.
            <div class="ex_type">
              <p>1) v-model 디렉티브</p>
              <input type="text" v-model="inputText" />
              <p>{{ inputText }}</p>
            </div>
            <div class="ex_type">
              <p>2) v-on:input 디렉티브</p>
              <input type="text" v-on:input="inputTextChange" />
              <p>{{ inputText2 }}</p>
            </div>
          </dd>
        </dl>
        <dl>
          <dt>3. v-show, v-if 디렉티브</dt>
          <dd>
            v-show는 조건에 따라 요소를 보여줄지 숨길지 결정한다. <br />
            v-if는 조건에 따라 요소를 보여줄지 숨길지 결정한다. <br />
            * v-show는 불러오지만 화면에 나타나지 않는 요소를 보여줄 때 사용한다. 화면에 자주변경되는때 사용한다.<br />
            * v-if는 조건에 따라 요소를 보여줄지 숨길지 결정한다. 그래서 조건에 안맞으면 아예 화면에 나타나지 않는다. <br />
            <div class="ex_type">
              <div class="tab_wrap">
                <div class="tab_area">
                  <button type="button"
                   v-for="(tab,index) in tabs"   
                   v-on:click="tabMenuClick(index)"
                   :key="index" 
                   :class="{'active': tabMenu === index}"
                  >
                    {{ tab.menu }}
                  </button>
                </div>
                <div class="tab_area_con" v-show="tabMenu === 0">
                  111
                </div>
                <div class="tab_area_con" v-show="tabMenu === 1">
                  222
                </div>
                <div class="tab_area_con" v-show="tabMenu === 2">
                  333
                </div>
              </div>
            </div>
            <div class="ex_type">
              <button type="button" class="btn btn-primary" @click="showIf = !showIf">if 토글버튼</button>
              <p class="box_area" v-if="showIf">if가 true일때 나오는는 영역입니다.</p>
              <p class="box_area" v-else>if가 false일때 나오는 영역입니다.</p>
            </div>
          </dd>
        </dl>
        <dl>
          <dt>4. emit , props 이용해서 데이터 전달</dt>
          <dd>
            하위 컴포넌트에서 상위 컴포넌트로 데이터를 전달할 때 사용한다. <br />
            * 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때는 props를 사용한다. <br />
            * 하위 컴포넌트에서 상위 컴포넌트로 데이터를 전달할 때는 emit을 사용한다. <br />
            <div class="ex_type">
              <BaseTab 
              :baseTab="baseTab" 
              :currentTab="currentTab"
              v-on:click="tabMenuClick"
               />
              <div class="tab_area_con" v-if="currentTab === 0">
                탭 컨텐츠 1입니다
              </div>
              <div class="tab_area_con" v-if="currentTab === 1">
                탭 컨텐츠 2입니다
              </div>
              <div class="tab_area_con" v-if="currentTab === 2">
                탭 컨텐츠 3입니다
              </div>
            </div>
          </dd>
        </dl>
      </div>

    </div>
</template>
  
<script>
import BaseTab from '../components/base/BaseTab.vue';

export default {
  name: 'StudyClass01',
  components: {
    BaseTab
  },
  data() {
    return {
      classTitle:"Vue 문법",
      text1:"텍스트",
      html1:"<p>p테그로 감싼 html</p>",
      inputText:"",
      inputText2:"",
      imgSrc:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      showIf:true,
      tabMenu: 0,
      tabs:[
        {
          menu:"탭메뉴01",
        },
        {
          menu:"탭메뉴02",
        },
        {
          menu:"탭메뉴03",
        }
      ],
      currentTab: 0,
      baseTab:[
        {name:"탭메뉴2_01"},
        {name:"탭메뉴2_02"},
        {name:"탭메뉴2_03"},
      ]
    }
  },
  methods: {
    inputTextChange(e) {
      this.inputText2 = e.target.value;
    },
    tabMenuClick(index) {
      this.currentTab = index;
    }
  }
}

</script>
  
<style scoped>
  dl {
    margin-top: 10px;
  }
  dl dt {
    font-weight: bold;
  }
  dl dd {
    margin-top: 10px;
  }
  .ex_type {
    margin-top: 10px;
  }
  .box_area {
    border:1px solid #000;
    padding:10px;
    margin-top:10px;
    background-color: #f0f0f0;
  }
  .tab_wrap .tab_area {
    display: flex;
    border:1px solid #000;
    border-bottom:none;
    margin-bottom:0;
  }
  .tab_wrap .tab_area button {
    padding:10px;
    background-color: #f0f0f0;
    flex-grow: 1;
    text-align: center;
    border-left:1px solid #000;
    border-bottom:1px solid #000;
  }
  .tab_wrap .tab_area button:first-child {
    border-left:none;
  }
  .tab_wrap .tab_area button.active {
    background-color: #fff;
    border-bottom:1px solid #fff;
  }
  .tab_wrap .tab_area_con {
    border:1px solid #000;
    border-top:none;
    padding:10px;
  }

  .tab_area_con {
    border:1px solid #ddd;
    border-top:none;
    padding:20px;
  }
</style>