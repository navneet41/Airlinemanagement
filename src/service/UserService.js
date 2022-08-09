import axios from 'axios';

const USERS_REST_API_URL='http://localhost:8085/ims/api/products'; 

class UserService{
    getUser(){
        return axios.get(USERS_REST_API_URL)
    }
    getUserById(userId){
        return axios.get(USERS_REST_API_URL+'/'+userId);
    

}
}

export default new UserService();