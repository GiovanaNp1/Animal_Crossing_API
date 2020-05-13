<template>
  <div class="home">
    <div>
      <b-nav small>
        <b-nav-item>Sobre</b-nav-item>
        <b-nav-item>Autor</b-nav-item>
        <b-nav-item>Projetos</b-nav-item>
      </b-nav>
    </div>
    <div class="search">
        <h1>Animal Crossing Pocket API</h1>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home{
    height: 1176px;
}
.nav.small{
  height: 70px;
  align-items: center;
  font-size: 16px;
  background-color: burlywood;
}
.search{
    background-size: 100%;
    color: aliceblue;
    background-image: url("https://attackofthefanboy.com/wp-content/uploads/2020/03/Animal-Crossing-New-Horizons-When-does-Night-Start.jpg");
    height:254px;
}
</style>
