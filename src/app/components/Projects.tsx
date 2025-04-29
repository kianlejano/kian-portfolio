import { PROJECTS } from '@/app/constants';
import Project from './common/Project';
import Header from './common/Header';

export default function Projects(){
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Header title="Personal Project" />
            <div className="w-8/10 flex flex-wrap justify-center gap-4">
                {PROJECTS.map((project, index) => (
                   <Project key={index} project={project}/>
                ))}
            </div>
        </div>
    );
}