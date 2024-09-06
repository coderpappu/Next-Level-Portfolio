import "./App.css";
import Heading from "./components/Heading";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

function App() {
  return (
    <div className="relative bg-[#0F172A] w-full h-[1200px] overflow-hidden ">
      <div className="absolute bottom-44 top-96 -left-64 hidden h-[150px] w-[900px] -rotate-45 rounded-full bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-24 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>

      <div className="absolute right-[28%] top-0 hidden h-[200px] w-[200px] rotate-45 bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-20 lg:-top-22 lg:-right-28 lg:h-[300px] lg:w-[300px] xl:h-[500px] xl:w-[500px] rounded-full z-20"></div>

      <Layout />
    </div>
  );
}

export default App;
