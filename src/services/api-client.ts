import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'db720109491a4904a504aecd27cb585f', 
    }
})

export interface FetchResponse<T>{
    count: number;
    results: T[];
}