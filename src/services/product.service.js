import axios from 'axios';
import { API_URL } from "../config/const";

class ProductService {
    getProducts (filter) {
        return axios.get(API_URL, filter).then(res =>{
            return res;
        });
    }

}
export default new ProductService();