import * as React from 'react';
import { connect } from 'react-redux';
import './Home.css';
import  { getClient }  from '../store/fetchClient';
import Header from './Header';
import dispatch from 'redux';



class Home extends React.Component {
   
    render() {
        return(
            <div>
                <div >

                    <h3> Name:{this.props.client.firstName}  Id:{this.props.client.clientId} </h3>
                    
                </div>
        <form >
            <table>
                <tr>
                    <td>Company :</td> <td><input type="Checkbox" name="Company"/ ></td><br/>
                </tr>
                <tr>
                    <td>ID :</td> <td><input type="text" name="ClientId" /></td><br />
                </tr>
                <tr>
                    <td>Prefix :</td> <td><input type="text" name="prefix" /></td><br />
                </tr>
                <tr>
                     <td>FirstName :</td> <td><input type="text" name="FirstName"/></td><br />
                </tr>
                 <tr>
                     <td>MiddleName :</td> <td><input type="text" name="MiddleName"/></td><br />
                </tr>
                <tr>
                     <td>LastName :</td> <td><input type="text" name="LastName"/></td><br />
                </tr>
                <tr>
                     <td>NickName :</td> <td><input type="text"name="NickName"/></td><br/>
                </tr>
                <tr>
                    <td><input type="submit" value="Submit" /></td>
                </tr>
        </table>  
                </form>
               
              
    </div >
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getData: () => dispatch(getClient())
    };
};


const mapStateToProps =state=>{
   return {
        client: state.Client
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
