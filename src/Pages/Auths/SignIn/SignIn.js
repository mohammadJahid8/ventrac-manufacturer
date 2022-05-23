import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import ResetPass from '../ResetPassword/ResetPass';
import SocialLogin from '../SocialLogin/SocialLogin';
import './SignIn.modules.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';



const SignIn = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    useEffect(() => {
        if (error) {

            toast.error((error.code), {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }, [error])

    if (loading) {
        return <div className="mt-52">
            <Loading />;
        </div>
    }


    const onSubmit = data => {
        console.log(data);
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
        reset();
    }

    return (
        <div className='mt-8 mx-4 body'>
            <div className="formbg">
                <div className="p-12">
                    <span className="pb-6">Sign in to your account</span>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div className="field pb-2">
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "Password is Required"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Minimum 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            <div className="mb-6">
                                <label for="my-modal-6" className="hover:underline text-blue-600 inline-block">Forgot your password?</label>
                            </div>


                        </div>

                        <div className="field">
                            <input type="submit" value='Sign In' name="submit" className="btn btn-primary" />
                        </div>
                        <div class="divider py-6">OR</div>
                        <div className="field">
                            <SocialLogin />
                        </div>

                    </form>

                </div>
            </div>
            <div className="footer-link pt-6">
                <span>Don't have an account? <Link className="cursor-pointer" to='/signup'>Sign up</Link></span>
                <div className="listing py-6 flex-flex center-center">
                    <span><a href="#">© Mohammad Jahid</a></span>
                    <span><a href="#">Contact</a></span>
                    <span><a href="#">Privacy &amp; terms</a></span>
                </div>
            </div>
            <div className="field">
                <ResetPass />
            </div>
        </div>

    );
};

export default SignIn;