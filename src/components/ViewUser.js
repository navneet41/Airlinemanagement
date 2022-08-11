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
            <div className="e-card-image" >
                <br></br>
                <div  className = "card col-md-8 offset-md-3">
                    <h3 className = "text-center">  Flight Details</h3>
                    <div className = "card-body">
                        <div className = "column">
                            <label> Flight Id: </label>
                            <div> { this.state.user.id }</div>
                        </div>
                        <div className = "column">
                            <label> Flight Name: </label>
                            <div> { this.state.user.name }</div>
                        </div>
                        <div className = "column">
                            <label> From: </label>
                            <div> { this.state.user.from }</div>
                        </div>
                        <div className = "column">
                            <label> To :</label> 
                            <div> { this.state.user.to }</div>
                            <hr></hr>
                            <hr></hr>
                             <br></br>                          
                            <div>
                        <div class="card-body-1" >
                            
                        <h5 class="card-title">Business Class</h5>
                    <p class="card-text"> Business price:-Rs25,000<br></br>
                <hr></hr>
                <label for="passengerno">Number of passenger</label>
                <select name="passengerno" id="passengerno">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    </select>
                    </p>

                    <div class="card-footer">
                    <button className=" btn-primary" onClick={this.getUser}> Book Flight</button>
                    
                    </div>
                
                    </div>
                    </div>
                    <br></br>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    
                    
                    <div>
                        <div class="card-body-2">
                            <h5 class="card-title">Economy Class</h5>
                <p class="card-text"> Economy price:-Rs7,000<br></br>
                <hr></hr>
                <label for="passengerno">Number of passenger</label>
                <select name="passengerno" id="passengerno">
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="five">5</option>
                    </select>
                    </p>
                    <div class="card-footer">
                    <button className=" btn-primary" onClick={this.getUser}> Book Flight</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>                   
                        </div>
                        </div>
                    

                    );
                }
            }