<template>
<div id="container">
  <left-menu></left-menu>
  <div class="col-sm-8">

  </div>

</div>

</template>
<script>
import leftMenu from "../server/left_menu.vue"
export default {
  components:{
    leftMenu : leftMenu
  }

}
</script>
<style scoped>
  #container{

    height:800px;
  }
</style>
