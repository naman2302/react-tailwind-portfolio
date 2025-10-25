import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
    id: 1,
    title: "Brain Tumor Classification",
    description: " DL classification model which predicts if there is brain tumor or not",
    image: "/projects/project1.png",
    tags: ["DL", "ML", "Streamlit"],
    demoUrl: "braintumorclassification-6z9sqjqjgqhshbg66jagac.streamlit.app",
    githubUrl: "https://github.com/naman2302/Brain_tumor_classification",
  },
  {
    id: 2,
    title: "AI medical image analyzer",
    description: "Medical image analysis system using Python, OpenCV, and LLaMA APIs ",
    image: "/projects/project2.png",
    tags: ["Llama", "AI", "LLM", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/naman2302/AI_medical_imagle_analyzer",
  },
  {
    id: 1,
    title: "Movie Recommendation",
    description: "Movie recommendation system using Python, NLP, Pandas, and Scikit-Learn. ",
    image: "/projects/project3.png",
    tags: ["NLP", "ML", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/naman2302/Movie_recommendation_system",
  },
]

export const ProjectsSections = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
              Featured <span className="text-primary"> Projects </span>
              </h2>

              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my projects which helped me building my understanding towards the AI/ML domain. Each project was created from scratch by myself.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projects.map((project, key) => (
                  <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-tranform duration-500 group-hover:scale-110"/>
                    </div>

                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">{tag}</span>
                            ))}
                        </div>
                    


                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                            <a href={project.demoUrl} 
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                              <ExternalLink size={20}/>
                            </a>
                            <a href={project.githubUrl} 
                            target="_blank"
                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                              <Github size={20}/>
                            </a>
                      </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                  <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                  target="_blank"
                  href="https://github.com/naman2302">
                    Check My Github <ArrowRight size={16} />
                  </a>
              </div>
        </div>
    </section>;
};