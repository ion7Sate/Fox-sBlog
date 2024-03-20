import React from 'react';
import {Link} from "react-router-dom";
import foxImage from '../assets/img/fox.png'
import {Button, Checkbox, Label, TextInput} from "flowbite-react";



export default function SignUp(props) {
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
                    <form className="flex flex-col gap-4">
                        <div>
                            <div>
                                <Label value=" Your Username"/>
                            </div>
                            <TextInput type="text" placeholder="Username" id="username"/>
                        </div>
                        <div>
                            <div>
                                <Label value="Your email"/>
                            </div>
                            <TextInput id="email1" type="email" placeholder="name@company.com" required/>
                        </div>
                        <div>
                            <div>
                                <Label value="Your password"/>
                            </div>
                            <TextInput id="password" type="password" required/>
                        </div>
                        <Button className="bg-gradient-to-r from-pink-600  to-blue-700" type="submit">Sign Up</Button>
                    </form>
                    <div className="flex gap-2 text-sm mt-5 self-center">
                        <span>Have an account?</span>
                        <Link to='/sing-in' className='text-blue-500'> Sign In</Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

