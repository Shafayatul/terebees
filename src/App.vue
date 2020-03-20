<template>
  <div id="app">
    <!-- <div class="preloader-wrap flex align-center justify-center">
      <div class="preloader flex">
        <div class="dash uno" /><div class="dash dos" /><div class="dash tres" /><div class="dash cuatro" />
      </div>
    </div> -->
    <component  :is="layout" >
    <Header />

    <router-view />

    <Footer />
    </component>
  </div>
</template>
<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  
 
  export default{
    name: 'App', 
    components: {    
      Header,
      Footer
    },
    data() {
      return {
         layout: 'div'
      }
    },
    watch:{
        $route (){
            window.$router = true;
        }
    },   
    created(){
       let htmlEl=document.querySelector("html");
        htmlEl.setAttribute('dir','rtl');
        htmlEl.setAttribute('lang','fa');
        if (htmlEl) {
          return true;
        } else {
          return false;
        }
      },
      changeRTL () {
        this.$vuetify.rtl = true
      },
  }
</script>
<style scoped>