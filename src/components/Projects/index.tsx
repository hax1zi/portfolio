import { useEffect, useState } from "react";
import Card from "./components/ProjectCard";

interface projetoDataType {
    id: number;
    images: Array<string>;
    title: string;
    technologies: Array<string>;
    description: string;
    liveDemo: string;
    github: string;
}

export default function Projects() {
    const [dataProjects, setDataProjects] = useState<projetoDataType[]>([]);

    useEffect(() => {
        fetch("https://backend-portfolio-one.vercel.app/projects")
            .then((response) => response.json())
            .then((data) => {
                setDataProjects(data.projects);
            })
            .catch((error) => console.error(error));
    }, []);

    return (
        <section
            id="projects"
            className="w-full py-20 h-full flex justify-center items-center flex-col"
            aria-label="Alguns dos meus projetos"
        >
            <h2 className="text-4xl font-bold max-sm:text-2xl mb-8">
                Projetos
            </h2>
            {dataProjects.map((project) => (
                <div className="mb-40 max-lg:mb-20">
                    <Card
                        direction={project.id === 2 ? "left" : ""}
                        project={project}
                        key={project.id}
                    />
                </div>
            ))}
        </section>
    );
}
