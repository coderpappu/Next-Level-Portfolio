import React from "react";

const Counter = () => {
  return (
    <div className="w-full py-5 flex flex-wrap justify-center items-center opacity-70">
      {/* First Counter */}
      <div className="flex-col flex  sm:flex-row flex-wrap justify-center text-center items-center sm:text-left w-1/2 md:w-[25%] mb-10 sm:mb-4 px-4">
        <h2 className="text-6xl sm:text-6xl text-white font-poppins font-bold">
          04
        </h2>
        <div className="sm:ml-3">
          <h2 className="text-base sm:text-lg text-white font-sora">
            Years of
          </h2>
          <h2 className="text-base sm:text-lg text-white font-sora">
            Experience
          </h2>
        </div>
      </div>

      {/* Second Counter */}
      <div className="flex-col flex  sm:flex-row flex-wrap justify-center text-center sm:text-left  items-center w-1/2 md:w-[25%] mb-10 sm:mb-4 px-4">
        <h2 className="text-6xl sm:text-6xl text-white font-poppins font-bold">
          45+
        </h2>
        <div className="sm:ml-3">
          <h2 className="text-base sm:text-lg text-white font-sora">
            Projects
          </h2>
          <h2 className="text-base sm:text-lg text-white font-sora">
            Completed
          </h2>
        </div>
      </div>

      {/* Third Counter */}
      <div className="flex-col flex  sm:flex-row flex-wrap justify-center text-center items-center sm:text-left w-1/2 md:w-[25%] mb-4 px-4">
        <h2 className="text-5xl sm:text-6xl text-white font-poppins font-bold">
          35+
        </h2>
        <div className="sm:ml-3">
          <h2 className="text-base sm:text-lg text-white font-sora">Happy</h2>
          <h2 className="text-base sm:text-lg text-white font-sora">Clients</h2>
        </div>
      </div>

      {/* Fourth Counter */}
      <div className="flex-col flex  sm:flex-row flex-wrap justify-center text-center items-center sm:text-left w-1/2 md:w-[25%] px-4">
        <h2 className="text-5xl sm:text-6xl text-white font-poppins font-bold">
          20K
        </h2>
        <div className="sm:ml-3">
          <h2 className="text-base sm:text-lg text-white font-sora">Working</h2>
          <h2 className="text-base sm:text-lg text-white font-sora">Hours</h2>
        </div>
      </div>
    </div>
  );
};

export default Counter;
