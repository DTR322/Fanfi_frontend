<script setup lang="ts">

import router from "@/router";

let guides = [{
  id: 1,
  title: "новый патч в stellaris",
  description: "это очень интересный патч"
},
{
  id: 2,
  title: "Новый патч в хойке",
  description: "это обзор нового патча"
},
{
  id: 3,
  title: "Как контролить флот для чайников hoi 4",
  description: "Это гайд по контролю флота"
}
]

</script>

<template>
  <div v-for="guide in guides" :key="guide.id">
    <div class="card w-75 mb-3 mx-auto p-2">
      <div class="card-body">
        <h5 class="card-title">{{guide.title}}</h5>
        <p class="card-text">{{guide.description}}</p>
        <a href="#" class="btn btn-primary" @click="router.push('/GuideInstanceView')">Кнопка</a>
      </div>
    </div>
  </div>

</template>

<style scoped>
</style>