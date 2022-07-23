import axios from "axios";

export default{
    getData(endpoint){
        let url = endpoint;
        return axios.get(url);
    }
}