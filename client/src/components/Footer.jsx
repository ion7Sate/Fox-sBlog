import {Footer} from "flowbite-react";
import {BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter} from "react-icons/bs";
import {Link} from "react-router-dom";
import React from "react";

export default function FooterComponent(){
    return(
        <Footer container className="border border-t-gray-800">
            <div className="w-full max-w-7xl mx-auto">
                <div className="w-full justify-between sm:flex md:grid-cols-1" >
                    <div className="mt-5">
                        <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                            <span className="px-2 py-1 bg-gradient-to-r from-pink-600  to-blue-700 rounded-lg text-white">Fox's</span>
                            Blog
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">Our Mission</Footer.Link>
                                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">Our Team</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">Github</Footer.Link>
                                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="FoxBlog™" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}