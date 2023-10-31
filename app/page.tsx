import CardItems from "@/components/cardItems";
import ServiceCard from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { Brain, Computer, FastForward, Globe, HelpingHand, Pencil, ThumbsUp, TriangleRightIcon, Video } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=' relative flex items-center justify-center flex-col'>
        <div className=" w-[100%] h-[500px] " >
          <Image
            src={"/business1.jpg"}
            alt="image"
            fill
            className="object-cover -z-10 rounded-b-[200px]"
          />
        </div>
        <div className="absolute mt-15">
          <div className="flex flex-col items-center justify-center max-w-3xl text-center m-auto space-y-3">
            <h2 className="text-4xl sm:text-6xl font-bold text-white shadow-sm">
              Give us your work,
              we&apos;ll do the rest
            </h2>

            <p className="text-medium text-lg font-medium text-white">
              Your Growth, Our Mission</p>
            <Button variant={"secondary"}>
              Get Started
            </Button>
          </div>
        </div>



      </div>
      <div className="flex items-center justify-center  mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-0 sm:space-x-4 w-full space-y-2 sm:space-y-0 max-w-5xl -mt-0 sm:-mt-12">
          <CardItems icon={Brain} title="Creativity" />
          <CardItems icon={ThumbsUp} title="Quality" />
          <CardItems icon={FastForward} title="Fastest Delivery" />
          <CardItems icon={HelpingHand} title="24/7 Support" />
        </div>


      </div>

      <div className="flex items-center justify-center sm:justify-between sm:max-w-5xl w-full m-auto mt-16 flex-col sm:flex-row space-y-3 sm:space-y-0 ">
        <Image
          src={"/business2.jpg"}
          height={400}
          width={350}
          alt="business img"
          className="object contain"
        />

        <div className="flex sm:items-start items-center justify-center flex-col sm:text-start text-center sm:max-w-[500px] max-w-full space-y-2">
          <p className="text-black font-medium text-lg">We are online agency to do your design!</p>
          <h2 className="text-black font-bold text-6xl">
            Pick out the best marketing agency for you.
          </h2>
          <p className="text-slate-500 font-sm font-medium">
            get connected with us. we are the most trusted agency in nepal.
          </p>
          <p className=" font-bold text-blue-700 cursor-pointer">
            View More About Us!
          </p>
        </div>
      </div>

      <div className=" max-w-5xl m-auto mt-16 space-y-3">
        <p className="text-center font-medium">Our Featured Services</p>
        <h2 className="font-bold text-6xl sm:max-w-3xl text-center m-auto">We Provide All Exclusive
          Services For Clients</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-0 sm:space-x-2 space-y-2">
          <ServiceCard
            icon={Pencil}
            title={"Graphic Design"}
            description={"Our customers get solutions and business opportunities instead of just projects."}
            link={"/services"}
          />
          <ServiceCard icon={Video} title={"Video Design"} description={"Our customers get solutions and business opportunities instead of just projects."} link={"/services"} />
          <ServiceCard icon={Globe} title={"Social Media Marketing"} description={"Our customers get solutions and business opportunities instead of just projects."} link={"/services"} />
          <ServiceCard icon={Computer} title={"Web Design"} description={"Our customers get solutions and business opportunities instead of just projects."} link={"/services"} />
        </div>
      </div>
    </>

  )
}
