import React from "react";
import Image from "next/image";

const Projects = () => {
    return (
    <div className="container bg-base">
    <div className="grid min-h-screen">
      <div className="py-20"> 
        <div className="font-extrabold text-5xl text-black mb-10 ml-20">Hi, welcome to my website!</div>

          <div className="grid grid-cols-2 grid-flow-row gap-5 ml-10">

          <div className="card w-96 bg-base-100 shadow-xl">
          <Image
                        src="/ubc.png" 
                        height={100}
                        width={100}
                        alt="ubc image"
                    />
            <div className="card-body">
                <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
                </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
            </div>
            </div>
          </div>

            <div className="card w-150 bg-button text-white shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Hi, welcome to my website!</h2>
                <p>I&apos;m Kennedy :)</p>
                <p>I&apos;m currently a student at the University of British Columbia</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>

            <div className="card w-150 bg-button text-white shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Hi, welcome to my website!</h2>
                <p>I&apos;m Kennedy :)</p>
                <p>I&apos;m currently a student at the University of British Columbia</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>

          </div>

        <div className="flex flex-col items-center gap-4">
        
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