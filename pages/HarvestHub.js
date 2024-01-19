import React from "react";
import Image from "next/image";
import Link from "next/link";

const HarvestHub = () => {
    return (
        <div className="container bg-base flex flex-col items-center">
            <h1 className="font-bold text-2xl text-black">Harvest Hub</h1>

            <div className="card w-3/4 bg-txt text-black">
                <p>HarvestHub was created during UX-athon 2024 using Figma. The aims of this application was to tackle the issue of food waste </p>
            </div>
        </div>
    );
};

export default HarvestHub;