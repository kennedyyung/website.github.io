import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="container bg-base ">
      <div className="grid min-h-screen mt-10">
        <div className="py-15" id="projects">
          <div className="grid place-items-center">
            <div className="font-extrabold text-5xl text-black mb-10">Projects</div>
          </div>
          <hr />

          <div className="grid grid-rows-3 grid-flow-row gap-5 mt-10">
            <div className="grid grid-cols-2 place-items-center">
              <Link href="/Inteflow">
                <div className="card w-96 shadow-xl bg-txt hover:scale-110 ease-in-out duration-300 text-white">
                  <figure><img src="/Inteflow.png" alt="Inteflow" /></figure>
                  <div className="card-body">
                    <h2 className="card-title ">Inteflow
                      <div className="badge border-white bg-white text-black">Aug, 2023</div>
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline badge-lg text-sm">Swift</div>
                      <div className="badge badge-outline badge-lg text-sm">SwiftUI</div>
                    </div>

                  </div>
                </div>

              </Link>

              <Link href="/Kizuna">
                <div className="card w-96 shadow-xl bg-txt hover:scale-110 ease-in-out duration-300 text-white">
                  <figure><img src="/kizuna.jpg" alt="Kizuna" /></figure>

                  <div className="card-body">
                    <h2 className="card-title ">Kizuna
                      <div className="badge bg-white border-white text-black">Jan, 2023</div>
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">

                      <div className="badge badge-outline badge-lg text-sm">React.js</div>
                      <div className="badge badge-outline badge-lg text-sm">CSS</div>
                      <div className="badge badge-outline badge-lg text-sm">HTML</div>

                    </div>
                  </div>

                </div>
              </Link>
            </div>

            <div className="grid grid-cols-2 place-items-center">
              <Link href="/HarmonyHealth">
                <div className="card w-96 shadow-xl bg-txt hover:scale-110 ease-in-out duration-300 text-white">

                  <figure><img src="/HarmonyHealth.png" alt="HarmonyHealth" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Harmony Health
                      <div className="badge bg-white border-white text-black">Jan, 2024</div>
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline badge-lg text-sm">React.js</div>
                      <div className="badge badge-outline badge-lg text-sm">TailwindCSS</div>
                      <div className="badge badge-outline badge-lg text-sm">Typescript</div>
                    </div>
                  </div>

                </div>
              </Link>

              <Link href="/HarvestHub">
                <div className="card w-96 shadow-xl bg-txt hover:scale-110 ease-in-out duration-300 text-white">

                  <figure><img src="/Harvesthub.png" alt="Harvesthub" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Harvest Hub
                      <div className="badge bg-white border-white text-black">Jan, 2024</div>
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline badge-lg text-sm">Figma</div>
                    </div>
                  </div>

                </div>
              </Link>
            </div>

            <div className="grid grid-cols-2 place-items-center">
              <Link href="/Pomo">
                <div className="card w-96 shadow-xl bg-txt hover:scale-110 ease-in-out duration-300 text-white">
                  <figure><img src="/pomo.PNG" alt="Inteflow" /></figure>

                  <div className="card-body">
                    <h2 className="card-title">Pomo&apos;s Paradise
                      <div className="badge bg-white border-white text-black">Feb, 2023</div>
                    </h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">React.js</div>
                      <div className="badge badge-outline">CSS</div>
                      <div className="badge badge-outline">HTML</div>

                    </div>
                  </div>
                </div>

              </Link>
            </div>


          </div>

          <div className="flex flex-col items-center gap-4">

            <div>
              <Link href="/Archived">
                <h1 className=" mt-5 text-black underline">School Projects</h1>
              </Link>

            </div>
            <p></p>




          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;