import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import google from '../../../social/google.png';
import Loading from '../../Shared/Loading/Loading';



const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (googleError) {
            toast.error((googleError.code), {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }, [googleError])


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