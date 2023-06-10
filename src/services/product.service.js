import axios from 'axios';
import { API_URL } from "../config/const";

class ProductService {
    /**  
     *get data with page parameters
     *  @limit
     *  @skip
    */
    getProducts (filter) {
        return axios.get(API_URL, { params: filter }).then(res =>{
            return res;
        });
    }
    /**
     * 
     * @param {*} queryStr 
     * @returns 
     */
    searchProducts (queryStr) {
        console.log(API_URL+"/search?q="+ queryStr)
        return axios.get(API_URL+"/search?q="+ queryStr).then(res =>{
            return res;
        });
    }
}
export default new ProductService();