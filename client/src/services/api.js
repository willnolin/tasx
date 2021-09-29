import axios from 'axios'

// const baseURL = process.env.NODE_ENV ? "productionURL(fill in later)" : "http://localhost:3000"const baseURL = process.env.NODE_ENV ? "productionURL(fill in later)" : "http://localhost:3000"
const baseURL = "http://localhost:3000"

const api = axios.create({
  baseURL: baseURL
})

export default api;