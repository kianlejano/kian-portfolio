import { HeaderProp } from "@/app/types/global";

  
export default function Header({ title }: HeaderProp) {
return (
    <div className="p-4 text-3xl font-extrabold mb-4">
        {title}
    </div>
);
}