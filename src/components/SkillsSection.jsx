import { act, useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    //backend 
    {name: "Python", level: 90, category:"AI/ML" },
    {name: "Machine Learning", level: 85, category:"AI/ML" },
    {name: "Deep Learning", level: 80, category:"AI/ML" },
    {name: "Computer Vision", level: 90, category:"AI/ML" },
    {name: "NLP", level: 85, category:"AI/ML" },
    {name: "Data Analysis", level: 90, category:"AI/ML" },
    {name: "Data Visulaisation", level: 90, category:"AI/ML" },
    {name: "Model Deployment", level: 95, category:"AI/ML" },

    //frontend
    {name: "HTML", level: 95, category:"Frontend" },
    {name: "CSS", level: 95, category:"Frontend" },
    {name: "React", level: 80, category:"Frontend" },
    {name: "Javascript", level: 80, category:"Frontend" },
    {name: "Flask", level: 90, category:"Frontend" },
    {name: "FastAPI", level: 85, category:"Frontend" },


    //databses and Tools
    {name: "MySQL", level: 90, category:"Database" },
    {name: "MongoDB", level: 90, category:"Database" },
    {name: "Git/Github", level: 90, category:"Tools" },
    {name: "Selenium", level: 90, category:" Tools" },
    {name: "VS Code", level: 100, category:"Tools" },
    {name: "Jupyter", level: 100, category:"Tools" },
    {name: "Streamlit", level: 100, category:"Tools" },
];

const categories = ["all", "AI/ML", "Frontend", "Database", "Tools"];


export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return <section id="skills" className="py-24 px-4 relative bg-seconadary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                    )} onClick={() => setActiveCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-2">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                            style={{width: skill.level + "%"}}/>
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground ">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>

    </section>;
};