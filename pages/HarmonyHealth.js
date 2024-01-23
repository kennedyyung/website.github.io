import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HarmonyHealth = () => {
    return (
        <div className="container bg-base flex flex-col items-center">
        <h1 className="font-bold text-2xl text-black">Harmony Health</h1>




        <div className="card w-3/4 bg-txt text-black">
<div className="card-body items-center text-center">
<p>Harmony Health was created during NWHacks 2024</p>

  <div className="flex flex-row">
    <Link href="https://github.com/kennedyyung/Nwhacks2024"rel="noopener noreferrer" target="_blank" className="font-bold text-black underline mr-10">
      Github
    </Link>
    <Link href="https://devpost.com/software/harmony-health-qkhbgw?ref_content=user-portfolio&ref_feature=in_progress" rel="noopener noreferrer" target="_blank" className="font-bold text-black underline">
      Devpost
    </Link>
  </div>
<div className="card-actions justify-end">
</div>
</div>
</div>

    </div>
    );
}

export default HarmonyHealth;