import {GoogleLogout} from 'react-google-login'
import {FcGoogle} from 'react-icons/fc'
import { useEffect, useState } from 'react'
const clientId="36910271547-g4gf1pe3a3ln92sfmj6n293s5k3vfnrp.apps.googleusercontent.com";


function Logout(){

    const onSuccess=()=>{
        console.log("Log Out Successfully!");
    }

    return(
        <div id="signOutButton1">
            <GoogleLogout
            clientId={clientId}
            onLogoutSuccess={onSuccess}
            redirect={'./home'}
            icon={false}
            isSignedIn={false}
            />

            <div class="button-cont center-block">
                <div className='cardbutton '> 
                    <FcGoogle className='icon1'/> Logout
                </div>
            </div>

        </div>
    )
}

export default Logout;