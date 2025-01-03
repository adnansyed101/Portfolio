import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaNode } from "react-icons/fa";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const skills = [
    { id: 1, element: <FaHtml5 /> },
    { id: 2, element: <FaCss3Alt /> },
    { id: 3, element: <FaNodeJs /> },
    { id: 4, element: <FaReact /> },
    { id: 5, element: <FaNode /> },
    { id: 6, element: <RiTailwindCssFill /> },
    { id: 7, element: <RiFirebaseFill /> },
    { id: 8, element: <SiExpress /> },
    { id: 9, element: <SiMongodb /> },
  ];
  return (
    <div className="container mx-auto mb-10">
      <h1 className="mb-5 text-5xl font-bold text-center">Skills</h1>
      <div className="flex overflow-hidden space-x-6 group">
        <div className="flex space-x-6 animate-loop-scroll group-hover:paused">
          {skills.map((skill) => (
            <div key={skill.id} className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-24 rounded-full text-4xl">
                {skill.element}
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex space-x-6 animate-loop-scroll group-hover:paused"
          aria-hidden="true"
        >
          {skills.map((skill) => (
            <div key={skill.id} className="avatar placeholder">
              <div className="bg-neutral text-neutral-content w-24 rounded-full text-4xl">
                {skill.element}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
