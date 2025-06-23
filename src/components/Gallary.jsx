import ICPCTEAM from "../assets/icpc-team-BBZDd5ZY.jpg";
import Robotics from "../assets/robot-my-DFfN9_Xa.jpg";
import RLCRobot from "../assets/robotics-rlc-DdnqF7T4.jpg";
import Training from "../assets/traning-4AnB7OrB.jpg";
import { LayoutGrid } from "./layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <div className="text-center">
        <h3
          className="text-5xl font-sora font-bold text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          Gallery of Insights
        </h3>
      </div>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        ICPC Regionalist 2024 - #Newbies
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The ICPC Regionalist 2024 is a team of young, talented programmers who
        have come together to compete in the International Collegiate
        Programming Contest.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Survilance Robot - Team RLC
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The Surveillance Robot is a project by Team RLC that aims to provide
        security and surveillance services to border areas and other sensitive
        locations.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Border Guard Robot
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The Border Guard Robot is a project by me and my friend that aims to
        provide security and surveillance services to border areas and other
        sensitive
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        School IT Seminar - Codex Devware .
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        This is a school IT seminar hosted by Codex Devware, where we discuss IT
        careers and explore various sectors, including Web Development, Software
        Development, and more.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: ICPCTEAM,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: RLCRobot,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: Robotics,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: Training,
  },
];
