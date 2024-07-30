<script setup lang="ts">

import {useCurrentTaps} from "@/stores/counter";
</script>

<template>
  <section>
    <div class="container-xxl">
      <h1>Тапай ежа</h1>
    </div>
  </section>

  <section>
    <div class="container-xxl">
      <div class="row">
        <div class="col-8" id="zxc">
          <div style="background-image: url('/src/components/icons/bdc9d9c5a5527749.png'); background-repeat: no-repeat; width: 500px; height: 500px; pointer-events: auto " @click="useCurrentTaps().baseTap" />
        </div>
          <div class="col-2">
            <button type="button" class="btn btn-primary" @click="useCurrentTaps().upgrade_beer()">Купить пива</button>
            <button type="button" class="btn btn-primary" @click="useCurrentTaps().upgrade_vodka()">Купить водки</button>
            <button type="button" class="btn btn-primary" @click="useCurrentTaps().upgrade_mushrooms()">Купить грибов</button>
            <button type="button" class="btn btn-primary" @click="useCurrentTaps().upgrade_snakes()">Купить змею</button>
            <button type="button" class="btn btn-primary" @click="useCurrentTaps().upgrade_hedgehogs()">Купить ежа</button>
            <button type="button" class="btn btn-primary" @click="useCurrentTaps().upgrade_tapers()">Купить тапера</button>
          </div>
        <div class="col-2">
            <h5>Цена пива: {{useCurrentTaps().beer_cost}}</h5>
            <h5>Цена водки: {{useCurrentTaps().vodka_cost}}</h5>
            <h5>Цена грибов: {{useCurrentTaps().mushrooms_cost}}</h5>
            <h5>Цена змей: {{useCurrentTaps().snakes_cost}}</h5>
            <h5>Цена ежей: {{useCurrentTaps().hedgehogs_cost}}</h5>
            <h5>Цена таперов: {{useCurrentTaps().tapers_cost}}</h5>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container-xxl">
      <h1>Количество ёж коинов: {{useCurrentTaps().taps}}</h1>
    </div>
  </section>
</template>

<style scoped>
#zxc{
  :hover{
  cursor: pointer;
  }
}
section{
  margin-bottom: 5vh;
}
button{
  margin-bottom: 3vh;
}
h5{
  margin-bottom: 4vh;
}
img{
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}


</style>