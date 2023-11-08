//COMPONENT
import Abuot from "./component/AboutMe";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Project from "./component/Project";
import DarkModeButton from "@/app/component/darkMode/DarkMode";



export default function root() {
  return (
    <div>
      <Home />
      <Abuot />
      <Project />
      <DarkModeButton className={"fixed right-4 bottom-16 "} />  
      <Contact />
      <Footer />
    </div>
  );
}