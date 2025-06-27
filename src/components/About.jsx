import ProfileImg from "../assets/pic.jpg";

const About = () => {
  return (
    <div className="text-white my-20 px-4">
      <div className="text-center">
        <h3
          className="text-5xl font-sora font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          About US
        </h3>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap justify-between items-start mt-20 gap-8">
        {/* Profile Card */}
        <div className="w-full lg:w-[20%] relative m-auto">
          <div className="w-[260px] h-[350px] rounded-md p-[3px] bg-gradient-to-r from-sky-400 to-indigo-800 m-auto">
            <div className="w-full h-full bg-[#131e36] rounded-md"></div>
          </div>

          <div
            className="
      group 
      w-[260px] h-[350px] rounded-md p-[3px] bg-gradient-to-r from-blue-600 to-sky-400 
      absolute top-[-20px]
      left-1/2 -translate-x-1/2
      lg:left-[-20px] lg:translate-x-0
      transition-transform duration-300 ease-in-out -rotate-6
      hover:scale-105 hover:rotate-3 hover:shadow-2xl hover:shadow-blue-500/30

    "
          >
            <div className="w-full h-full bg-[#0F172A] rounded-md overflow-hidden">
              <img
                src={ProfileImg}
                alt="profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* About Text */}
        <div className="w-full lg:w-[60%] border-t lg:border-t-0 lg:border-l border-violet-600 border-opacity-45 border-dashed pt-8 lg:pt-0 lg:pl-10">
          <div className="w-full lg:w-[80%] h-auto p-[2px] rounded-md bg-gradient-to-l to-[#37baf814] via-[#3730a38a] from-[#1d1b4793]">
            <div className="bg-[#0F172A]">
              <div
                className="rounded-md text-justify p-6"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(112 26 216 / 10%) 0%, rgba(143, 134, 153, 0) 100%)",
                }}
              >
                <h3 className="text-[#c3c3c3] text-sm md:text-base leading-relaxed">
                  Hello, I'm Pappu Dey. Creative Web Designer And Developer with
                  more than 5 years experience. I design your website whereas
                  multidisciplinary intellectual capital. Distinctively
                  synergize market-driven master and prospective channels.
                  Dramatically drive an expanded array of expertise with modern
                  technology. Completely cultivate standardized manufactured
                  processes. Continue transforming process-centric systems
                  rather than compelling growth strategies. Energistically
                  streamline low-risk high-yield supply chains via scalable
                  intellectual capital.
                </h3>

                <button className="px-6 py-2 bg-gradient-to-r from-violet-950 via-violet-900 to-violet-950 rounded-md mt-5 font-sora text-sm">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
