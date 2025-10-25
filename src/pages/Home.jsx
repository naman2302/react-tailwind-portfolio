import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground} from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutMe";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSections } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return  ( 
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/* Theme Toggle */}
            <ThemeToggle />

        {/* Background Effects */}
            <StarBackground />


        {/* NavBar */}
            <Navbar />

        {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSections />
                <ContactSection />
            </main>

        {/* Footer */}
            <Footer />
    </div>
    );
}