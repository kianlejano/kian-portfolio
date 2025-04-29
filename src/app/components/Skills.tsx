import TechStack from "@/app/components/common/TechStack";
import {TECH_STACK } from '@/app/constants'
import Header from "./common/Header";

export default function Skills(){
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Header title="Tech Stack" />
            <div className="w-8/10 p-4 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8">
                {TECH_STACK.map((tech, index) => (
                    <div key={index}>
                        <TechStack title={tech.title} technologies={tech.technologies}/>
                    </div>
                ))}
            </div>
        </div>
    );
}