import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pomo = () => {
    return (
        <div className="container bg-base">
            <h1 className="font-bold text-2xl text-black">Pomo&apos;s Paradise</h1>

            <div className="card w-3/4 bg-txt text-black">
                <div className="card-body items-center text-center">
                    <p>Kizuna was created during NWHacks 2023, and is a livestreaming web application that 
                    implements LivePeer Studio&apos;s API for video Livestream and on demand to help create stronger communities in real time. This was built with aims to increase exposure for small creators through alleviating the barriers of being a new streamer. The application was created using a React app, with UI implemented through CSS and HTML.</p>
    
                    <div className=" flex flex-row">
                        <Link href="https://github.com/ktran003/CMD-F-Hackathon"rel="noopener noreferrer" target="_blank" className="font-bold text-black underline mr-10">
                            Github
                        </Link>
                        <Link href="https://devpost.com/software/pomo-s-paradise" rel="noopener noreferrer" target="_blank" className="font-bold text-black underline">
                            Devpost
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pomo;