<script setup lang="ts">
function changeBackgroundColor(colorStr: string): void {
  document.body.style.backgroundColor = colorStr
}


import router from "@/router";
</script>

<template>
  <header>
  <nav class="navbar bg-body-tertiary" data-bs-theme="light">
    <div class="container-xxl">
      <router-link @click="changeBackgroundColor('white')" to="/GuidesView" class="navbar-brand">Гайды по stellaris</router-link>
      <router-link @click="changeBackgroundColor('white')" to="/FanficsView" class="navbar-brand">Фанфики</router-link>
      <router-link @click="changeBackgroundColor('white')" to="/HedgehogCombat" class="navbar-brand">Ёж комбат</router-link>
      <router-link @click="changeBackgroundColor('white')" to="/tic_tac_toe" class="navbar-brand">крестики-нолики PvP</router-link>
      <router-link @click="changeBackgroundColor('lightgray')" to="/BlackJack" class="navbar-brand me-auto">Блек-джек</router-link>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
        <button class="btn btn-outline-success" type="submit">Поиск</button>
      </form>
      <img class="ms-xxl-5" src="/src/components/icons/person.svg" alt="" id="profile_img" @click="router.push('/ProfileView'); changeBackgroundColor('white')" style=":hover{cursor: pointer;}"/>
    </div>
  </nav>
  </header>

  <router-view/>
</template>

<style scoped>
header{
  margin-bottom: 10vh;
}

</style>
