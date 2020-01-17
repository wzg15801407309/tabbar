<!--  -->
<template>
 <div class="box">
      <div class="box-item1 item">box-item</div>
      <div class="box-item2 item">box-item</div>
      <div class="box-item3 item">box-item</div>
      <div class="box-item4 item">box-item</div>
      <div class="box-item5 item">box-item</div>
      <div class="box-item1 item">box-item</div>
      <div class="box-item2 item">box-item</div>
      <div class="box-item3 item">box-item</div>
      <div class="box-item4 item">box-item</div>
      <div class="box-item5 item">box-item</div>
      <div class="box-item1 item">box-item</div>
      <div class="box-item2 item">box-item</div>
      <div class="box-item3 item">box-item</div>
      <div class="box-item4 item">box-item</div>
      <div class="box-item2 item">box-item</div>
      <div class="box-item3 item">box-item</div>
      <div class="box-item4 item">box-item</div>
      <div class="box-item2 item">box-item</div>
    </div>
</template>

<script>
export default {
components: {},
data () {
return {}
},
computed: {},
watch: {},
methods: {},
created() {},
mounted() {},
}
</script>
<style lang='less' scoped>
  .box{
    width: 800px;
    height: 800px;
    background: saddlebrown;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-content: space-evenly;
  }
  .item{
    width: 100px;
    height: 100px;
    text-align: center
  }
  .box-item1{
    border: 4px solid darkgoldenrod;
  }
  .box-item2{
    border: 4px solid purple;
  }
  .box-item3{
    border: 4px solid yellowgreen;
  }
  .box-item4{
   border: 4px solid gold;
   flex-grow: 1;
  }
  .box-item5{
    border: 4px solid red;
  }  
</style>
