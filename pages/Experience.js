import React from "react";
import Image from "next/image";

const Experience = () => {
    return (
        <div className="container bg-base dark:bg-dark_base">
            <div className="grid mb-20">
                <div className="py-19 text-black dark:text-dark_text" id="experience">
                    <div className="grid place-items-center">
                    <div className="font-extrabold text-5xl mb-10">Experience</div>
                    </div>
                    <hr />
                    <div>
                        <div className="grid grid-cols-2">
                        <h1 className="font-bold text-xl ml-10 mt-5 ">Software Engineer</h1>
                        <p className="flex justify-end mr-10 mt-5 ">October 2023 - present</p>
                        </div>
                        <p className="font-bold italic ml-10">UBC BEST</p>

                            <ul className="list-disc list-inside ml-10">
                            <li>Contributing to a biomedical engineering student team constructing a data-driven glove paired with a mobile 
application integrated with mobile games to aid the rehabilitation process of Multiple Sclerosis patients by tracking 
hand dexterity and progress </li>
                                <li> Implemented the mobile Android application’s UI by creating customized components using React Native</li>
                                <li> Enhancing functionality and resolving technical problems within the game coded in C# through Unity </li>
                                <li> Created vectors and a background image for one of the games</li>
                                <li> Technology Stack: React Native, C# and used Unity3D</li>
                            </ul>

                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                        <h1 className="font-bold text-xl ml-10 mt-5 ">Student Developer</h1>
                        <p className="flex justify-end mr-10 mt-5 ">November 2023 - April 2024</p>
                        </div>
                        <p className="font-bold italic ml-10">UBC Computer Science Society</p>
                            <ul className="list-disc list-inside ml-10">
                            <li>Collaborating within a team to develop a website for UBC Tennis Circle Club</li>
                                <li>Developing a website on a Next.js application with Typescript, using MongoDB for the database, and ChakraUI for 
UI framework</li>
                            </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experience;