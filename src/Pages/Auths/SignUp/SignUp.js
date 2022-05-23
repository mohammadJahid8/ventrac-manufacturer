import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


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

    const onSubmit = async (data) => {
        const { email, password } = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: data.name });
        reset();
    }


    return (
        <div className='mt-8'>
            <div className="formbg ">
                <div className="p-12">
                    <span className="pb-4">Create a new account</span>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="field">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>

                        </div>

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

                        <div className="field pb-6">
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

                        <div className="field">
                            <input type="submit" value='SIGN UP' name="submit" className="btn btn-primary" />
                        </div>

                        <div class="divider py-6">OR</div>
                        <div className="field">
                            <SocialLogin />
                        </div>
                    </form>
                </div>
            </div>
            <div className="footer-link pt-6">
                <span>Already have an account? <Link className="cursor-pointer" to='/signin'>Sign In</Link></span>
                <div className="listing py-6 flex-flex center-center">
                    <span><a href="#">© Mohammad Jahid</a></span>
                    <span><a href="#">Contact</a></span>
                    <span><a href="#">Privacy &amp; terms</a></span>
                </div>
            </div>

        </div>
    );
};

export default SignUp;