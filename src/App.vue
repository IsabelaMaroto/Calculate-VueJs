<template>
  <header class="header">
    <img src="./assets/img/Logo.png" class="logo">
  </header>
  <section class="home">
    <div class="form">
    <h1 class="label-title">Cálculo do IMC</h1>
    <h2 class="label-subtitle">Digite seu peso e altura para calcular o IMC</h2>
    
    <div class="div-imc">
      <span class="p-float-label">
        <InputText id="input-weight" type="number" v-model="weight" v-bind:disabled="imc"/>
        <label for="input-weight">Peso</label>
    </span>
    </div>

    <div class="div-imc">
      <span class="p-float-label">
        <InputText id="input-weight" type="number" v-model="height" v-bind:disabled="imc"/>
        <label for="input-weight">Altura</label>
      </span>
    </div>

    <div class="div-imc" v-if="!imc">
      <ButtonApp label="Calcular" @click='calculate' class="button-calculate" v-bind:disabled="height == null && weight == null"/>
      <ButtonApp label="Limpar" @click="clear"/>
    </div>

    <div v-if="imc">
      <p class="label-result">Seu IMC é: {{ imc }}</p>
      <p class="label-classification">A classificação do seu IMC é: <strong>{{ classification }}</strong></p>
      <ButtonApp label="Calcular novamente" @click='clear' />
    </div>
    </div>
    <div class="image-box">
      <img src="./assets/img/undraw_workout_gcgu.png" class="image"/>
    </div>
  </section>
  
 
</template>

<script>
export default {
  data(){
    return{
      height: null,
      weight: null,
      imc: null,
      classification: ""
    }
  },
  methods: {
    calculate: function() {
      this.imc = (this.weight /  (this.height * this.height)).toFixed(2)
      if(this.imc < 18.5){
        this.classification = "Magreza";
      } else if(this.imc >= 18.5 && this.imc < 25){
        this.classification = "Normal";
      } else if (this.imc >= 25 && this.imx < 30){
        this.classification = "Sobrepeso";
      } else if(this.imc >=30 && this.imc < 40){
        this.classification = "Obesidade";
      } else{
        this.classification = "Obesidade Grave";
      }
    },
    clear(){
      this.height= null,
      this.weight= null,
      this.imc= null,
      this.classification= ""
    }
  }
}
</script>

<style>
body{
  margin: 0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header{
  display: flex;
  background-color: #0A4274;
  height: 4rem;
  padding: 0 2rem;
  align-items: center;
}
.logo{
  height: 3rem;
}
.home{
  display: flex;
  justify-content: space-evenly;
  padding: 7rem 0;
}
.form{
  background-color: #E9EAEC;
  max-height: 35rem;
  max-width: 25rem;
  padding:2.5rem;
  border-radius: 1rem;
  border: 0.1rem solid #2F4054;
  margin-left: 5rem;
}
.div-imc{
  margin-top: 2rem;
}
.label-title{
  font-size: 2rem;
}
.label-subtitle{
  font-size: 1.1rem;
}
.label-result{
  font-size: 2rem;
}
.label-classification{
  font-size: 1rem;
}
.button-calculate{
  margin-right: 1rem !important;
}
.image{
  height: 28rem;
}

@media (max-width: 1000px) {
  .home{
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  }
  .form{
    margin: 0;
  }
  .image{
  height: 19rem;
}
}
</style>
