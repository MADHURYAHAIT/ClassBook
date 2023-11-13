import {GoogleLogout} from 'react-google-login'
import {IoIosLogOut} from 'react-icons/io'
const clientId="36910271547-g4gf1pe3a3ln92sfmj6n293s5k3vfnrp.apps.googleusercontent.com";


function Logoutnav(){

    const onSuccess=(res)=>{
        console.log("Log Out Successfully!",res);
        
       

    }
    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={'Logout'}
            onLogoutSuccess={onSuccess}
            isSignedIn={false}
            icon={false}
            // redirect='./home'

            />

                <IoIosLogOut className='icon'/>

        </div>
    )
}

export default Logoutnav;