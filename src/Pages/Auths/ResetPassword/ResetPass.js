import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const ResetPass = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const onSubmit = data => {
        const { email } = data;
        sendPasswordResetEmail(email);
        reset();
        toast.success("Password Reset Email sent Successfully! Please Check your email", {
            position: toast.POSITION.TOP_CENTER
        })

    }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <label htmlFor="email" className="font-bold text-lg">Enter Your Email to Reset Password</label>
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

                        <div >
                            <label htmlFor="my-modal-6">

                                <input type="submit" value='Send Reset Email' name="submit" className="btn btn-primary" />
                            </label>

                        </div>
                    </form>

                </div>
            </div>
        </div >
    );
};

export default ResetPass;