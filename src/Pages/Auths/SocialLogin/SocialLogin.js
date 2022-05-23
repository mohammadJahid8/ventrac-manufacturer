import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png';
import Loading from '../../Shared/Loading/Loading';



const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);


    //navigating the user from the previous page after login
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (googleUser) {
            navigate(from, { replace: true });
        }
    }, [googleUser, from, navigate]);
    

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