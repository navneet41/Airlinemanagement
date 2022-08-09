import axios from 'axios';

 const ADMINS_REST_API_URL='http://localhost:8085/ims/api/products'; 

class AdminService {
    getAdmin(){
        return axios.get(ADMINS_REST_API_URL)
    }

    deleteAdmin(adminId){
        return axios.delete(ADMINS_REST_API_URL+'/'+adminId);
    }
    getAdminById(adminId){
        return axios.get(ADMINS_REST_API_URL+'/'+adminId);
    }
    createAdmin(admin){
        
        return axios.post(ADMINS_REST_API_URL, admin);
    }
 
    updateAdmin(admin, adminId){
        return axios.put(ADMINS_REST_API_URL + '/' + adminId, admin);
    }


    

}
export default new AdminService();