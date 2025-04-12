import Profile from "@/app/components/Profile";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <div>
      <section id="profile">
        <Profile />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
      
      
    </div>
    

  );
}
