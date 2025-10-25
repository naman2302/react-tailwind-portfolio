import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6"> 
                    <h3 className="text-2xl font-semibold">AI/ML Engineer | Creating Scalable and Smart Technologies</h3>
                    <p className="text-muted-foreground">
                        With a strong foundation in Artificial Intelligence and Machine Learning, I focus on building data-driven models and intelligent systems that solve real-world challenges. My expertise lies in transforming raw data into meaningful insights through modern algorithms and analytical approaches.
                    </p>
                    <p className="text-muted-foreground">
                        I'm deeply passionate about innovation, constantly learning and experimenting with new technologies in AI, ML, and deep learning. My goal is to create solutions that are not only technically sound but also impactful, efficient, and designed to make a difference.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>
                        <a href="/Resume-Naman-Shukla.pdf"
                           className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                           download="Resume-Naman-Shukla.pdf">
                            Download CV
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">AI/ML Powered Development</h4>
                                <p className="text-muted-foreground">
                                    Designing scalable AI models and automation-driven solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">AI-Powered Applications</h4>
                                <p className="text-muted-foreground">
                                    Integrating AI into real-world applications using Flask, FastAPI, and Streamlit for seamless deployment.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">
                                    Leading projects from conception to completion with agile methodologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </section>;
};