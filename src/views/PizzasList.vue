<template>
  <div>
    <h1>Pizzas Listing</h1>
    <div class="grid">
    <PizzaCard v-for="pizza in pizzas" :key="pizza.id" :pizza="pizza" />
    </div>
  </div>
</template>

<script>
import PizzaCard from '@/components/PizzaCard.vue';
import ListService from '@/services/ListService';
export default {
    components: {
    PizzaCard
  },
  data() {
    return {
      pizzas: []
    }
  },
  created() {
    ListService.getPizzas()
    .then(r => {
      this.pizzas = r.data
    })
    .catch(error => console.error(error.message))
  }
}
</script>

<style>
.grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1px;
}
@media (min-width: 600px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 900px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
</style>