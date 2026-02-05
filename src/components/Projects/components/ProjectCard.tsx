import MobileScreen from "./MobileScreen";
import { cn } from "../../../utils/cn";
import Button from "../../Button";
import { Github, Link } from "lucide-react";

interface ProjectCardProps {
    project: {
        id: number;
        images: Array<string>;
        title: string;
        technologies: Array<string>;
        description: string;
        liveDemo: string;
        github: string;
    };
    direction?: "left" | "";
}

export default function ProjectCard({ project, direction }: ProjectCardProps) {
    return (
        <article
            className={cn(
                "flex gap-24 max-lg:gap-0 justify-center flex-wrap",
                direction === "left" && "flex-row-reverse max-lg:flex-row",
            )}
            aria-label={`Projeto: ${project.title}`}
        >
            <div className="relative">
                <div className="w-[400px] h-[300px] overflow-hidden max-sm:w-[350px] max-sm:h-[250px]">
                    <img src={project.images[0]} className="w-full h-full object-cover" />
                </div>
                <MobileScreen direction={direction} image={project.images[1]} />
            </div>

            <div className="max-w-[340px] max-sm:max-w-[300px] space-y-4 flex flex-col justify-center">
                <h3 className="font-bold text-4xl">{project.title}</h3>
                <p className="opacity-80 leading-relaxed text-lg">{project.description}</p>
                <div className="flex gap-4 flex-wrap">
                    {project.technologies.map((tech, index) => (
                        <p className="px-4 py-1 font-medium bg-gray-light dark:text-light dark:bg-gray" key={index}>
                            {tech}
                        </p>
                    ))}
                </div>
                <div className="flex">
                    <Button variant="ghost" className="py-2">
                        <a
                            href={project.github}
                            target="_blank"
                            className="text-blue"
                            rel="noopener noreferrer"
                            aria-label="Código no GitHub"
                        >
                            <Github size={32} />
                        </a>
                    </Button>
                    <Button variant="ghost" className="py-2">
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            className=" text-blue"
                            rel="noopener noreferrer"
                            aria-label="Ver projeto ao vivo"
                        >
                            <Link size={32} />
                        </a>
                    </Button>
                </div>
            </div>
        </article>
    );
}
