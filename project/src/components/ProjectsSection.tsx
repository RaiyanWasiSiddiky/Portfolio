import { ArrowRight, ExternalLink, Github } from "lucide-react";

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    githubUrl: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "AirBnB Room Rental Website",
        description: "A full-stack web application that allows users to book rooms, manage listings, and handle reservations.",
        image: "/projects/airbnb.png",
        tags: ["React", "Node.js", "Tailwind CSS", "MongoDB", "Express"],
        demoUrl: "https://skynet1.netlify.app", 
        githubUrl: "https://github.com/Learnathon-By-Geeky-Solutions/skynet",
    },
    {
        id: 2,
        title: "Movie Review Classifier",
        description: "A machine learning project that classifies movie reviews as positive or negative using natural language processing techniques.",
        image: "/projects/movie_review_classifier.png",
        tags: ["Python", "Machine Learning", "NLP", "TensorFlow"],
        demoUrl: "#",
        githubUrl: "https://github.com/RaiyanWasiSiddiky/NLP-Movie-Review-Classification",
    },
    {
        id: 3,
        title: "Airport Management System",
        description: "A comprehensive system for managing airport operations, including flight schedules, passenger management, and baggage handling.",
        image: "/projects/airport.png",
        tags: ["PHP", "MySQL", "Bootstrap"],
        demoUrl: "#",
        githubUrl: "https://github.com/RaiyanWasiSiddiky/Airport-management-and-ticket-booking-website",
    },
]

export const ProjectSection = () => {
    return (
        <>
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of the projects I've worked on that showcase my skills and interests in web development, machine learning, and more.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div 
                        key={key} 
                        className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-secondary-foreground" key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-4">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                        href={project.demoUrl} 
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a 
                                        href={project.githubUrl} 
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        target="_blank"
                                        >
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>

                            </div>
                            

                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                    href="https://github.com/RaiyanWasiSiddiky" 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Check My GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}