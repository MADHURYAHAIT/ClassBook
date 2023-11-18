import {GoogleLogin} from 'react-google-login'
import {FcGoogle} from 'react-icons/fc'
const clientId="36910271547-g4gf1pe3a3ln92sfmj6n293s5k3vfnrp.apps.googleusercontent.com";

function Login(){
    const onSuccess = (res) => {
  
        console.log(res.profileObj.googleId)
    }
    
    const onFailure=(res)=>{
        console.log("LOGIN FAILED! res: ",res);
    } 
    return(
        <div id="signInButton">
            <GoogleLogin
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            icon={false}
            />

            <div class="button-cont center-block">
                <div className='cardbutton '> 
                    <FcGoogle className='icon1'/>Continue with Google
                </div>
            </div>
        </div>
    )
}

export default Login;