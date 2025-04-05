import Profile from "@/app/components/Profile";
import Skills from "@/app/components/Skills";

export default function Home() {
  return (
    <div>
      <section id="profile">
        <Profile />
      </section>

      <section id="skills">
        <Skills />
      </section>
      
    </div>
    

  );
}
