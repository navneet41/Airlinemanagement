import React,{Component} from "react";

import AdminService from "../service/AdminService";

export default  class CreateAdmin extends Component{

    constructor(props) {
        super(props)

 

        this.state = {
            
            id: this.props.match.params.id,
            name: '',
            from: '',
            to:''
            
        }
        this.saveOrUpdateAdmin=this.saveOrUpdateAdmin.bind(this);
        this.changeNameHandler=this.changeNameHandler.bind(this);
        this.changeFromHandler=this.changeFromHandler.bind(this);
        this.changeToHandler=this.changeToHandler.bind(this);
    }
    componentDidMount(){
        
        if(this.state.id === '_add'){
            return
        }else{
            AdminService.getAdminById(this.state.id).then( (response) =>{
                let admin = response.data;
                this.setState({name: admin.name,
                    from: admin.from,
                    to : admin.to
                    
                });
            });
        }        
    }


    saveOrUpdateAdmin = (p) => {
        p.preventDefault();
        let admin = {name: this.state.name, from: this.state.from,to:this.state.to};
        console.log('admin => ' + JSON.stringify(admin));

        
        if(this.state.id === '_add'){
            AdminService.createAdmin(admin).then(response =>{
                this.props.history.push('/admin');
            });
        }else{
            AdminService.updateAdmin(admin, this.state.id).then( response => {
                this.props.history.push('/admin');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

 

    changeFromHandler= (event) => {
        this.setState({from: event.target.value});
    }

 

    changeToHandler= (event) => {
        this.setState({to: event.target.value});
    }

    cancel(){
        this.props.history.push('/admin');
    }

 

    getTitle(){
        if(this.state.id === '_add'){
            return <h1 className="text-center">Add Flight</h1>
        }else{
            return <h1 className="text-center">Update Flight</h1>
        }
    }
    render(){
        return(

            <div >
                <br></br>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                
                                <div  className = "card-body"  >
                                    <form>
                                        <div  className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Flight Name" name="nameame" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> From: </label>
                                            <input placeholder=" From" name="from" className="form-control" 
                                                value={this.state.from} onChange={this.changeFromHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> To: </label>
                                            <input placeholder="To" name="to" className="form-control" 
                                                value={this.state.to} onChange={this.changeToHandler}/>
                                        </div>
                                        
                                        <div class="card-footer">
 

                                        <button className="btn btn-success" onClick={this.saveOrUpdateAdmin}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

 
                
                   </div>

            </div>

        );
    }
 
}

