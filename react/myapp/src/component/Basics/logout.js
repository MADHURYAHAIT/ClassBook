import {GoogleLogout} from 'react-google-login'
import {FcGoogle} from 'react-icons/fc'
const clientId="36910271547-g4gf1pe3a3ln92sfmj6n293s5k3vfnrp.apps.googleusercontent.com";


function Logout(){

    const onSuccess=(res)=>{
        console.log("Log Out Successfully!",res);
        window.location.reload();
    }

    return(
        <div id="signOutButton1">
            <GoogleLogout
            clientId={clientId}
            onLogoutSuccess={onSuccess}

            icon={false}
            isSignedIn={false}
            />

            <div class="button-cont center-block">
                <div className='cardbutton '> 
                    <FcGoogle className='icon1'/>Logout
                </div>
            </div>

        </div>
    )
}

export default Logout;




