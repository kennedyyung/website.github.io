import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pomo = () => {
    return (
        <div className="container bg-base flex flex-col items-center">
            <h1 className="font-bold text-2xl text-black">Pomo&apos;s Paradise</h1>

            <div className="card w-3/4 bg-txt text-black">
                <div className="card-body items-center text-center">
                    <p>Pomo&apos;s Paradise was created during CMD-f 2023 and is an educational study tool that includes AI generated study sets, interactive chat bot with AI generated study questions, and the opportunity to connect and collaborate with other students. The application is based in a React app, using React.js, HTML and CSS as the coding languages and using Co:Here&apos;s Text summarization and generation API for the study set and question production.</p>
    
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