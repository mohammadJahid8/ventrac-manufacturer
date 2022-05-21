import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import google from '../../../social/google.png';
import Loading from '../../Shared/Loading/Loading';



const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    if (googleError) {
        toast.error('Error while signing in with Google', {
            position: toast.POSITION.TOP_CENTER
        })
    }


    if (googleLoading) {
        return <Loading />;
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