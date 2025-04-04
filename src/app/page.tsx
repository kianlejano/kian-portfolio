import { PERSONAL_INFO } from "@/app/constants";
import { RxDownload, RxLinkedinLogo, RxGithubLogo  } from "react-icons/rx";
import Image from "next/image";

const info = PERSONAL_INFO;

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="order-2 md:order-1 w-full md:w-[60%]">
        <div className="card h-auto">
          <div className="card-body flex flex-col items-center md:items-stretch justify-center">
            <div className="text-3xl lg:text-4xl font-bold">Hi I'm {info.nickname},</div>
            <div className="text-5xl lg:text-6xl font-bold">{info.position}</div>
            <div className="text-lg lg:text-xl text-center md:text-start text-secondary mt-4">{info.intro}</div>
            <div className="flex flex-row">
              <button className="btn btn-ghost btn-circle text-4xl text-primary">
                <RxLinkedinLogo />
              </button>
              <button className="btn btn-ghost btn-circle text-4xl text-primary">
                <RxGithubLogo />
              </button>
            </div>
            <div className="card-actions justify-start mt-2">
              <button className="btn btn-outline btn-primary">
                <RxDownload className="text-xl" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2 w-full md:w-[40%] flex justify-center md:justify-end">
        <Image className="rounded-xl border-r-primary" src="/images/profile.jpg" alt="Profile" width={500} height={500} style={{ height: "auto" }} />
      </div>
    </div>

  );
}
