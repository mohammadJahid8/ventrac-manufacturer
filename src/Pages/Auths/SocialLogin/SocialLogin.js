import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../social/google.png';



const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (googleError) {
        return (
            <div>
                <p>Error: {googleError.message}</p>
            </div>
        );
    }


    if (googleLoading) {
        return <p>Loading...</p>;
    }


    return (
        <div>
            <button
                onClick={() => signInWithGoogle()}
                class="btn btn-outline  border-gray-200 font-semibold w-full ml max-w-xl hover:text-white text-lg text-gray-800">
                <img style={{ width: '22px' }} src={google} className='mr-2' alt="" />
                Google SIGn In
            </button>
        </div>
    );
};

export default SocialLogin;