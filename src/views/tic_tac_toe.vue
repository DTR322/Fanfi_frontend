<script setup lang="ts">

let items = [{
  id: 1,
  message: 'крестик'
},
    {
  id: 2,
  message: 'крестик'
},
    {
  id: 3,
  message: 'крестик'
},
    {
  id: 4,
  message: 'нолик'
},
    {
  id: 5,
  message: 'нолик'
},
    {
  id: 6,
  message: 'нолик'
},
    {
  id: 7,
  message: 'крестик'
},
    {
  id: 8,
  message: 'крестик'
},
    {
  id: 9,
  message: 'крестик'
},
]
</script>

<template>

  <div class="tic_tac_toe">
    <div class="game_field">
      <p v-for="item in items" :key="item.id">{{item.message}} </p>
    </div>
  </div>

</template>

<style scoped>
.tic_tac_toe{
  width: min(60vw, 100% - 40vw);
  margin-inline: auto;
}

.game_field{
  height: 30vw;
  background-color: mediumspringgreen;
  width: min(30vw, 100%);
  border-radius: 5%;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);

}

.game_field p:nth-child(3n){
  border-right: none
}

.game_field p:nth-child(-n+3){
  border-top: none
}

.game_field p:nth-child(3n+1){
  border-left: none;
}

.game_field p:nth-child(n+7):nth-child(-n+9){
  border-bottom: none;
}


p{
  margin: 0;
  padding: 1vw;
  border: 1px black solid;
}


</style>