import axios from 'axios'
const baseUrl = 'https://bld-events-api.herokuapp.com/api/events'

const getAll = async() => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getAll }