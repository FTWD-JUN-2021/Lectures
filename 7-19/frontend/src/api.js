/**WHERE WE DO ALL OF OUR BACKEND CONNECTIONS */

import axios from 'axios'

console.log(process.env)

const serverUrl = process.env.NODE_ENV === 'production' ? '' : `http://localhost:5000/api`


const actions = {
    addPost: async (post) => {
        let res = await axios.post(`${serverUrl}/add-post`, post)
        return res
    },
    getAllPosts: async (post) => {
        return await axios.get(`${serverUrl}/all-the-posts`)
    }
}

export default actions