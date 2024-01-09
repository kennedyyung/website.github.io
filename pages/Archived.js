import React from "react";
import Image from "next/image";

const Archived = () => {
    return (
        <div className="container bg-base">
            <div className="grid min-h-screen">
                <div className="py-15"> 
                    <div className="font-extrabold text-5xl text-black mb-10 ml-10">Projects</div>

                        <div className="grid grid-cols-2 grid-flow-row gap-5 ml-10">

                            <div className="card w-96 shadow-xl bg-button hover:scale-110">
                                <Image
                                    src="/pomo.PNG" 
                                    height={450}
                                    width={500}
                                />
                                <div className="card-body">
                                    <h2 className="card-title text-white">Places For Dogs App
                                        <div className="badge badge-secondary text-white">Jan, 2022</div>
                                    </h2>
                                    <p></p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline text-white">Java</div>
                                    </div>
                                </div>
                            </div>


                            <div className="card w-96 shadow-xl bg-button hover:scale-110">
                                <Image
                                    src="/PCParts.png" 
                                    height={450}
                                    width={500}
                                />
                                <div className="card-body">
                                    <h2 className="card-title text-white">PC Parts Organizer
                                        <div className="badge badge-secondary text-white">Dec, 2023</div>
                                    </h2>
                                    <p></p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline text-white">SQL</div>
                                        <div className="badge badge-outline text-white">PHP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Archived;