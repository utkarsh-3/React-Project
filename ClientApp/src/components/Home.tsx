import * as React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import { getClient, ValidateClient } from '../store/fetchClient';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { Collapse } from 'reactstrap';



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
            company: "",
            prefix: "",
            firstName: "",
            lastName: "",
            middleName: "",
            nickName: "",
            clientId: "",
            address: "",
            city: "",
            country: "",
            state: "",
            postalCode: "",
            email: "",
            active: true,
            valid: false
            
        };
        console.log(this.state);
        this.handleChange = this.handleChange.bind(this);
    }
    selectCountry(val) {
        this.setState({ country: val });
    }

    selectState(val) {
        this.setState({ state: val });
    }

    headerDeactivate = "active";
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };
    deactivate = ({ target }) => {
        this.setState({ active: false });
        this.headerDeactivate = "inactive";
        this.props.client.isDeactive= true;
        { this.props.updateData(this.props.client)  }
    };
    handleCollapse = () => {
        Collapse('show');
    }

    validate = (event) => {
        event.preventDefault();
        console.log("In validator");
        let clientIn = {
            company: this.state.company,
            prefix: this.state.prefix,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            middleName: this.state.middleName,
            nickName: this.state.nickName,
            clientId: this.props.client.clientId,
            address: this.state.address,
            city: this.state.city,
            country: this.state.country,
            state: this.state.state,
            postalCode: this.state.postalCode,
            email: this.state.email
        }
        if (clientIn.company === "")
            clientIn.company = this.props.client.company
        if (clientIn.address === "")
            clientIn.address = this.props.client.address
        if (clientIn.city === "")
            clientIn.city = this.props.client.city
        if (clientIn.postalCode === "")
            clientIn.postalCode = this.props.client.postalCode
        if (clientIn.nickName ==="")
            clientIn.nickName = this.props.client.nickName
        if (clientIn.middleName === "")
            clientIn.middleName = this.props.client.middleName
        if (clientIn.firstName === "")
            clientIn.firstName = this.props.client.firstName
        if (clientIn.lastName === "")
            clientIn.lastName = this.props.client.lastName
        if (clientIn.prefix ==="")
            clientIn.prefix = this.props.client.prefix
        if (clientIn.country === "")
            clientIn.country = this.props.client.country
        if (clientIn.state === "")
            clientIn.state = this.props.client.state
        if (clientIn.email === "")
            clientIn.email = this.props.client.email

        let validatorObject = {
            firstName: clientIn.firstName,
            lastName: clientIn.lastName,
            Email: clientIn.email
        }

       // console.log(clientIn);
        { this.props.ValidateClient(validatorObject) }
        //this.finalvalid(clientIn)
        setTimeout(this.finalvalid, 100, clientIn);
        

    }
    finalvalid = (clientIn) => {
        console.log("Validity :")

        if (this.props.isValid)
        { this.props.updateData(clientIn) }
        else
            alert("User Already Exist !")
    }
    
    render() {
        const country = "United States";
        const state = "";

        return (
            <div className="body">
                <div className={this.headerDeactivate}>
                   
                        <p>Clinet Info
                            <h4>{this.props.client.firstName} {this.props.client.lastName} </h4>
                            <h6>Id:{this.props.client.clientId}</h6>
                        </p>
                 
                </div>
                <br/><br/>
                <div className="headerinfo2">
                    <p><b>MindBody Account</b></p><br /><br />
                </div>
                <br /><br />
                <br />
                <div className="bodyinfo">
                    <div className="bodybuttons">
                        <br />
                        <button className="btn btn-primary" data-toggle="collapse" data-target=".demo" aria-controls="namecard addresscard" disabled={!this.state.active}>Collapse All</button>
                        <button className="btn btn-primary" data-toggle="collapse" data-target=".demo" aria-controls="namecard addresscard" disabled={!this.state.active}>Expand All</button>
                        <button className="btn btn-primary" type="button" disabled={!this.state.active} onClick={this.validate}>Save</button>
                        <button className="btn btn-primary" type="button" disabled={!this.state.active} onClick={this.deactivate}>Deactivate</button>
                        <br />
                   
                    </div>
                    <br /> <br />
                   
                        <div className="container" id="parent">
                            <div className="card-row">

                                    <div className="card">
                                        <div className="card-header" >
                                            <a data-toggle="collapse" href="#namecard" aria-expanded="false" aria-controls="namecard"> Edit name </a>
                                        </div>

                                        <div className="collapse demo" id="namecard" >
                                            <div className="card-body">
                                                <form >
                                                    <table>
                                                            <tr>
                                                        <td>Company :</td> <td><input type="Checkbox" name="company" defaultValue={this.state.company} onChange={this.handleChange} /></td><br />
                                                            </tr>
                                                            <tr>
                                                        <td>ID :</td> <td>{this.props.client.clientId}</td><br />
                                                            </tr>
                                                            <tr>
                                                        <td>Prefix :</td> <td><input type="text" name="prefix" defaultValue={this.state.prefix} onChange={this.handleChange} /></td><br />
                                                            </tr>
                                                            <tr>
                                                        <td>FirstName :</td> <td><input type="text" name="firstName" defaultValue={this.state.firstName} onChange={this.handleChange} required /></td><br />
                                                            </tr>
                                                            <tr>
                                                        <td>MiddleName :</td> <td><input type="text" name="middleName" defaultValue={this.state.middleName} onChange={this.handleChange} /></td><br />
                                                            </tr>
                                                            <tr>
                                                        <td>LastName :</td> <td><input type="text" name="lastName" defaultValue={this.state.lastName} onChange={this.handleChange} required /></td><br />
                                                            </tr>
                                                            <tr>
                                                        <td>NickName :</td> <td><input type="text" name="nickName" defaultValue={this.state.nickName} onChange={this.handleChange} /></td><br />
                                                            </tr>
                                                            <tr>
                                                        <td>Email :</td> <td><input type="email" name="email" defaultValue={this.state.email} onChange={this.handleChange} /></td><br />
                                                            </tr>
                                               
                                                    </table>
                                            
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <br/><br/>
                           

                                    <div className="card">
                                        <div className="card-header">
                                            <a data-toggle="collapse" href="#addresscard">   Address</a>
                                        </div>
                                         <div className="collapse demo" id="addresscard" aria-expanded="false" aria-controls="addresscard">
                                             <div className="card-body">
                                                    <form>
                                                        <table>
                                                            <tr>
                                                                <td>Address :</td> <td><input type="textArea"  name="address" defaultValue={this.state.address} onChange={this.handleChange} /></td><br />
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>PostalCode :</td> <td><input type="text" name="postalCode" defaultValue={this.state.postalCode} onChange={this.handleChange} /></td><br />
                                                            </tr>
                                                            <tr>
                                                                <td>Country :</td> <td><CountryDropdown value={country} onChange={(val) => this.selectCountry(val)} /></td><br />
                                                            </tr>
                                                            <tr>
                                                                <td>State :</td> <td><RegionDropdown country={country} value={state} defaultOptionLabel="Select State" onChange={(val) => this.selectState(val)} /></td><br />
                                                            </tr>

                                              
                                                        </table>
                                                    </form>
                                             </div>
                                         </div>
                                    </div>
                                
                          
                            </div>
                        </div>

                        <div>
                            <br /><br />
                            <br />
                        </div>
                            <input className="btn btn-primary" type="submit" value="Submit" onClick={this.validate} />
                        <br/>
                    
                </div>

                
               
               
              
            </div >
        );
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        getData: () => dispatch(getClient()),
        updateData: (res) => dispatch({ type: "Update Client", payload: res }),
        ValidateClient: (res) => dispatch({ type: "Validate Client", payload: res })
    };
};


const mapStateToProps =state=>{
   return {
       client: state.Client,
       isValid:state.valid
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
