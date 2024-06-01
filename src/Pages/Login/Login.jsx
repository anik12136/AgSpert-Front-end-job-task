
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [formData, setFormData] = useState();

    if(formData?.email==="anik@gmail.com" && formData?.password === "666666"){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');
    }
    
     else{
        formData &&  Swal.fire({
            icon: "error",
            title: "You have entered wrong Email or password ",
            text: "Please provide correct email or password",
          });
     }
   
    return (
        <div className='flex justify-center my-10'>
            <form className='grid gap-y-4 w-96' onSubmit={handleSubmit((data) => setFormData(data))}>
                
                <input className='border p-3 bg-white text-black text-sm ' {...register('email')} 
                type='email' placeholder='please enter your email' required />
                {errors.email && <p>Please enter your email address.</p>}
                
                <input className='border p-3 bg-white text-black text-sm ' {...register('password')} 
                type='password' placeholder='please enter the password' required />
                {errors.password && <p>Please enter the password.</p>}

                <input className='border p-3 bg-white text-black font-bold mt-5 ' type="submit" />
            </form>
        </div>

    );
};

export default Login;