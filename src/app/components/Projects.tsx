import { PROJECTS } from '@/app/constants';
import Project from './common/Project';

export default function Projects(){
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="p-4 text-3xl font-extrabold mb-4">
                Personal Project
            </div>
            <div className="w-8/10 flex justify-center gap-4">
                {PROJECTS.map((project, index) => (
                   <Project key={index} name={project.name} pic={project.pic} description={project.description} createdAt={project.createdAt} link={project.link} githubRepo={project.githubRepo}/>
                ))}
            </div>
        </div>
    );
}