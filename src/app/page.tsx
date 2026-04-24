import Hero from "@/components/layout/Hero";
import Career from "@/components/layout/Career";
import Projects from "@/components/layout/Projects";
import DesignProjects from "@/components/layout/DesignProjects";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-4 md:p-10 w-full lg:px-40">
            <Hero />
            <Career />
            <Projects />
            <DesignProjects />
        </main>
    );
}
