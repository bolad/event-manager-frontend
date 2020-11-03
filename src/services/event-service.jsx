import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/events'

const getAll = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getEvent = async(id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

export default { getAll, getEvent }