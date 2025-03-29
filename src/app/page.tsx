import { PERSONAL_INFO } from "@/app/constants";

const info = PERSONAL_INFO;

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:justify-around gap-2 h-150">
      <div className="card bg-base-100 w-full md:w-1/2">
        <div className="card-body flex flex-col justify-center">
          <div className="text-4xl font-bold">Hi I'm {info.nickname},</div>
          <div className="text-xl md:text-3xl lg:text-6xl font-bold">{info.position}</div>
          <div className="text-lg text-secondary ">{info.intro}</div>
          <div className="card-actions justify-start mt-2">
            <button className="btn btn-primary rounded-full">Get in touch</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-full md:w-1/2">
        <div className="card-body">
          {/* <h2 className="card-title">Card title!</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
