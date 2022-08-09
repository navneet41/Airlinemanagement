import React,{Component} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminService from "../service/AdminService";


const SIZES = ["xs", "sm", "lg", "2x", "3x", "5x", "7x", "10x"];

export default class Admin extends Component{
    /*The constructor () is invoked before the component is mounted. In the constructor, we have declared our 
    state variables and bind the different methods so that they are accessible from the state inside of the render() method.
    */
    constructor(props){
        super(props)

        this.state={admin:[]};

        this.deleteAdmin=this.deleteAdmin.bind(this);
        this.viewAdmin=this.viewAdmin.bind(this);
        this.addAdmin=this.addAdmin.bind(this);
        this.editAdmin=this.editAdmin.bind(this);
      
 
        
    }
    componentDidMount(){
        AdminService.getAdmin().then((response) => {
            this.setState({admin:response.data});
    });

}
deleteAdmin(id){
    AdminService.deleteAdmin(id).then((response) => {
        this.setState({admin:this.state.admin.filter(admin => admin.id !== id)});

});
}
viewAdmin(id){
    this.props.history.push(`/viewAdmin/${id}`);
}
addAdmin(id){
    this.props.history.push('/addAdmin/_add');
}
editAdmin(id){
    this.props.history.push(`/addAdmin/${id}`);
}




    render(){
        return(
            <div>
                <h1 className = "text-center"><span style={{fontWeight:'bold',color:"greenyellow"}}> Flight Details </span></h1>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addAdmin}> Add Flight</button>
                 </div>

                 <br></br>
                 <div className="row">
                <table className = "table table-striped  table-dark  ">
                    <thead>
                        <tr>
 
                            <td> Flight Id</td>
                            <td> Flight Name</td>
                            <td> From</td>
                            <td> To</td>
                            <td> Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admin.map(
                                adm =>
                                <tr key={adm.id}>
                                <td> {adm.id} </td>
                                <td> {adm.name} </td>

                                <td> {adm.from} </td>
                                <td> {adm.to} </td>
                                <td>
                                <button className="btn btn-success" onClick={() => this.editAdmin(adm.id)}>
                                    <span>
                                    <FontAwesomeIcon icon="edit"></FontAwesomeIcon>
                                    </span>
                                    </button>
                                    &nbsp;
                                
                                    <button className="btn btn-danger" onClick={() => this.deleteAdmin(adm.id)}>
                                    <span>
                                    <FontAwesomeIcon icon="trash"></FontAwesomeIcon>
                                </span>
                            </button>
                            &nbsp;
                            <button className="btn btn-info" onClick={() => this.viewAdmin(adm.id)}>
                                    <span>
                                    <FontAwesomeIcon icon="list"></FontAwesomeIcon>
                                    </span>
                                    </button>
                                </td>

                            </tr>
                            )   
                            
                        }
                                            
                </tbody>
                </table>
                </div>
 
            </div>


        );
    }

}
