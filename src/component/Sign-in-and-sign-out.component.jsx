import React from 'react';
import GoogleLogin from 'react-google-login';

import { GoogleLogout } from 'react-google-login';

class SignInAndSignOut extends React.Component{

     state ={
        isSignedIn : false,
        name: "",
        url:""
    }

    responseGoogleSuccess = response =>{
       this.setState({isSignedIn:true, name:response.profileObj.name, url:response.profileObj.imageUrl}) 
        alert("Login Successful");
    }

     responseGoogleFail = () =>{
        alert("Login Failed!!")
    }
    logout = () => {
      this.setState({isSignedIn:false, name:"", url:""});
      alert("Logged Out")
      

    }
    render(){ 
        return(
            <div> 
                
                   {this.state.isSignedIn
                    ?   ( <div style={{display:'flex'}}>
                        <p>{this.state.name}</p>
                        <img src={this.state.url} alt={this.state.name}/>
                        <GoogleLogout
                    clientId="689926056437-9mieo25tohtlvbvirq8a3ecv6h2pvlvo.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this.logout} />
                    </div>
                    )
                     : 
                     
                    (<GoogleLogin
                    clientId="689926056437-9mieo25tohtlvbvirq8a3ecv6h2pvlvo.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogleSuccess}
                    onFailure={this.responseGoogleFail}
                    cookiePolicy={'single_host_origin'} 
                     /> 
                )
                   }
                
            </div>
        )
    }

}

export default SignInAndSignOut;
