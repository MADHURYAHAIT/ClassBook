import {GoogleLogout} from 'react-google-login'

const clientId="36910271547-g4gf1pe3a3ln92sfmj6n293s5k3vfnrp.apps.googleusercontent.com";


function Logout(){

    const onSuccess=()=>{
        console.log("Log Out Successfully!");
    }
    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={'Logout'}
            onLogoutSuccess={onSuccess}
          
            />
        </div>
    )
}

export default Logout;