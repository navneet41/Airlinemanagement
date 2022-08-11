import React, { Component } from 'react'
import '../style/payment.css'
import AuthenticationService from '../service/AuthenticationService'



export default class Register extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            value:'show',
            
        
            fields: {},
            errors: {}
          }

          
   
          this.handleChange = this.handleChange.bind(this);
          this.paymentDealer = this.paymentDealer.bind(this);  
         
    }
    
    
    
    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
 
      }
   
   
    paymentDealer = (d) => {
       
        d.preventDefault();
       if (this.validateForm()) {
            let fields = {};
            fields["cnumber"] = "";
            fields["cvv"] = "";
            fields["hname"] = "";
            fields["pnumber"]="";
            fields["date"]="";
            this.setState({fields:fields});
            alert("payment Successfull");
       
     d.preventDefault();
        let dealer = {cnumber: this.state.fields.cnumber,cvv: this.state.fields.cvv,
            hname: this.state.fields.hname,pnumber: this.state.fields.pnumber,date: this.state.fields.date};
        console.log('Dealer => ' + JSON.stringify(dealer));
 
        AuthenticationService.paymentDealer(dealer).then(response =>{
            this.props.history.push('/home');
        });
    }
}
validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

   if (!fields["cnumber"]) {
      formIsValid = false;
      errors["cnumber"] = "*Please enter your  card number.";
    }

    if (typeof fields["cnumber"] !== "undefined") {
      if (!fields["cnumber"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["cnumber"] = "*Please enter correct number only.";
      }
    }
    if (!fields["pnumber"]) {
        formIsValid = false;
        errors["pnumber"] = "*Please enter your  Phone  number.";
      }
  
      if (typeof fields["pnumber"] !== "undefined") {
        if (!fields["pnumber"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["pnumber"] = "*Please enter correct number only.";
        }
      }
   

    if (!fields["cvv"]) {
      formIsValid = false;
      errors["cvv"] = "*Please enter your CVV no.";
    }

    if (typeof fields["cvv"] !== "undefined") {
      if (!fields["cvv"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["cvv"] = "*Please enter valid cvv no.";
      }
    }
    if (!fields["date"]) {
      formIsValid = false;
      errors["date"] = "*Please enter date.";
    }
    

    
    
    if (!fields["hname"]) {
        formIsValid = false;
        errors["hname"] = "*Please enter your name.";
      }
    
    this.setState({
      errors: errors
    });
    return formIsValid;

  }
  cancel(){
    this.props.history.push('/home');
  }

  divstatus = (e) =>{
    this.setState({value:e.target.value});
    

  }
render() {
    return (
        <div>
                <br></br>
                <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-7 offset-md-3 offset-md-3">
                               <h1 className="text-center">Payment</h1>
                                <div className = "card-body">
                                    <h1>Payment Option</h1>
                                    <select onChange={this.divstatus}>
                                    
                                        <option value="show">UPI</option>
                                        <option value="hide">CREDIT CARD</option>
                                        

                                    </select>

                                    <br>
                                    </br>
                                    <br>
                                    </br>
                                    <div className={this.state.value}>
                                        
                                    <label> Enter phone No. </label>
                                            <input placeholder="Enter phone no." name="pnumber" className="form-control"
                                                value={this.state.fields.pnumber} onChange={this.handleChange}/>
                                                <div className="errorMsg">{this.state.errors.pnumber}</div>
                                    
                                    </div>
                                    <form method="post"  name="userPaymentForm"  onSubmit= {this.paymentDealer}>
                                    <div className = "form-group">                              
                                            <label> Enter Card No. </label>
                                            <input placeholder="Enter Card no." name="cnumber" className="form-control"
                                                value={this.state.fields.cnumber} onChange={this.handleChange}/>
                                               <div className="errorMsg">{this.state.errors.cnumber}</div>  
                                        </div>
                                       
                                        <div className = "form-group">
                                            <label> Enter CVV </label>
                                            <input placeholder="Enter CVV" name="cvv" className="form-control"
                                                value={this.state.fields.cvv} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.cvv}</div>
                                        </div>
                                        <div className = "form-group">
                                            <label> Enter Card Holder Name </label>
                                            <input type="text" placeholder="Enter Card Holder Name" name="hname" className="form-control"
                                                value={this.state.fields.hname} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.hname}</div>
                                        </div>

                                        <div className = "form-group">
                                            <label> Enter date </label>
                                            <input type="date" placeholder="Enter Date" name="date" className="form-control"
                                                value={this.state.fields.date} onChange={this.handleChange}/>
                                                 <div className="errorMsg">{this.state.errors.date}</div>
                                        </div>
                                        <input type="submit" className="btn btn-success"  value="pay"/>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>cancel</button>
                                                       </form>
                                </div>
                            </div>
                        </div>
 
                   </div>
            </div>
    );
  }
}


