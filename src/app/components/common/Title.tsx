import { TitleProps } from "@/app/types/global";


export default function Title(props: TitleProps){

    const {
        icon: Icon,
        description,
        bgColor = "bg-primary",
        textColor = "text-primary-content",
        borderColor = "border-base-100"
      } = props;

    return (
        <div className="relative h-15 flex justify-between items-center">
            <div className={`absolute left-10 h-12 rounded-lg pl-10 pr-6 ${bgColor} ${textColor} flex justify-center items-center text-lg font-extrabold text-nowrap border-4 ${borderColor} `}>
                {description}
            </div>
            <div className={`absolute left-0 h-15 w-15 rounded-full ${bgColor} ${textColor} flex justify-center items-center text-2xl border-4 ${borderColor} `}>
                <Icon />
            </div>
        </div>

    );
}