import React,{Component} from "react";

import UserService from "../service/UserService";

export default class ViewProduct extends Component{

    constructor(props) {
        super(props)
 
        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }
    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render(){
        return(
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">  Flight Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Flight Id: </label>
                            <div> { this.state.user.id }</div>
                        </div>
                        <div className = "row">
                            <label> Flight Name </label>
                            <div> { this.state.user.name }</div>
                        </div>
                        <div className = "row">
                            <label> From </label>
                            <div> { this.state.user.from }</div>
                        </div>
                        <div className = "row">
                            <label> To </label>
                            <div> { this.state.user.to }</div>


                           
            <hr></hr>
            <br></br>
            <br></br>
            <form className="Details">

                <label for ="class"  name="class">Choose a class:</label>
                <select id="class" name="class">
                    <option
                    value="Economy">Economy</option>
                    <option value="Business">Business</option>
                </select>
               <button className=" btn-primary" onClick={this.getUser}> Book Flight</button>
   </form>
                        </div>
                        
                    </div>
                </div>
            </div>

        );
    }
}