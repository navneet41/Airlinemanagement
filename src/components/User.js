import React,{Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import UserService from "../service/UserService";

const SIZES = ["xs", "sm", "lg", "2x", "3x", "5x", "7x", "10x"];
export default class User extends Component{

    constructor(props){
        super(props)

        this.state={user:[]};

        this.viewUser=this.viewUser.bind(this);
}
componentDidMount(){
    UserService.getUser().then((response) => {
        this.setState({user:response.data});
});
}

viewUser(id){
    this.props.history.push(`/viewUser/${id}`);
}


render(){
    return(
    
        <div>

            <h1 className = "text-center"><span style={{fontWeight:'bold',color:"dark"}}> Search Flight
            
             </span></h1>

             <form className="Search">
             <input type="text" placeholder="Flight name" name="search"></input>
                
                <input type="text" placeholder="From" name="search"></input>
                <input type="text" placeholder="To"   name="search"></input>
                <label for="Date"></label>
                <input type="date" id="date" name="date"></input>
                <button className=" btn-primary" onClick={this.getUser}> Search Flight</button>

              <hr></hr>   
             <br></br>
             <div className="row">
            <table className = "table table-striped  table-dark   ">
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
                        this.state.user.map(
                            use =>
                            <tr key={use.id}>
                            <td> {use.id} </td>
                            <td> {use.name} </td>

                            <td> {use.from} </td>
                            <td> {use.to} </td>
                            <td>
                            <button className="button"   name="Book"  type="button" onClick={() => this.viewUser(use.id)}>Book</button>
                        </td>
                        </tr>
                        )   
                        
                    }
                                        
            </tbody>
            </table>
            

            
            </div>
</form>
        </div>
        


   );
}

}




