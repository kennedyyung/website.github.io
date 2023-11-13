import React from "react";
import Image from "next/image";
import Link from "next/link";

const Inteflow = () => {
    return (
        <div className="container bg-base">
            <h1 className="font-bold text-2xl text-black">Inteflow</h1>

            <div className="card w-3/4 bg-txt text-black">
                <div className="card-body items-center">
                    <p1 className="text-center">Inteflow is an iOS mobile app designed to streamline your math problem-solving experience. It's your personal problem-solving companion that scans both formula and text-based math problems. Once scanned, inteflow breaks down these problems, offering detailed explanations that guide you to the solution through a chatbot. It also offers a wide range of supplementary resources, curated practice problems and textbooks to aid in reinforcing your understanding. </p1>
                    <p2>I was tasked with the implementation of the UI design in SwiftUI</p2>

                    <div className=" flex flex-row text-center">
                        <Link href="https://github.com/jn-han/IgnitionHacks2023"rel="noopener noreferrer" target="_blank" className="font-bold text-black underline mr-10">
                            Github
                        </Link>
                        <Link href="https://devpost.com/software/inteflow" rel="noopener noreferrer" target="_blank" className="font-bold text-black underline">
                            Devpost
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inteflow;