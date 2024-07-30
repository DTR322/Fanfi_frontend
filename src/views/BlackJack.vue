<script setup lang="ts">

onload = function (){
  document.body.style.backgroundColor = 'lightgray'
}

let cards = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5}


]

</script>

<template>

<div class="BlackJackCard" v-for="card in 6" :key="card" :style="{ 'left': card * 100 - 375 + 'px', 'rotate': -45 + card * 15 + 'deg',
 'background-image': 'url(' + '/src/assets/cards/'+ (1 + card) +'_бубны.png' + ')'} ">
{{card}}
</div>



</template>

<style>
.BlackJackCard{
  background-color: #0b5ed7;
  width: 310px;
  height: 450px;
  position: fixed;
  bottom: 0;
  margin-left: 43%;
  margin-right: 43%;
  left: 0;
  rotate: -45deg;
}

</style>