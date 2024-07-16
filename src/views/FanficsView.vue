<script setup lang="ts">

import router from "@/router";
import {useCurrentFanficView} from "@/stores/counter";

let Fanfics= [{
  id: 1,
  title: 'Лидер группировки Симэн Жуков.',
  description: 'Бывший наёмник предводительницы Миры. Поступил на службу в штурмовой отряд "Рейдоров Рейнара" После отправлен на Чар для несение службы и дальнейшим захватом планеты.',
  image: "/src/components/icons/Zhukov.jpg",
},
{
  id: 2,
  title: 'Заместитель лидера группировки Евгений Рогонов. Позывной "Джин"',
  description: 'В прошлом много пил и употреблял наркотические вещества. Был женат на женщине пожилого возраста, вскоре после смерти супруги пропил всё имущество, и пошел на фронт в надежде заработать славу и кредитов.',
  image: "/src/components/icons/Rogonov.png",
},
{
  id: 3,
  title: 'Владислав Чушпанов.\n' +
      'Третий и бесстрашный член группировки "Адские псы"',
  description: 'В прошлом много пил и употреблял наркотические вещества. Был женат на женщине пожилого возраста, вскоре после смерти супруги пропил всё имущество, и пошел на фронт в надежде заработать славу и кредитов.',
  image: "/src/components/icons/Vlad.jpg",
},
{
  id: 4,
  title: 'Даниил Гнездоволыкин.\n' +
      '4й и не последний член группировки "Адские псы""',
  description: 'В прошлом много пил и употреблял наркотические вещества. Был женат на женщине пожилого возраста, вскоре после смерти супруги пропил всё имущество, и пошел на фронт в надежде заработать славу и кредитов.',
  image: "/src/components/icons/ALkash.jpg",
},
{
  id: 5,
  title: 'Илья Чухан.\n' +
      '5й член отряда "Адские псы"',
  description: 'В прошлом много пил и употреблял наркотические вещества. Был женат на женщине пожилого возраста, вскоре после смерти супруги пропил всё имущество, и пошел на фронт в надежде заработать славу и кредитов.',
  image: "/src/components/icons/LOH.jpg",
},
  {
    id:6,
    title: "Дарья Андерсон.\n" +
        "6й член отряда \"Адские псы\"",
    description: "Глава исследовательской группы изучение ДНК зергов.\n" +
        "Перед началом высадки на Чар, Дарья Андерсон посетила исследовательскую лабораторию на Геперионе. Где взяла образец Пси-Излучателя, после этого направившись в бар. В баре она встретила: Владислава Чушпанова и Евгения Рогонова.",
    image: "/src/components/icons/TP.jpg",
  }
]



</script>

<template>
<div v-for="Fanfic in Fanfics" :key="Fanfic.id" @click="router.push('/FanficInstanceView'); useCurrentFanficView().$state = {id: Fanfic.id}" id="FanficsView" >
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
#FanficsView {
  :hover{
    cursor: pointer;
  }
}
</style>