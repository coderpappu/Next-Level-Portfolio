import "./App.css";
import Heading from "./components/Heading";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="relative bg-[#0F172A] w-full h-auto overflow-hidden ">
      <div className="absolute bottom-44 top-96 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-15 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-35 xl:h-40 xl:w-[400px]"></div>

      <div className="absolute right-[28%] top-0 hidden h-[200px] w-[200px] rotate-45 bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-20 lg:-top-22 lg:-right-28 lg:h-[300px] lg:w-[300px] xl:h-[500px] xl:w-[500px] rounded-full z-20"></div>

      <span className="absolute bottom-0 top-[400px] right-1/3 w-[250px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] rounded-full bg-gradient-to-tr from-violet-600 to-indigo-800 blur-[100px] opacity-35 -ml-[5%] -mb-[5%]"></span>

      <span className="absolute bottom-0 top-[32%] right-[58%] w-[300px] sm:w-[180px] md:w-[300px] lg:w-[300px] h-[300px] sm:h-[180px] md:h-[300px] lg:h-[300px] rounded-full bg-gradient-to-tr from-violet-600 to-indigo-800 blur-[100px] opacity-35 -ml-[5%] -mb-[5%]"></span>
      <Layout />
    </div>
  );
}

export default App;
