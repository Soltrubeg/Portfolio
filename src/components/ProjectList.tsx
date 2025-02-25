import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
      title: "Flow",
      description: "Node-based computing system that processes everything at the same time.",
      tools: ["Astro", "React", "React-Flow", "Tailwind"],
      date: "February 2025",
      link: "https://soltrubeg.github.io/Flow/",
      github: "https://github.com/Soltrubeg/Flow",
      thumbnail: "Projects/flow.png",
    },
    {
      title: "Word Bomb",
      description: "Find a German word that contains two letters in the order indicated.",
      tools: ["Astro", "React", "Tailwind"],
      date: "February 2025",
      link: "https://soltrubeg.github.io/Word-Bomb/",
      github: "https://github.com/Soltrubeg/Word-Bomb",
      thumbnail: "Projects/wordbomb.png",
    },
    {
      title: "Clever Otto",
      description: "Grid-based memory game with adjustable playing field size.",
      tools: ["HTML", "CSS", "JavaScript"],
      date: "March 2024",
      link: "https://soltrubeg.github.io/Clever-Otto/",
      github: "https://github.com/Soltrubeg/Clever-Otto",
      thumbnail: "Projects/cleverotto.png",
    },
    {
      title: "Dino Screens",
      description: "Navigate one of 4 dinos through random levels without dying.",
      tools: ["Godot", "GDScript"],
      date: "January 2025",
      link: "https://soltrubeg.itch.io/dino-screens",
      github: "https://github.com/Soltrubeg/DinoScreens",
      thumbnail: "Projects/dinoscreens.png",

    },
    {
      title: "Space Menace",
      description: "Control a spaceship to conquer levels with increasingly difficult waves of enemies.",
      tools: ["Godot", "GDScript"],
      date: "January 2025",
      link: "https://soltrubeg.itch.io/space-menace",
      github: "",
      thumbnail: "Projects/spacemenace.png"
    },
  ];

const ProjectList: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.description.toLowerCase().includes(search.toLowerCase()) ||
    project.tools.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border bg-gradient-to-t from-gray-900 to-gray-950 border-rose-600 rounded-md shadow-sm focus:outline-0 text-teal-400 placeholder:text-teal-500"
    />


      <div className="mt-4 grid gap-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))
        ) : (
          <p className="text-rose-400">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
