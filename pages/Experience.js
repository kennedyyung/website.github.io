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
                                <li>UBC BEST is a biomedical engineering student design team, where I am a part of the Multiple Sclerosis to Movement(M2M) sub-team </li>
                                <li>M2M&apos;s project is a data driven glove paired with a mobile app to enhance Multiple Sclerosis patients&apos;s rehabilitation process and track progress </li>
                                <li>The app has built in games to engage patients in rehabilitiation exercises, and displays the data from the sensors to help track the progess</li>
                                <li>My jobs include implementation of the UX/UI for the mobile app, fixing bugs in the game, and creating vector images for both app and game</li>
                                <li>Languages used: React Native, C# and used Unity3D</li>
                            </ul>

                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                        <h1 className="font-bold text-xl ml-10 mt-5 ">Student Developer</h1>
                        <p className="flex justify-end mr-10 mt-5 ">November 2023 - present</p>
                        </div>
                        <p className="font-bold italic ml-10">UBC Computer Science Society</p>
                            <ul className="list-disc list-inside ml-10">
                                <li>I am part of a team of students helping the UBC Tennis Circle Club build their website</li>
                                <li>We are building the website on a next.js application, using TypeScript for front-end and back-end, and ChakraUI for the framework</li>
                            </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experience;