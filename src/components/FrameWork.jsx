import { OrbitingCircles } from "./OrbitingCircles";

// Import all icons
import auth0 from "../assets/logos/auth0.svg";
import blazor from "../assets/logos/blazor.svg";
import cplusplus from "../assets/logos/cplusplus.svg";
import csharp from "../assets/logos/csharp.svg";
import css3 from "../assets/logos/css3.svg";
import dotnet from "../assets/logos/dotnet.svg";
import dotnetcore from "../assets/logos/dotnetcore.svg";
import git from "../assets/logos/git.svg";
import html5 from "../assets/logos/html5.svg";
import javascript from "../assets/logos/javascript.svg";
import microsoft from "../assets/logos/microsoft.svg";
import react from "../assets/logos/react.svg";
import sqlite from "../assets/logos/sqlite.svg";
import tailwindcss from "../assets/logos/tailwindcss.svg";
import vitejs from "../assets/logos/vitejs.svg";
import wordpress from "../assets/logos/wordpress.svg";

export function Frameworks() {
  const skills = [
    auth0,
    blazor,
    cplusplus,
    csharp,
    css3,
    dotnet,
    dotnetcore,
    git,
    html5,
    javascript,
    microsoft,
    react,
    sqlite,
    tailwindcss,
    vitejs,
    wordpress,
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((icon, index) => (
          <Icon key={index} src={icon} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills
          .slice()
          .reverse()
          .map((icon, index) => (
            <Icon key={index} src={icon} />
          ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} alt="" className="duration-200 rounded-sm hover:scale-110" />
);
