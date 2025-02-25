import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  tools: string[];
  date: string;
  link?: string;
  github?: string;
  thumbnail?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tools, date, link, github, thumbnail }) => {
  return (
    <div className="p-6 bg-gradient-to-t from-gray-900 to-gray-950 rounded-br-4xl shadow-lg border border-rose-900 border-3 border-l-10 transition duration-300 ease-in-out">
      {thumbnail && (
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover border border-rose-600 shadow-md hover:h-100 transition-all duration-300 ease-in-out"/>
      )}
      <h2 className="text-3xl font-bold text-teal-400 mt-4">{title.toUpperCase()}</h2>
      <p className="text-gray-200 mt-2">{description}</p>
      <hr className="m-5 ml-0 mr-0 border-gray-600"></hr>
      <div className="mt-3">
        <span className="text-sm font-semibold text-gray-300">Created with:</span>
        <ul className="flex flex-wrap gap-2 mt-1">
          {tools.map((tool, index) => (
            <li key={index} className="bg-neutral-950 text-teal-400 px-3 py-1 rounded-md text-sm">
              {tool}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-2 text-sm text-gray-400">
        Created in: {date}
      </p>
      {(link || github) && (
        <div className="mt-4 flex justify-between">
          {link && (
            <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-teal-400 p-3 transition duration-300 ease-in-out group"
          >
            To the project
            {/* Top Border */}
            <span className="absolute top-0 left-1/2 w-0 h-[2px] bg-rose-800 transition-all duration-250 ease-in-out group-hover:w-full group-hover:left-0"></span>
            
            {/* Bottom Border */}
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-rose-800 transition-all duration-250 ease-in-out group-hover:w-full group-hover:left-0"></span>
          </a>
          )}
          {github && (
            <a
              href={github}
              className="text-teal-500 hover:text-teal-300 transition duration-300 ease-in-out"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;