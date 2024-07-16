<script setup lang="ts">

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
  <section>
    <div class="container-xxl">
      <div class="row align-items-center">
        <div class="col-3">
          <img src="/src/components/icons/person.svg" alt="здесь должно быть ваше фото" class="w-100">
        </div>
        <div class="col-9">
          <h1>Евгений Рогонов</h1>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container-xxl">
      <div class="row">
        <div class="col-8">
          <label for="exampleDataList" class="form-label">Пример списка данных</label>
            <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Введите для поиска..."/>
          <datalist id="datalistOptions">
            <option value="Москва"/>
            <option value="Санкт-Петербург"/>
            <option value="Брянск"/>
            <option value="Екатеринбург"/>
            <option value="Волгоград"/>
          </datalist>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container-xxl">
      <div class="row">
        <div class="col-8" v-for="Fanfic in Fanfics" :key="Fanfic.id" style="margin-bottom: 2vh">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img :src=Fanfic.image class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{Fanfic.title}}</h5>
                  <p class="card-text"><small class="text-body-secondary">Последнее обновление 3 мин. назад</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section{
  margin-bottom: 5vh;
}
</style>