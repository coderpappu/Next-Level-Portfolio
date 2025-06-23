import ProfileImg from "../assets/pappu-dey.jpg";
const About = () => {
  return (
    <div className=" text-white my-20">
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
      <div className="flex flex-wrap justify-between mt-20 ">
        <div className="w-[20%] relative m-auto">
          <div>
            {/* card  */}
            <div
              className="w-[260px] h-[350px] rounded-md p-[3px] box-border bg-gradient-to-r from-sky-400 to-indigo-800"
              id="profile_card_box"
            >
              <div className="w-full h-full  bg-[#131e36] rounded-md"></div>
            </div>

            <div
              className="w-[260px] h-[350px] rounded-md p-[3px] box-border bg-gradient-to-r  from-blue-600 hover:to-sky-400 to-sky-400 absolute top-[-20px] left-[-20px]  transform  transition-transform duration-300 ease-in-out -rotate-6"
              id="profile_card_box "
            >
              <div className="w-full h-full  bg-[#0F172A] rounded-md">
                <img src={ProfileImg} alt="" className="h-[330px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[60%] border-l border-violet-600 border-opacity-45 border-dashed">
          <div
            className="w-[80%] h-[250px] p-[2px] ml-10 rounded-md bg-gradient-to-l to-[#37baf814 ] via-[#3730a38a]  from-[#1d1b4793]"
            id="profile_card"
          >
            <div className="bg-[#0F172A]">
              <div
                className="w-full h-[300px] rounded-md text-justify p-6  "
                id="about_us"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(112 26 216 / 10%) 0%, rgba(143, 134, 153, 0) 100%)",
                }}
              >
                <h3 className="text-[#c3c3c3]">
                  Hello, I'm Pappu Dey. Creative Web Designer And Developer With
                  More Than 5 Years Experience.I Design Your Website. whereas
                  multidisciplinary intellectual capital.Distinctively synergize
                  market-driven master and prospective channels.Dramatically
                  drive an expanded array of expertise with modern
                  technology.Completely cultivate standardized
                  manufactured.Continue transform process centric systems rather
                  than compelling growth strategies.Energistically streamline
                  low-risk high-yield supply chains via scalable intellectual
                  capital
                </h3>

                <button className="px-8 py-3 bg-gradient-to-r from-violet-950 via-violet-900 to-violet-950 rounded-md mt-5 font-sora text-sm">
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
