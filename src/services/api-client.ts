import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ef1d10a2bc9741f680b0a19af1fa377c', 
    }
})