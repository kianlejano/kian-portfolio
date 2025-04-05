import { PERSONAL_INFO, SOCIAL_LINKS } from "@/app/constants";
import { RxDownload } from "react-icons/rx";
import Image from "next/image";

const info = PERSONAL_INFO;

export default function Profile() {
  return (
    <div className="flex flex-col items-center gap-y-6 py-4">
      <div className="bg-base-300 profile-size rounded-full bounce-slow">
        <Image src="/images/profile.png" alt="Profile" width={500} height={500} priority={true} className="rounded-full" />
      </div>
      <div className="flex flex-col items-center text-center max-w-8/10 gap-y-2">
        <div className="text-4xl font-extrabold">Hi I'm {info.nickname},</div>
        <div className="text-5xl font-extrabold text-secondary">{info.position}</div>
        <div className="text-lg font-medium mt-2">{info.intro}</div>
      </div>
      
      <div className="flex space-x-1">
        {SOCIAL_LINKS.map(({ name, url, icon: Icon }) => (
          <div key={name}>
            <a href={url} target="_blank" className="link-button hover-enlarge">
              <Icon />
            </a>
          </div>
        ))}
      </div>
      <div>
        <button className="btn btn-outline btn-primary rounded-full hover-enlarge">
          <RxDownload /> Resume
        </button>
      </div>
    </div>

  );
}
