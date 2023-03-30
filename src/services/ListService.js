import axios from 'axios'

const apiPizza = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
})
export default {
    getPizzas() {
      return apiPizza.get('/pizzas')
    },
    getPizza(id) {
      return apiPizza.get(`/pizzas/${id}`)
    },
  }