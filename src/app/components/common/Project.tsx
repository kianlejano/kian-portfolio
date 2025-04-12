import { ProjectType } from "@/app/types/global";
import Image from "next/image";
import { formatDate } from "@/app/utils/formatDate";
export default function Project(props: ProjectType){
    const { name, pic, description, createdAt, link, githubRepo} = props;

    return (
        <div className="w-full p-4 border border-base-300 bg-base-200 rounded-lg flex flex-col md:flex-row justify-around gap-4">
            <div className="w-full md:w-2/5 bg-base-300 rounded-md h-70 flex justify-center items-center">
                <Image src={pic} alt={`${pic}-logo`} width={250} height={250} />
            </div>
            <div className="w-full md:w-3/5 flex flex-col gap-2 justify-center">
                <p className="text-2xl font-extrabold">{name}</p>
                <p className="">{description}</p>
                <p>{formatDate(createdAt, 'month-year')}</p>
                <div className="flex justify-start gap-2">
                    <a href={link} target="_blank" className="btn btn-secondary">Visit</a>
                    <a href={githubRepo} target="_blank" className="btn btn-outline btn-secondary">Repo</a>
                </div>
            </div>
        </div>
    )
}