import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useCurrentFanficView = defineStore('current_fanfic_text', () => {
  const id = ref(0)

  return { id }
})


export const useCurrentFanfic = defineStore('cuerrent_fanfic', () => {
  const id = ref(0)

  return { id }
})


export const useCurrentTaps = defineStore('current_taps', () => {
  const taps = ref(0)
  const beer = ref(0)
  const beer_cost = ref(100)
  const vodka = ref(0)
  const vodka_cost = ref(500)
  const mushrooms = ref(0)
  const mushrooms_cost = ref(2000)
  const snakes = ref(0)
  const snakes_cost = ref(10000)
  const hedgehogs = ref(0)
  const hedgehogs_cost = ref(50000)
  const tapers = ref(0)
  const tapers_cost = ref(250000)
  function baseTap(){
    taps.value = taps.value + (beer.value + 1) + vodka.value * 5 + mushrooms.value * 20

  }

  setInterval( function () {
      taps.value = taps.value + 20 * snakes.value + 50 * hedgehogs.value + tapers.value * 200
    }, 1000)

  function upgrade_beer(){
    if (taps.value >= beer_cost.value){
      taps.value = taps.value - beer_cost.value
      beer.value++
      beer_cost.value = Math.floor(beer_cost.value * 1.2)
    }
  }

  function upgrade_vodka() {
    if (taps.value >= vodka_cost.value){
      taps.value = taps.value - vodka_cost.value
      vodka.value++
      vodka_cost.value = Math.floor(vodka_cost.value * 1.3)
    }
  }


  function upgrade_mushrooms(){
    if (taps.value >= mushrooms_cost.value){
      taps.value = taps.value - mushrooms_cost.value
      mushrooms.value++
      mushrooms_cost.value = Math.floor(mushrooms_cost.value * 1.5)
    }
  }


  function upgrade_snakes() {
    if (taps.value >= snakes_cost.value){
      taps.value = taps.value - snakes_cost.value
      snakes.value++
      snakes_cost.value = Math.floor(snakes_cost.value * 1.8)
    }
  }


  function upgrade_hedgehogs() {
    if (taps.value >= hedgehogs_cost.value){
      taps.value = taps.value - hedgehogs_cost.value
      hedgehogs.value++
      hedgehogs_cost.value = Math.floor(hedgehogs_cost.value * 2.2)
    }
  }


  function upgrade_tapers() {
    if (taps.value >= tapers_cost.value){
      taps.value = taps.value - tapers_cost.value
      tapers.value++
      tapers_cost.value = Math.floor(tapers_cost.value * 2.7)
    }
  }



  return {taps, baseTap, upgrade_beer, beer_cost, upgrade_vodka, vodka_cost, mushrooms_cost, upgrade_mushrooms, snakes_cost, hedgehogs_cost, tapers_cost, upgrade_snakes, upgrade_hedgehogs, upgrade_tapers}
})


