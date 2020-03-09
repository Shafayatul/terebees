<template>
  <div id="app">
    
    <!-- <div class="preloader-wrap flex align-center justify-center">
			<div class="preloader flex"><div class="dash uno"></div><div class="dash dos"></div><div class="dash tres"></div><div class="dash cuatro"></div></div>
		</div> -->
    
		<Header />

    <router-view/>

    <Footer />

  </div>
</template>
<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  
 
  export default{
    name: 'app',   
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
    components: {    
      Header,
      Footer

    },
    watch:{
        $route (){
            window.$router = true;
        }
    }

  }
</script>
<style scoped>

