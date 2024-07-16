<script setup lang="ts">
import {useCurrentFanfic} from "@/stores/counter";

let Fanfics= [{
  id: 1,
  title: 'Лидер группировки Симэн Жуков.',
  description: 'Бывший наёмник предводительницы Миры. Поступил на службу в штурмовой отряд "Рейдоров Рейнара" После отправлен на Чар для несение службы и дальнейшим захватом планеты.',
  image: "/src/components/icons/Zhukov.jpg",
},

]

import router from "@/router";


</script>

<template>
<div v-for="Fanfic in Fanfics" :key="Fanfic.id" @click="router.push('/FanficsView'); useCurrentFanfic().$state = {id: Fanfic.id}" id="FanficsView" >
  <div class="card mb-3 w-75 mx-auto">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="Fanfic.image" class="img-fluid rounded-start w-100" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body" >
          <h5 class="card-title">{{Fanfic.title}}</h5>
          <p class="card-text">{{Fanfic.description}}</p>
          <p class="card-text"><small class="text-body-secondary">Последнее обновление 3 мин. назад</small></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>