import djangoImg from "../assets/django.svg";
import DockerImg from "../assets/Docker.png";
import laravelImg from "../assets/Express.png";
import gitImg from "../assets/git.svg";
import githubImg from "../assets/github-v.svg";
import JsImg from "../assets/js.png";
import mongoImg from "../assets/mongo.svg";
import mysqlImg from "../assets/mysql.svg";
import nextjsImg from "../assets/nextjs.png";
import nginxImg from "../assets/NGINX.png";
import nodeImg from "../assets/node-js.svg";
import postmanImg from "../assets/postman.svg";
import prismaImg from "../assets/prisma.png";
import postgresqlImg from "../assets/postgresql.png";
import pythonImg from "../assets/python-logo.png";
import reactImg from "../assets/reactjs.png";
import reduxImg from "../assets/redux.svg";
import tailwindImg from "../assets/tailwind.svg";
import typescriptImg from "../assets/Typescript.png";
import wordpressImg from "../assets/wordpress.png";

const categories = [
  {
    label: "Frontend",
    techs: [
      { name: "React.js", img: reactImg },
      { name: "Next.js", img: nextjsImg },
      { name: "React Native", img: reactImg },
      { name: "TypeScript", img: typescriptImg },
      { name: "Redux", img: reduxImg },
      { name: "Tailwind CSS", img: tailwindImg },
      { name: "JavaScript", img: JsImg },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js", img: nodeImg },
      { name: "Express", img: laravelImg },
      { name: "Python", img: pythonImg },
      { name: "Django", img: djangoImg },
      { name: "WordPress", img: wordpressImg },
    ],
  },
  {
    label: "Database",
    techs: [
      { name: "PostgreSQL", img: postgresqlImg },
      { name: "MySQL", img: mysqlImg },
      { name: "MongoDB", img: mongoImg },
      { name: "Prisma ORM", img: prismaImg },
    ],
  },
  {
    label: "DevOps & Tools",
    techs: [
      { name: "Git", img: gitImg },
      { name: "GitHub", img: githubImg },
      { name: "Nginx", img: nginxImg },
      { name: "Postman", img: postmanImg },
      { name: "Docker", img: DockerImg },
    ],
  },
];

const StackCard = () => {
  return (
    <section
      id="skills"
      className="pt-8 pb-16 lg:pt-12 lg:pb-20 text-white relative isolate"
    >
      {/* Ambient background layers — matches other sections */}
      <div className="absolute top-1/4 -left-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-35 blur-[100px] -z-10" />
      <div className="absolute bottom-10 -right-16 hidden lg:block w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#0dd1d1] to-[#0EABE6] opacity-15 blur-[100px] -z-10" />

      <div className="text-center mb-16">
        <span className="text-xs font-sora text-[#0EABE6]/70 uppercase tracking-[0.3em] font-semibold">
          Skills
        </span>
        <h3
          className="text-3xl lg:text-5xl font-sora font-bold mt-3 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(14, 165, 234), rgb(13, 209, 209) 51%, rgb(14, 165, 234))",
          }}
        >
          Technology
        </h3>
        <p className="text-[#ffffffa0] mt-3 font-sora text-base">
          Tools and technologies I use daily to build production software
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {categories.map((category) => (
            <div key={category.label}>
              <h4 className="text-xs font-sora text-[#0EABE6]/70 font-semibold uppercase tracking-[0.25em] mb-4">
                {category.label}
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] hover:border-white/[0.1] px-3.5 py-2 transition-colors duration-300 group"
                  >
                    <span className="w-6 h-6 shrink-0 rounded-full bg-white/85 flex items-center justify-center overflow-hidden p-0.5">
                      <img
                        src={tech.img}
                        alt={tech.name}
                        title={tech.name}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </span>
                    <span className="text-xs font-sora text-white/70 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackCard;
