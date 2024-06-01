import { useState } from "react";
import { useForm } from "react-hook-form";

const ProductInput = ({c1, c2, c3, c4, c5}) => {

    console.log(c1, c2, c3, c4, c5);

    const { handleSubmit, formState: { errors }, register } = useForm();


    const [selectData, setSelectdata] = useState([]);

    const onSubmit = (data) => {
        setSelectdata(data.rootCauseAnalysisCategory)
    };
    console.log(selectData);


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
                {/* c1 */}
                <div className="my-2">
                    {
                        c1 === 'yes' &&
                        <div>
                            <details className="collapse bg-base-200">
                                <summary className="collapse-title text-xl font-medium border-b-2 border-b-slate-300 ">C1</summary>
                                <div className="collapse-content">
                                    <div className="px-10">
                                        <div className="flex justify-between border-b-2 border-b-slate-400    py-2">
                                            <h2>SKU 227 (234 Kg)</h2>
                                            <p>Rate: $ 234 </p>
                                        </div>
                                        <div className="flex justify-between pt-5">
                                            <div>
                                                <label>Selling rate</label>
                                                <br />
                                                <input className='border p-3 bg-white text-black text-sm mt-1 ' {...register('email')}
                                                    type='email' placeholder='Enter Selling rate' required />
                                                {errors.email && <p>Please enter your email address.</p>}
                                            </div>

                                            <div>
                                                <label>Total Items</label>
                                                <br />
                                                <input className='border p-3 bg-white text-black text-sm mt-1' {...register('email')}
                                                    type='email' placeholder='Enter Quantity' required />
                                                {errors.email && <p>Enter Price</p>}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </details>
                        </div>
                    }
                </div>
                {/* c2 */}
                <div>
                    {
                        c2 === 'yes' &&
                        <div>
                            <details className="collapse bg-base-200 my-2">
                                <summary className="collapse-title text-xl font-medium border-b-2 border-b-slate-300 ">C2</summary>
                                <div className="collapse-content">
                                    <div className="px-10">
                                        <div className="flex justify-between border-b-2 border-b-slate-400    py-2">
                                            <h2>SKU 227 (234 Kg)</h2>
                                            <p>Rate: $ 234 </p>
                                        </div>
                                        <div className="flex justify-between pt-5">
                                            <div>
                                                <label>Selling rate</label>
                                                <br />
                                                <input className='border p-3 bg-white text-black text-sm mt-1 ' {...register('email')}
                                                    type='email' placeholder='Enter Selling rate' required />
                                                {errors.email && <p>Please enter your email address.</p>}
                                            </div>

                                            <div>
                                                <label>Total Items</label>
                                                <br />
                                                <input className='border p-3 bg-white text-black text-sm mt-1' {...register('email')}
                                                    type='email' placeholder='Enter Quantity' required />
                                                {errors.email && <p>Enter Price</p>}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </details>
                        </div>
                    }
                </div>
                {/* c3 */}
                <div>
                    {
                        c3 === 'yes' &&
                        <div>
                            <details className="collapse bg-base-200 my-2">
                                <summary className="collapse-title text-xl font-medium border-b-2 border-b-slate-300 ">C3</summary>
                                <div className="collapse-content">
                                    <div className="px-10">
                                        <div className="flex justify-between border-b-2 border-b-slate-400    py-2">
                                            <h2>SKU 227 (234 Kg)</h2>
                                            <p>Rate: $ 234 </p>
                                        </div>
                                        <div className="flex justify-between pt-5">
                                            <div>
                                                <label>Selling rate</label>
                                                <br />
                                                <input className='border p-3 bg-white text-black text-sm mt-1 ' {...register('email')}
                                                    type='email' placeholder='Enter Selling rate' required />
                                                {errors.email && <p>Please enter your email address.</p>}
                                            </div>

                                            <div>
                                                <label>Total Items</label>
                                                <br />
                                                <input className='border p-3 bg-white text-black text-sm mt-1' {...register('email')}
                                                    type='email' placeholder='Enter Quantity' required />
                                                {errors.email && <p>Enter Price</p>}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </details>
                        </div>
                    }
                </div>
                {/* c4 */}
                <div>
                    {
                        c4 === 'yes' &&
                        <div>
                            <details className="collapse bg-base-200 my-2">
                                <summary className="collapse-title text-xl font-medium border-b-2 border-b-slate-300 ">C4</summary>
                                <div className="collapse-content">
                                    <div className="px-10">
                                        <div className="flex justify-between border-b-2 border-b-slate-400    py-2">
                                            <h2>SKU 227 (234 Kg)</h2>
                                            <p>Rate: $ 234 </p>
                                        </div>
                                        <div className="flex justify-between pt-5">
                                            <div>
                                                <label>Selling rate</label>
                                                <br />
                                                <input className='border p-3 bg-white text-black text-sm mt-1 ' {...register('email')}
                                                    type='email' placeholder='Enter Selling rate' required />
                                                {errors.email && <p>Please enter your email address.</p>}
                                            </div>

                                            <div>
                                                <label>Total Items</label>
                                                <br />
                                                <input className='border p-3 bg-white text-black text-sm mt-1' {...register('email')}
                                                    type='email' placeholder='Enter Quantity' required />
                                                {errors.email && <p>Enter Price</p>}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </details>
                        </div>
                    }
                </div>
                {/* c5 */}
                <div>
                    {
                        c5 === 'yes' &&
                        <div>
                            <details className="collapse bg-base-200 my-2">
                                <summary className="collapse-title text-xl font-medium border-b-2 border-b-slate-300 ">C5</summary>
                                <div className="collapse-content">
                                    <div className="px-10">
                                        <div className="flex justify-between border-b-2 border-b-slate-400    py-2">
                                            <h2>SKU 227 (234 Kg)</h2>
                                            <p>Rate: $ 234 </p>
                                        </div>
                                        <div className="flex justify-between pt-5">
                                            <div>
                                                <label>Selling rate</label>
                                                <br />
                                                <input className='border p-3 bg-white text-black text-sm mt-1 ' {...register('email')}
                                                    type='email' placeholder='Enter Selling rate' required />
                                                {errors.email && <p>Please enter your email address.</p>}
                                            </div>

                                            <div>
                                                <label>Total Items</label>
                                                <br />
                                                <input className='border p-3 bg-white text-black text-sm mt-1' {...register('email')}
                                                    type='email' placeholder='Enter Quantity' required />
                                                {errors.email && <p>Enter Price</p>}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </details>
                        </div>
                    }
                </div>

                <input className="border p-2 hover:bg-slate-300 my-10" type="submit" />
            </form>
    );
};

export default ProductInput;