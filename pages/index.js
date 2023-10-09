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

const HomePage = () => {
  return (
    <div className="container bg-base">
      <div className="grid min-h-screen">
        <div className="py-20"> 
          <div className="font-extrabold text-5xl text-black mb-10 ml-20">Hi, welcome to my website!</div>

          <div className="chat chat-start flex justify-start ml-20">
              <div className="justify-start chat-bubble bg-button text-white">
                <div className="text-xl font-bold">About me</div>
                <p>I&apos;m Kennedy, and I&apos;m currently in my third year at the University of British Columbia! I&apos;m pursuing a bachelors of science with a specialization in math.Aside from school I enjoy playing basketball, drawing, and playing video games. I am currently building on my CSS/Tailwind and Javascript skills, and am hoping to learn Python next!</p>
                <p>This website is still under construction but I hope you enjoy what I have so far :)</p>
              </div>
            </div>
          
            <p className="ml-20 font-extrabold">Languages I have experience in include:</p>  
            <button className="btn no-animation">
              Java
            </button>
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

export default HomePage;
