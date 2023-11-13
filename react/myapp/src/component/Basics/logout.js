import {GoogleLogout} from 'react-google-login'

import { useEffect, useState } from 'react'
const clientId="36910271547-g4gf1pe3a3ln92sfmj6n293s5k3vfnrp.apps.googleusercontent.com";


function Logout(){

    const onSuccess=()=>{
        console.log("Log Out Successfully!");
        setFlag(true)
        

    }
    return(
        <div id="signOutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={'Logout'}
            onLogoutSuccess={onSuccess}
            redirect={'./home'}
            />

            {/* <div class="button-cont center-block">
                <div className='cardbutton '> 
                    <FcGoogle className='icon1'/>Logout
                </div>
            </div> */}

        </div>
    )
}

export default Logout;