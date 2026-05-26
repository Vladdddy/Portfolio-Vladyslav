import Hero from "@/components/layout/Hero";
import Career from "@/components/layout/Career";
import Projects from "@/components/layout/Projects";
import DesignProjects from "@/components/layout/DesignProjects";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-4 w-full lg:px-40">
            <Navbar />
            <Hero />
            <div id="work-experience">
                <Career />
            </div>
            <div id="coding-projects">
                <Projects />
            </div>
            <div id="design-projects">
                <DesignProjects />
            </div>
        </main>
    );
}
