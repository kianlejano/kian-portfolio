import { TechStackType } from "@/app/types/global";
import Title from "@/app/components/common/Title";
import Image from "next/image";

export default function TechStack(props: TechStackType) {
  const { title, technologies } = props;
  const {
    icon: Icon,
    description,
    bgColor,
    textColor,
    borderColor,
  } = title;

  return (
    <div className="relative rounded-lg bg-base-200 h-full">
      <div className="absolute -top-7 -left-7">
        <Title icon={Icon} description={description} bgColor={bgColor} textColor={textColor} borderColor={borderColor}/>
      </div>
      <div className="pt-10 pb-4 px-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {technologies.map(({name, description, logo}, index) => (
            <div className="card bg-base-300 shadow-md border border-base-300 hover-enlarge-sm" key={index}>
                <figure className="py-2 bg-base-200 flex justify-center items-center h-40">
                    <Image src={logo} alt={`${name}-logo`} width={100} height={100} className="w-24 h-24 object-contain"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                    </div>
                </div>
            </div>
            
        ))}
      </div>
    </div>
  );
}
