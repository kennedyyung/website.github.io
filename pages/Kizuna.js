import React from "react";
import Image from "next/image";
import Link from "next/link";

const Kizuna = () => {
    return (
        <div className="container min-h-screen bg-base dark:bg-dark_base flex flex-col items-center mt-10">
            <h1 className="font-bold text-2xl text-black dark:text-dark_text mt-10">Kizuna</h1>




            <div className="card w-3/4 bg-txt text-white mt-5">
  <div className="card-body items-center text-center">
    <p>Kizuna was created during NWHacks 2023, and is a livestreaming web application that 
                implements LivePeer Studio&apos;s API for video Livestream and on demand to help create stronger communities in real time. This was built with aims to increase exposure for small creators through alleviating the barriers of being a new streamer. The application was created using a React app, with UI implemented through CSS and HTML.</p>

      <div className="flex flex-row">
        <Link href="https://github.com/jn-han/NWHacks2023"rel="noopener noreferrer" target="_blank" className="font-bold underline mr-10">
          Github
        </Link>
        <Link href="https://devpost.com/software/kizuna-gevr8p" rel="noopener noreferrer" target="_blank" className="font-bold underline">
          Devpost
        </Link>
      </div>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>

        </div>


    );
};

export default Kizuna;