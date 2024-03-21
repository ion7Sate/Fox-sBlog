import React, {useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import {Alert, Button, Checkbox, Label, Spinner, TextInput} from "flowbite-react";
import {HiInformationCircle} from "react-icons/hi";



export default function SignUp(props) {
    const [formData, setFormData] = useState({})
    const [errorMessage,setErrorMessage] = useState(null);
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e)=>{
        setFormData({...formData,[e.target.id]:e.target.value.trim()});
    };

    const handleSubmit = async  (e) =>{
        e.preventDefault();
        if(!formData.username || !formData.email || !formData.password ){
            return setErrorMessage('Please fill all fields.')
        }
        try{
            setLoading(true);
            setErrorMessage(null);
            const res = await fetch('/api/auth/sign',{
                method: 'Post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if(data.success === false){
                return setErrorMessage(data.message);
            }
            setLoading(false);
            if(res.ok){
                navigate('/sing-in')
            }
        } catch (error){
         setErrorMessage(error.message);
            setLoading(false);
        }

    }

    return (
        <div className='min-h-screen mt-20'>
            <div className="flex p-1 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-8">

                {/* left side  */}
                <div className="flex-1">
                    {/*<div className="w-full flex justify-center"> /!* Aici centram imaginea *!/*/}
                    {/*    <img src={foxImage} alt="Fox" className="max-w-full"*/}
                    {/*         style={{maxHeight: '200px'}}/> /!* Asigură-te că imaginea nu este prea mare *!/*/}
                    {/*</div>*/}
                    <Link to="/" className="font-bold dark:text-white text-4xl">
                        <span
                            className="px-2 py-1 bg-gradient-to-r from-pink-600  to-blue-700 rounded-lg text-white">Fox's</span>
                        Blog
                    </Link>
                    <p className="text-sm mt-5 font-bold">"Empower Your Code Journey: Explore Tomorrow's Tech Today with
                        Fox'sBlog!"</p>
                </div>

                {/* right side  */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <Label value=" Your Username"/>
                            </div>
                            <TextInput type="text" placeholder="Username" id="username" onChange={handleChange}/>
                        </div>
                        <div>
                            <div>
                                <Label value="Your email"/>
                            </div>
                            <TextInput id="email" type="email" placeholder="name@company.com"  onChange={handleChange}/>
                        </div>
                        <div>
                            <div>
                                <Label value="Your password"/>
                            </div>
                            <TextInput id="password" type="password"  onChange={handleChange}/>
                        </div>
                        <Button className="bg-gradient-to-r from-pink-600  to-blue-700" type="submit" disabled={loading}>
                            {
                                loading ? (
                                    <>
                                        <Spinner size="sm"/>
                                    <span className="pl-3">Loading...</span>
                                    </>
                                ) : 'Sing Up'
                            }
                        </Button>
                     </form>
                    <div className="flex gap-2 text-sm mt-5 self-center">
                        <span>Have an account?</span>
                        <Link to='/sing-in' className='text-blue-500'> Sign In</Link>
                    </div>
                    {
                        errorMessage && (
                            <Alert className="mt-5" color="failure" icon={HiInformationCircle}>
                                {errorMessage}
                            </Alert>
                        )
                    }
                </div>
            </div>
        </div>

    );
        }

