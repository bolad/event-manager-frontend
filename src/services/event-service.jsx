import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/events'
const baseUrl = 'https://bld-events-api.herokuapp.com/api/events'

const getAll = async() => {
  const response = await axios.get(baseUrl)
  console.log(response.data)
  return response.data
}

const createEvent = async newObject => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export default { getAll, createEvent }