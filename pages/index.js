import React from "react"

const HomePage = () => {
  return (
    <div className="container bg-base">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">

          <div className="card w-96 bg-button text-white shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Hi, welcome to my website!</h2>
              <p>I'm Kennedy :)</p>
              <p>I'm studying at the University of British Columbia </p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HomePage
