<template>
  <div id="home">
    <div style="width:100%;text-align:center;" @click="jump()" ref="click">click-----</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods:{
      jump(){
          alert(this.$refs.click.innerHTML)
      }
  }
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
