import { useState } from "react";
//Our commitent

import coffeHandDesktop from "../assets/about/png/image-coffeHand-desktop.jpg";
import { LocateUs } from "../componentes/DataList";
import { CardLocation } from "../componentes/Cards";
export const About = () => {
  const [locations, setLocations] = useState(LocateUs);
  return (
    <>
      <header className="container mx-auto px-5">
        <div className="lg:bg-banner-about-desktop lg:px-20 grid px-10 content-center md:bg-banner-about-tablet bg-banner-about-mobile h-[400px] lg:h-[450px] bg-no-repeat bg-cover rounded-xl gap-7 text-white text-center md:text-start lg:text-start">
          <h1 className="text-3xl font-fraunces lg:text-5xl">
            About Us
          </h1>
          <p className="font-barlow text-sm md:text-base lg:text-base lg:w-[445px] md:w-[300px]">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bringing the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </header>
      <section className="container mx-auto px-5 my-24">
        <div className="space-y-10 md:grid md:grid-cols-[280px_1fr] md:space-y-0 md:gap-24 md:items-center xl:grid-cols-[445px_1fr] lg:px-24 xl:gap-48">
          
          <div className="bg-barista-movil w-full h-[400px] bg-no-repeat bg-cover bg-bottom rounded-xl md:bg-barista-tablet md:h-[470px] lg:bg-barista-desktop lg:h-[520px]"></div>
          <div className="text-center space-y-10 lg:text-start">
            <h2 className="text-3xl text-slate-800 font-fraunces lg:text-4xl">
              Our commitment
            </h2>
            <p className="font-barlow text-slate-700">
              We’re built on a simple mission and a commitment to doing good along
              the way. We want to make it easy for you to discover and brew the
              world’s best coffee at home. It all starts at the source. To locate
              the specific lots we want to purchase, we travel nearly 60 days a
              year trying to understand the challenges and opportunities in each
              of these places. We collaborate with exceptional coffee growers and
              empower a global community of farmers through with well above
              fair-trade benchmarks. We also offer training, support farm
              community initiatives, and invest in coffee plant science. Curating
              only the finest blends, we roast each lot to highlight tasting
              profiles distinctive to their native growing region.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5">
        <div className="bg-dark-indigo rounded-xl text-center xl:text-start text-white px-5 py-14 lg:grid lg:grid-cols-[1fr_445px] lg:items-center lg:gap-20 lg:px-10 xl:grid-cols-[540px_445px] xl:justify-center">
          <div className="bg-coffeHand-movil w-[279px] h-[156px] bg-contain mx-auto bg-no-repeat rounded-xl md:w-[573px] md:h-[320px] lg:order-last lg:w-[445px] lg:h-[474px] lg:bg-cover lg:bg-center"></div>
          <div className="">
            <h1 className="font-fraunces text-3xl mt-14 xl:text-5xl">Uncompromising quality</h1>
            <p className="mt-8 font-barlow text-slate-300">
              Although we work with growers who pay close attention to all stages
              of harvest and processing, we employ, on our end, a rigorous quality
              control program to avoid over-roasting or baking the coffee dry.
              Every bag of coffee is tagged with a roast date and batch number.
              Our goal is to roast consistent, user-friendly coffee, so that
              brewing is easy and enjoyable.
            </p>
          </div>
        </div>
        {/* <img src={coffeHandDesktop}></img> */}
      </section>
      <section className="container mx-auto px-5 my-20">
        <div className="text-center md:text-start">
          <h1 className="font-fraunces text-2xl mb-10 text-slate-500">Our headquarters</h1>
          <div className="space-y-14 md:grid md:grid-cols-3 md:space-y-0 md:gap-5">
            {locations.map((location) => (
              <CardLocation objeto={location}></CardLocation>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
