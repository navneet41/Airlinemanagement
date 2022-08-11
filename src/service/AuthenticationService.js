import axios from 'axios'; // For API calls, we will be using Axios 

const API_URL=' http://localhost:8085/ims/api/dealer';
const API_URL1=' http://localhost:8085/ims/api/dealers';


 class Authenticationservice{

    loginDealer(dealer){

        return axios.post(API_URL,dealer);


    }
    paymentDealer(dealer){
        return axios.post(API_URL1, dealer);
       }
}
export default new Authenticationservice();