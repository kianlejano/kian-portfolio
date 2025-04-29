"use client";
import { ProjectProp } from "@/app/types/global";
import Image from "next/image";
import { formatDate } from "@/app/utils/formatDate";
export default function Project(project: ProjectProp){
    const { name, pic, description, stack, createdAt, link, githubRepo} = project.project;

    return (
        <div className="card bg-base-100 border border-base-200 w-96 shadow-lg">
            <figure className="px-7 pt-7">
                <div className="flex justify-center bg-base-200 h-full w-full rounded-lg p-2">
                    <Image src={pic} alt={`${name}-logo`} width={150} height={150} />
                </div>
            </figure>
            <div className="card-body">
                <div className="card-actions justify-center">
                    {stack.map((e, i) => (
                        <div key={i} className="badge bg-secondary text-secondary-content">{e}</div>
                    ))}
                </div>
                <h2 className="font-bold text-2xl">{name}</h2>
                <p>{description}</p>
                <p className="text-sm text-gray-400">{formatDate(createdAt, 'month-year')}</p>
                <div className="card-actions justify-center">
                    <button className="project-button hover-enlarge-sm" disabled={!link} onClick={() => link && window.open(link, "_blank")} >Visit</button>
                    <button className="project-button hover-enlarge-sm" disabled={!githubRepo} onClick={() => githubRepo && window.open(githubRepo, "_blank")} >Repo</button>
                </div>
            </div>
        </div>
    )
}