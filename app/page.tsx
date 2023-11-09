import CardItems from "@/components/cardItems";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import { Avatar } from "@/components/ui/avatar";
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
              we&apos;ll handle the rest
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

        <div className="py-5 mt-16 max-w-5xl mx-auto">
          <div className="flex items-center justify-center flex-col max-w-3xl m-auto">
            <h2 className="text-black text-lg">Testimonials</h2>
            <h1 className="font-bold text-4xl md:text-6xl ">What other people says on us?</h1>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <TestimonialCard image={"/avatar1.jpg"} name={"Rakesh Tiwari"} comment={"With helpful SEO strategies, I have been able to rank my blogs higher in search engines. thanks to nexanepal."} />
              <TestimonialCard image={"/avatar2.jpg"} name={"Nitisha Rana"} comment={"What an amazing team! They helped me out all the way… Recommend NexaNepal to everyone with a business idea.."} />
            </div>
          </div>
        </div>

        {/* capable techs */}
        <div className="py-5 mt-16 max-w-5xl mx-auto">
          <div className="flex items-center justify-center flex-col max-w-3xl m-auto">
            <h1 className="font-bold text-4xl md:text-6xl max-w-5xl ">Proficient Technologies</h1>
          </div>

          <div className="mt-12 max-w-5xl mx-auto flex justify-start items-center">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="bg-slate-100 p-1 shad-md rounded-md flex items-center justify-center flex-col">
                <Avatar>
                  <Image
                    src={"/wordpress.png"}
                    width={100}
                    height={100}
                    alt="item"
                    className="rounded-full object-contain"
                  />
                </Avatar>
                <p className="font-light text-muted-foreground">Wordpress</p>
              </div>
              <div className="bg-slate-100 p-1 shad-md rounded-md flex items-center justify-center flex-col">
                <Avatar>
                  <Image
                    src={"/photoshop.png"}
                    width={100}
                    height={100}
                    alt="item"
                    className="rounded-full object-contain"
                  />
                </Avatar>
                <p className="font-light text-muted-foreground">PhotoShop</p>
              </div>
              <div className="bg-slate-100 p-1 shad-md rounded-md flex items-center justify-center flex-col">
                <Avatar>
                  <Image
                    src={"/adobe-premier.png"}
                    width={100}
                    height={100}
                    alt="item"
                    className="rounded-full object-contain"
                  />
                </Avatar>
                <p className="font-light text-muted-foreground">Adobe Premier Pro</p>
              </div>
              <div className="bg-slate-100 p-1 shad-md rounded-md flex items-center justify-center flex-col px-3">
                <Avatar>
                  <Image
                    src={"/react.png"}
                    width={120}
                    height={120}
                    alt="item"
                    className="rounded-full object-contain"
                  />
                </Avatar>
                <p className="font-light text-muted-foreground text-sm">React js</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our projects */}
        <div className="py-5 mt-16 max-w-5xl mx-auto">
          <div className="flex items-center justify-center flex-col max-w-3xl m-auto">
            <h1 className="font-bold text-4xl md:text-6xl ">Our Projects</h1>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <p>No projects to show</p>
            </div>
          </div>
        </div>


        {/* Our footer */}
        <footer className="py-5 mt-16 max-w-5xl mx-auto fixed bottom-0">
          <div className="flex items-center justify-center flex-col max-w-3xl m-auto">
            <p className="text-sm text-muted-foreground">created by nishan neupane @ 2023 alright reserved </p>
          </div>

        </footer>

      </div>


    </>

  )
}
