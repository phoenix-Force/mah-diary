<template>
<div>
      <div class="containte">
         <nav-head></nav-head>
      </div>
      <div class="containte">
        <page-container></page-container>
      </div>
      <div class="containte">
          <page-foot></page-foot>
      </div>

  </div>


</template>
<script>
import Header from "./shared/Header.vue"
import Footer from "./shared/Footer.vue"
import Container from "./server/container.vue"
export default {
  components:{
    navHead:Header,
    pageFoot:Footer,
    pageContainer:Container

  }
}
</script>

<style scoped>

</style>
