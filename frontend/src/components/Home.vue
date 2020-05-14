<template>
    <div class="home">
        <div>
        <b-nav small>
            <b-nav-item>Sobre</b-nav-item>
            <b-nav-item>Autor</b-nav-item>
            <b-nav-item>Projetos</b-nav-item>
            <b-nav-item>Atualizações</b-nav-item>
        </b-nav>
        </div>
        <div>
            <b-row class="principal" align-v="center">
                <h1 class="text-center">Animal Crossing Pocket API</h1>
            </b-row>
        </div>
        <div  class="bv-example-row">
        <b-container class="bv-example-row">
            <b-row class="search">
                <h2 class="text-center">Animal Crossing Pocket API</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                took a galley of type and scrambled it to make a type specimen book.
                </p>
            </b-row>
            <div class="labels">
                <b-badge pill variant="primary">Primary</b-badge>
                <b-badge pill variant="secondary">Secondary</b-badge>
                <b-badge pill variant="success">Success</b-badge>
                <b-badge pill variant="danger">Danger</b-badge>
                <b-badge pill variant="warning">Warning</b-badge>
                <b-badge pill variant="info">Info</b-badge>
                <b-badge pill variant="light">Light</b-badge>
                <b-badge pill variant="dark">Dark</b-badge>
            </div>
            <div class="pesquisa text-left">
                <label for="basic-ur">Your vanity URL</label>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon3">https://example.com/produto/</span>
                    </div>
                    <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
            </div>
            <div class="botoes">
                <b-button>Ver Imagem associada</b-button>
                <b-button>Ver ficha</b-button>
            </div>
            <div class="result text-left">
                <pre>
                    <code>&lt;p&gt;Sample text here...&lt;/p&gt;
                    &lt;p&gt;And another line of sample text here...&lt;/p&gt;
                    </code>
                </pre>
            </div>
            <div class="row about-card">
                <div class="col-4">
                    <h6>Primeiro</h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div class="col-4">
                    <h6>Primeiro</h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div class="col-4">
                    <h6>Primeiro</h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </b-container>
        </div>
        <footer>
            <p>Giovana do Nascimento</p>
        </footer>
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
  margin: 2.5rem 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0.625rem;
}
a {
  color: #42b983;
}
.badge{
    padding: 0.625rem;
    margin: 0.625rem
}
.nav.small{
  align-items: center;
  background-color: white;
  font-size: 1rem;
  height: 4.375rem;
}
.principal{
    background-image: url("https://attackofthefanboy.com/wp-content/uploads/2020/03/Animal-Crossing-New-Horizons-When-does-Night-Start.jpg");
    color: aliceblue;
    height:16.25rem;
    justify-content: center;
    background-size: 100%;
}
.search{
    margin-top: 2.5rem;
    justify-content: center;
    background-color: white;
}
.labels{
    margin: 0.625rem;
}
.bv-example-row{
    background-color: white;
}
.pesquisa {
    padding-bottom: 0.625rem;
}
.botoes .btn{
    margin: 0.625rem  0rem  0.625rem  0.625rem;
}
.botoes{
    display: flex;
    justify-content: flex-end;
}
.result{
    background-color: black;
}
pre{
    padding-top:  1.25rem ;
    color:white;
}
.about-card{
    margin-top:  2.5rem ;
    background-color: white;
    padding-bottom:  2.5rem ;
}
footer{
    padding: 1.25rem;
    background-color: darksalmon;
}
</style>
