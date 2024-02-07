// import React from "react"

// const HomePage = () => {
//   return (
//     <div className="container bg-base">
//       <div className="grid place-content-center min-h-screen">
//       <div className="font-extrabold text-5xl text-black mb-12 mt-100">Hi, welcome to my website!</div>
//         <div className="flex flex-col items-center gap-4">

//         <div className="chat chat-start">
//           <div className=" justify-start chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
//         </div>

//           <div className="card w-150 bg-button text-white shadow-xl">
//             <div className="card-body flex items-center justify-center">
//               <h2 className="card-title">Hi, welcome to my website!</h2>
//               <p>I&apos;m Kennedy :)</p>
//               <p>I&apos;m currently a student at the University of British Columbia </p>
//               <div className="card-actions justify-end">
//               </div>
//             </div>
//           </div>

//           <div className="card w-150 h-85 bg-base text-black shadow-xl">
//   <div className="card-body flex items-center justify-center">
//     <div className="flex justify-start">Some languages I have experience in include:</div>
//     <button className="btn no-animation">
//       <img className="w-10 h-18" src="java.png" alt="Image Description" /> 
//     </button>
//   </div>
// </div>



//         </div>

//       </div>


//     </div>
//   )
// }

// export default HomePage
import React from "react";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";


const index = () => {
  return (
    <main className="bg-base overflow-hidden snap-y scroll-smooth">
      <HomePage/>
      <Education/>
      <Experience/>
      <Projects/>
    </main>


  );
};

export default index;
