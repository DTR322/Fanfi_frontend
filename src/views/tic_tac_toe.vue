<script setup lang="ts">

import {ref} from "vue";

let default_items = [{
  id: 0,
  message: '',
  field: 'null',
},
    {
  id: 1,
  message: '',
  field: 'null',
},
    {
  id: 2,
  message: '',
  field: 'null',
},
    {
  id: 3,
  message: '',
  field: 'null',
},
    {
  id: 4,
  message: '',
  field: 'null',
},
    {
  id: 5,
  message: '',
  field: 'null',
},
    {
  id: 6,
  message: '',
  field: 'null',
},
    {
  id: 7,
  message: '',
  field: 'null',
},
    {
  id: 8,
  message: '',
  field: 'null',
},
]

let items = ref([{
  id: 0,
  message: '',
  field: 'null',
},
    {
  id: 1,
  message: '',
  field: 'null',
},
    {
  id: 2,
  message: '',
  field: 'null',
},
    {
  id: 3,
  message: '',
  field: 'null',
},
    {
  id: 4,
  message: '',
  field: 'null',
},
    {
  id: 5,
  message: '',
  field: 'null',
},
    {
  id: 6,
  message: '',
  field: 'null',
},
    {
  id: 7,
  message: '',
  field: 'null',
},
    {
  id: 8,
  message: '',
  field: 'null',
},
])

let current_turn = ref(0);


const game_click = (id: number) =>{
  if (items.value[id].field == "null"){
    current_turn.value++;
    if (current_turn.value % 2 == 1){
    items.value.splice(id, 1, {id: id, message: "+", field: 'cross'})
    }
    else{
      items.value.splice(id, 1, {id: id, message: "", field: 'zero'})
    }
    if (current_turn.value == 9){
      current_turn.value = 0;
      items.value = default_items
    }

    if ((items.value[0].field == 'cross' && items.value[1].field == 'cross' && items.value[2].field == 'cross') ||
        (items.value[3].field == 'cross' && items.value[4].field == 'cross' && items.value[5].field == 'cross') ||
        (items.value[6].field == 'cross' && items.value[7].field == 'cross' && items.value[8].field == 'cross') ||
        (items.value[0].field == 'cross' && items.value[4].field == 'cross' && items.value[8].field == 'cross') ||
        (items.value[2].field == 'cross' && items.value[4].field == 'cross' && items.value[6].field == 'cross') ||
        (items.value[0].field == 'cross' && items.value[3].field == 'cross' && items.value[6].field == 'cross') ||
        (items.value[0].field == 'cross' && items.value[3].field == 'cross' && items.value[6].field == 'cross') ||
        (items.value[1].field == 'cross' && items.value[4].field == 'cross' && items.value[7].field == 'cross') ||
        (items.value[2].field == 'cross' && items.value[5].field == 'cross' && items.value[8].field == 'cross') )
    {
      setTimeout(() => {alert('победили крестики'); items.value = default_items.slice(0, 9)}, 500);
      current_turn.value = 0;
    }





    if ((items.value[0].field == 'zero' && items.value[1].field == 'zero' && items.vxalue[2].field == 'zero') ||
        (items.value[3].field == 'zero' && items.value[4].field == 'zero' && items.value[5].field == 'zero') ||
        (items.value[6].field == 'zero' && items.value[7].field == 'zero' && items.value[8].field == 'zero') ||
        (items.value[0].field == 'zero' && items.value[4].field == 'zero' && items.value[8].field == 'zero') ||
        (items.value[2].field == 'zero' && items.value[4].field == 'zero' && items.value[6].field == 'zero') ||
        (items.value[0].field == 'zero' && items.value[3].field == 'zero' && items.value[6].field == 'zero') ||
        (items.value[0].field == 'zero' && items.value[3].field == 'zero' && items.value[6].field == 'zero') ||
        (items.value[1].field == 'zero' && items.value[4].field == 'zero' && items.value[7].field == 'zero') ||
        (items.value[2].field == 'zero' && items.value[5].field == 'zero' && items.value[8].field == 'zero') )
    {
      setTimeout(() => {alert('Победили нолики'); items.value = default_items.slice(0, 9)}, 500);
      current_turn.value = 0;
    }




  }
  else {
    alert('поле занято')}
}

</script>

<template>

  <div class="tic_tac_toe">
    <div class="game_field">
      <div v-for="item of items" :key="item.id" @click="game_click(item.id)"  class="tic_tac">
        <div :class="{zero: item.field == 'zero', cross: item.field == 'cross'}">
          {{item.message}}
        </div>
      </div>
    </div>
    <div class="players">
      <h2>Игроки онлайн</h2>
      <hr>
    </div>
  </div>

</template>

<style scoped>
.tic_tac_toe{
  width: min(60vw, 100% - 40vw);
  margin-inline: auto;
  display: grid;
  grid-template: repeat(6, 10vw) /  repeat(2, 30vw);
}

hr{
  margin-bottom: 100%;
  border-top: 4px solid black;
}

h2{
  margin-top: 15%;
  text-align: center;
}

.players{
  width: min(20vw, 100%);
  margin-left: auto;
  background-color: #01d8fe;
  height: 30vw;
  border-radius: 5%;
  display: grid;
}

.game_field{
  height: 30vw;
  background-color: mediumspringgreen;
  width: min(30vw, 100%);
  border-radius: 5%;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
}

.game_field div.tic_tac:nth-child(3n){
  border-right: none
}

.game_field div.tic_tac:nth-child(-n+3){
  border-top: none
}

.game_field div.tic_tac:nth-child(3n+1){
  border-left: none;
}

.game_field div.tic_tac:nth-child(n+7):nth-child(-n+9){
  border-bottom: none;
}


.tic_tac{
  margin: 0;
  padding: 1vw;
  border: 1px black solid;
}

.zero{
  width: min(5vw, 100%);
  margin-inline: auto;
  height: 5vw;
  border: 5px solid red;
  border-radius: 100%;
  margin-top: 2.5vh;
  &:hover{
    cursor: pointer;
  }
}

.cross{
  text-align: center;
  transform: rotate(45deg);
  font-size: 5vw;
  color: blue
}
</style>