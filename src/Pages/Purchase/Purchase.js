import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import fetcher from '../Shared/api/axios.config';

const Purchase = () => {
    const [disabled, setDisabled] = useState(false);
    const [inputQuantity, setInputQuantity] = useState();
    const [tool, setTool] = useState({});
    const { _id, image, minOrder, description, price, name, quantity } = tool;
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { id } = useParams();



    //load a signle tool
    useEffect(() => {
        (async () => {
            const res = await fetcher.get(`/tools/${id}`)
            setTool(res.data);
        })()
    }, [id])



    //getting input value
    const orderQuantityChange = (event) => {
        const inputQuantity = event.target.value;
        setInputQuantity(inputQuantity);
    }

    const onSubmit = (data) => {
        const newData = { ...data, quantity: inputQuantity, name: user.displayName, email: user.email };
        reset();
    }

    return (
        <div className="flex justify-center items-center">
            <div className="pt-10 pb-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
                <div className="flex flex-col justify-start items-start w-full space-y-9">
                    <div className="flex justify-start flex-col items-start space-y-2">
                        <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
                            <svg className="fill-stroke" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.91681 7H11.0835" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7L5.25014 9.33333" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2.91681 7.00002L5.25014 4.66669" stroke="currentColor" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm leading-none">Back</p>
                        </button>
                        <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Checkout</p>
                    </div>

                    <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
                        <div className=" flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                            <div className="flex flex-col justify-start items-start w-full space-y-4">
                                <p className="text-xl md:text-2xl leading-normal text-gray-800">Logitech K251</p>
                                <p className="text-base font-semibold leading-none text-gray-600">$520.00</p>
                            </div>
                            <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                                <img src="https://i.ibb.co/0GFzTP4/Rectangle-131.png" alt="headphones" />
                            </div>
                        </div>

                        <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
                            <div>
                                <h3 className='font-semibold'>About the product</h3>
                                <p className=' mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit autem maxime sint inventore officiis vitae cum illo hic alias corporis?</p>

                            </div>
                            <p className="text-base font-bold mt-5 leading-normal sm:leading-4 text-gray-600">
                                Please provide necessary informations to purchase
                            </p>


                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mt-4">
                                    <input
                                        className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                        type="text"
                                        disabled
                                        value={user?.displayName}

                                    />
                                </div>
                                <div className="mt-4">
                                    <input
                                        className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                        type="email"
                                        // placeholder="Email"
                                        disabled
                                        value={user?.email}

                                    />
                                </div>

                                <div className="mt-4">
                                    <input
                                        className=" border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                        type="text"
                                        placeholder="Address"
                                        required
                                        {...register("address")}
                                    />

                                    <input
                                        className="mt-4 border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                        type="number"
                                        placeholder="Phone Number"
                                        required
                                        {...register("number")}
                                    />

                                </div>

                                <div className="mt-2 flex-col">
                                    <p className='font-semibold mb-3 mt-6'>Available Quantity: 500</p>

                                    <p className='font-semibold mb-3 mt-3'>Per Unit Price: $50</p>

                                    {
                                        (inputQuantity > 100 || inputQuantity < 500)
                                        &&
                                        <p className='font-semibold mb-3'>My Order Quantity: {inputQuantity}</p>
                                    }
                                    {
                                        (inputQuantity > 100 || inputQuantity < 500) &&
                                        < p className='font-semibold mb-3 mt-3'>Total Price: ${inputQuantity * 50}</p>}

                                    <div>
                                        <input
                                            onChange={orderQuantityChange}
                                            className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                                            type="number"
                                            placeholder="Minimum Order 100pcs"
                                            required

                                        />

                                        {inputQuantity < 100
                                            &&
                                            <p className="text-red-500 text-sm">Minimum order 100pcs</p>
                                        }
                                        {
                                            inputQuantity > 500
                                            &&
                                            <p className="text-red-500 text-sm">Maximum order 500pcs</p>
                                        }
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={(inputQuantity < 100 || inputQuantity > 500) && !disabled}
                                    className="mt-8 border border-transparent text-white btn btn-primary flex justify-center items-center py-4 rounded w-full">
                                    <div>
                                        <p className="text-base leading-4">Place Order</p>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Purchase;