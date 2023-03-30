<template>
 <router-link
    class="event-link"
    :to="{ name: 'pizza-details', params: { id: pizza.id } }"
  >
    <div class="event-card -shadow">
       <img :src="pizza.imageUrl" alt="pizza image" /> 
      <span class="eyebrow">{{ pizza.name }}</span>
      <h4 class="title">{{ pizza.price }}$</h4>
    </div>
   </router-link>
</template>

<script>
export default {
    props: {
        pizza: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>


.event-link {
  text-decoration: none;
}

.event-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

.event-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.eyebrow {
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
}

.title {
  margin-top: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #f44336;
}




</style>