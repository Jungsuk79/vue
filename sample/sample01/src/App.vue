<template>
  <div id="app">
    <HeaderContent />
    <FooterContent />
  </div>
</template>

<script>
import "./assets/css/reset.css";
import "./assets/css/common.css";
import HeaderContent from './components/HeaderContent.vue';
import FooterContent from './components/FooterContent.vue';

export default {
  name: 'App',
  components: {
    HeaderContent,
    FooterContent
  },
}
</script>