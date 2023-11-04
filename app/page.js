//COMPONENT
import Abuot from "./component/AboutMe";
import Home from "./component/Home";
import Project from "./component/Project";
import DarkModeButton from "@/app/component/darkMode/DarkMode";



export default function root() {
  return (
    <div className="relative">
      <Home />
      <Abuot />
      <Project />
      <DarkModeButton className={"object-right-bottom"} />  

    </div>
  );
}