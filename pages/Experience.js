import React from "react";

const Experience = () => {
    return (
        <div className="container min-h-screen bg-base mb-10">
            <div className="grid min-h-screen">
                <div className="py-19 text-black" id="experience">
                    <div className="font-extrabold text-5xl mb-10 ml-10">Experience</div>
                    <hr />
                    <div>
                        <h1 className="font-bold text-xl ml-10 mt-5">Student Developer</h1>
                        <p className="font-bold italic ml-10">UBC BEST</p>
                        <div className="grid grid-cols-2">
                            <ul className="list-disc list-inside ml-10">
                                <li>UBC BEST is a biomedical engineering student design team, where I am a part of the Multiple Sclerosis to Movement(M2M) sub-team </li>
                                <li>M2M&apos;s project is a data driven glove paired with a mobile app to enhance Multiple Sclerosis patients' rehabilitation process and track progress </li>
                                <li>The app has built in games to engage patients in rehabilitiation exercises, and displays the data from the sensors to help track the progess</li>
                                <li>I am helping with the implementation of the UX/UI in the mobile app, fixing bugs in the game, and creating vectors for both the app and the game</li>
                                <li>Languages used: React Native, C# and used Unity3D</li>
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Experience;