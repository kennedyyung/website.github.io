import React from "react";
import Image from "next/image";

const Projects = () => {
    return (
    <div className="container bg-base">
    <div className="grid min-h-screen">
      <div className="py-20"> 
        <div className="font-extrabold text-5xl text-black mb-10 ml-10">Projects</div>

          <div className="grid grid-cols-2 grid-flow-row gap-5 ml-10">

          <div className="card w-96 shadow-xl bg-button hover:scale-110">
          <Image
                        src="/Inteflow.png" 
                        height={450}
                        width={550}
                        alt="inteflow image"
                    />
            <div className="card-body">
                <h2 className="card-title text-white">Inteflow
                    <div className="badge badge-secondary">Aug, 2023</div>
                </h2>
            <p></p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline text-white">Swift</div> 
            <div className="badge badge-outline text-white">SwiftUI</div>
            </div>
            </div>
          </div>

          <div className="card w-96 shadow-xl bg-button hover:scale-110">
          <Image
                        src="/kizuna.jpg" 
                        height={450}
                        width={500}
                        alt="ubc image"
                    />
            <div className="card-body">
                <h2 className="card-title text-white">Kizuna
                <div className="badge badge-secondary">Jan, 2023</div>
                </h2>
            <p></p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline text-white">React.js</div> 
            <div className="badge badge-outline text-white">CSS</div>
            <div className="badge badge-outline text-white">HTML</div>
            </div>
            </div>
          </div>

          <div className="card w-96 shadow-xl bg-button hover:scale-110">
          <Image
                        src="/pomo.PNG" 
                        height={450}
                        width={500}
                        alt="ubc image"
                    />
            <div className="card-body">
                <h2 className="card-title text-white">Pomo&apos;s Paradise
                <div className="badge badge-secondary">Feb, 2023</div>
                </h2>
            <p></p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline text-white">React.js</div> 
            <div className="badge badge-outline text-white">CSS</div>
            <div className="badge badge-outline text-white">HTMl</div>
            </div>
            </div>
          </div>

          </div>

        <div className="flex flex-col items-center gap-4">

        <div>
          <h1 class=" mt-5 text-black underline">Archived Projects</h1>
        </div>
        
          {/* <div className="flex items-center justify-center">
            <div className="card w-150 bg-button text-white shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Hi, welcome to my website!</h2>
                <p>I&apos;m Kennedy :)</p>
                <p>I&apos;m currently a student at the University of British Columbia</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div> */}
          {/* <div className="flex items-center justify-center">
            <div className="card w-50  bg-base text-black shadow-xl">
              <div className="card-body flex items-center justify-center">
                <div className="flex justify-start">Some languages I have experience in include:</div>
              </div>
            </div>
          </div> */}


        </div>
      </div>
    </div>
  </div>
  );
};

export default Projects;