import Profile from "@/app/components/Profile";
import Skills from "@/app/components/Skills";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Profile />
      </section>
      <div className="w-full flex justify-center mt-4">
        <div className="w-8/10 bg-base-300 p-4 rounded-t-2xl">
          <section id="skills">
            <Skills />
          </section>
        </div>
      </div>
    </div>
    

  );
}
