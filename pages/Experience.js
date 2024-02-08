import React from "react";

const Experience = () => {
    return (
        <div className="container min-h-screen bg-base mb-10">
            <div className="grid min-h-screen">
                <div className="py-19" id="experience">
                    <div className="font-extrabold text-5xl text-black mb-10 ml-10">Experience</div>
                    <hr/>
                    <div>
                        <h1 className ="font-bold text-xl ml-10">Student Developer</h1>
                        <p className="font-bold italic ml-10">UBC BEST Design Team</p>
                        <p>UBC BEST is a biomedical engineering student design team, where I am a part of the Multiple Sclerosis to Movement(M2M) sub-team. M2M&apos;s project is a data driven glove paired with a mobile app. The app has built in games to engage patients in rehabilitiation exercises, which then the sensors in the glove collect data on their hand movements to track the progress of each patient within the app.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Experience;