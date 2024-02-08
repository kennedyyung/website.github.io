import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="container min-h-screen bg-base">
      <div className="grid min-h-screen">
        <div className="py-15" id="projects">
          <div className="font-extrabold text-5xl text-black mb-10 ml-10">Projects</div>

          <div className="grid grid-cols-2 grid-flow-row gap-5 ml-10">
            <Link href="/Inteflow">
              <div className="card w-96 shadow-xl bg-button hover:scale-110 ease-in-out duration-300">
                <figure><img src="/Inteflow.png" alt="Inteflow" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-white">Inteflow
                    <div className="badge badge-secondary text-white">Aug, 2023</div>
                  </h2>
                  <p></p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline text-white">Swift</div>
                    <div className="badge badge-outline text-white">SwiftUI</div>
                  </div>

                </div>
              </div>

            </Link>



            <Link href="/Kizuna">
              <div className="card w-96 shadow-xl bg-button hover:scale-110 ease-in-out duration-300">
              <figure><img src="/kizuna.jpg" alt="Kizuna" /></figure>

                <div className="card-body">
                  <h2 className="card-title text-white">Kizuna
                    <div className="badge badge-secondary text-white">Jan, 2023</div>
                  </h2>
                  <p></p>
                  <div className="card-actions justify-end">

                    <div className="badge badge-outline text-white">React.js</div>
                    <div className="badge badge-outline text-white">CSS</div>
                    <div className="badge badge-outline text-white">HTML</div>

                  </div>
                </div>

              </div>
            </Link>

            <Link href="/HarmonyHealth">
              <div className="card w-96 shadow-xl bg-button hover:scale-110 ease-in-out duration-300">

              <figure><img src="/HarmonyHealth.png" alt="HarmonyHealth" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-white">Harmony Health
                    <div className="badge badge-secondary text-white">Jan, 2024</div>
                  </h2>
                  <p></p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline text-white">React.js</div>
                    <div className="badge badge-outline text-white">TailwindCSS</div>
                    <div className="badge badge-outline text-white">Typescript</div>
                  </div>
                </div>

              </div>
            </Link>

            <Link href="/HarvestHub">
              <div className="card w-96 shadow-xl bg-button hover:scale-110 ease-in-out duration-300">

              <figure><img src="/Harvesthub.png" alt="Harvesthub" /></figure>
                <div className="card-body">
                  <h2 className="card-title text-white">Harvest Hub
                    <div className="badge badge-secondary text-white">Jan, 2024</div>
                  </h2>
                  <p></p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline text-white">Figma</div>
                  </div>
                </div>

              </div>
            </Link>

            <Link href="/Pomo">
              <div className="card w-96 shadow-xl bg-button hover:scale-110 ease-in-out duration-300">
                <figure><img src="/pomo.PNG" alt="Inteflow" /></figure>

                <div className="card-body">
                  <h2 className="card-title text-white">Pomo&apos;s Paradise
                    <div className="badge badge-secondary text-white">Feb, 2023</div>
                  </h2>
                  <p></p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline text-white">React.js</div>
                    <div className="badge badge-outline text-white">CSS</div>
                    <div className="badge badge-outline text-white">HTML</div>

                  </div>
                </div>
              </div>

            </Link>


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