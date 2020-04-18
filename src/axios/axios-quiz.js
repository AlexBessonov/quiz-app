import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-af3b7.firebaseio.com/'
})