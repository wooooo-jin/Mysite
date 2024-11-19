import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers ['Content-Type'] = 'application/json:charset=utf-8'
axios.defaults.headers ['Access-Control-Allow-Orgin'] = '*'

export default {
    data(){
        return {

        }
    },
    method: {
        async $get(url) {
            return axios.get(url).catch( (e) =>{
                console.log(e)
            }).data
            
        },
        async $post(url, data) {
            return await axios.post(url, data).catch( (e) =>{
                console.log(e)
            })
        },
        async $put(url, data) {
            return await axios.put(url, data).catch( (e) =>{
                console.log(e)
            })
        },
        async $delete(url, data) {
            return await axios.delete(url, data).catch( (e) =>{
                console.log(e)
            })
        }
    }
}