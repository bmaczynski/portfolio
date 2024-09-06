import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiGithub,
} from "react-icons/si";


const mySkills = [
  {
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Node",
    icon: <SiNodedotjs />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-indigo-600 transition-all dark:bg-darkest"
    >
      <div className="mx-auto grid w-full max-w-screen-lg gap-10 py-20 px-5 text-center lg:flex lg:flex-wrap">
        {mySkills.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex select-none items-center gap-1.5 text-5xl font-bold tracking-tight text-white lg:mx-auto lg:gap-2.5 lg:text-4xl"
            >
              <div className="text-4xl lg:text-3xl">{skill.icon}</div>
              {skill.name}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
