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
    <div className="relative rounded-lg border border-base-200 h-full">
      <div className="absolute -top-7 -left-7">
        <Title icon={Icon} description={description} bgColor={bgColor} textColor={textColor} borderColor={borderColor}/>
      </div>
      <div className="pt-10 pb-4 px-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {technologies.map(({name, description, logo}, index) => (
          <label className="swap swap-flip border border-base-300 shadow-lg p-4 rounded-md hover-enlarge-sm h-45" key={index}>
            <input type="checkbox" />
          
            <div className="swap-on">
              <div className="text-center">
                <p className="font-extrabold">{name}</p>
                <p>{description}</p>
              </div>
            </div>
            <div className="swap-off flex justify-center items-center">
              <Image src={logo} alt={`${name}-logo`} width={100} height={100} className="w-24 h-24 object-contain" />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
