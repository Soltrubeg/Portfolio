import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
      title: "Portfolio",
      description: "Diese Seite.",
      tools: ["Astro", "React", "Tailwind"],
      date: "Februar 2025",
      link: ".",
      github: "https://github.com/Soltrubeg/Portfolio",
    },
    {
      title: "Flow",
      description: "Node-basiertes Rechensystem welches alles gleichzeitig verarbeitet.",
      tools: ["Astro", "React", "React-Flow", "Tailwind"],
      date: "Februar 2025",
      link: "https://soltrubeg.github.io/Flow/",
      github: "https://github.com/Soltrubeg/Flow",
      thumbnail: "Projects/flow.png",
    },
    {
      title: "Word Bomb",
      description: "Finde ein deutsches Wort welches zwei Buchstaben in angebener Reihenfolge beinhaltet.",
      tools: ["Astro", "React", "Tailwind"],
      date: "Februar 2025",
      link: "https://soltrubeg.github.io/Word-Bomb/",
      github: "https://github.com/Soltrubeg/Word-Bomb",
      thumbnail: "Projects/wordbomb.png",
    },
    {
      title: "Clever Otto",
      description: "Grid-basiertes Gedächtnis-spiel mit einstellbarer Spielfeld-Größe.",
      tools: ["HTML", "CSS", "JavaScript"],
      date: "März 2024",
      link: "https://soltrubeg.github.io/Clever-Otto/",
      github: "https://github.com/Soltrubeg/Clever-Otto",
      thumbnail: "Projects/cleverotto.png",
    },
    {
      title: "Dino Screens",
      description: "Navigiere einen von 4 Dinos durch zufällige Level ohne zu sterben.",
      tools: ["Godot", "GDScript"],
      date: "Januar 2025",
      link: "https://soltrubeg.itch.io/dino-screens",
      github: "https://github.com/Soltrubeg/DinoScreens",
      thumbnail: "Projects/dinoscreens.png",

    },
    {
      title: "Space Menace",
      description: "Steuer ein Raumschiff um Level mit immer schwieriger werdenden Gegner-wellen zu bezwingen.",
      tools: ["Godot", "GDScript"],
      date: "Januar 2025",
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
        placeholder="Suche Projekte..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border bg-gray-100 border-gray-950 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 text-gray-950 placeholder:text-gray-950"
    />


      <div className="mt-4 grid gap-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))
        ) : (
          <p className="text-gray-950">Keine passenden Projekte gefunden.</p>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
