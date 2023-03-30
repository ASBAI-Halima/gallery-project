<template>
  <div class="details">
    <div class="event-card -shadow">
      <img :src="pizza.imageUrl" alt="pizza image" />
      <h4 class="title">{{ pizza.name }}</h4>
      <h3>Ingredients:</h3>
      <p>{{ pizza.description}}</p>
    </div>
  </div>
</template>

<script>
import ListService from '@/services/ListService'
export default {
    props: ['id'],
  data() {
    return {
      pizza: {}
    }
  },
  created() {
    ListService.getPizza(this.id)
    .then(response => this.pizza = response.data)
    .catch(error => {console.log(error.response)})
  }
}
</script>

<style scoped>
.details {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.event-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 600px;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
}

.event-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.title {
  margin-top: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
}

p {
  margin-top: 16px;
  font-size: 18px;
  line-height: 1.5;
  color: #666;
  text-align: justify;
}
</style>