import { useState } from "react";
//Our commitent

import coffeHandDesktop from "../assets/about/png/image-coffeHand-desktop.jpg";
import { LocateUs } from "../componentes/DataList";
import { CardLocation } from "../componentes/Cards";
export const About = () => {
  const [locations, setLocations] = useState(LocateUs);
  return (
    <>
      <header className="container mx-auto px-5 lg:bg-banner-about-desktop md:bg-banner-about-tablet bg-banner-about-mobile h-[400px] lg:h-[450px] bg-no-repeat bg-cover rounded-xl  grid content-center lg:px-20">
        <div className="space-y-7 text-white text-center md:w-[493px] lg:w-[493px] md:text-start lg:text-start">
          <h1 className="text-3xl font-fraunces font-extrabold lg:text-5xl">
            About Us
          </h1>
          <p className="font-barlow text-sm md:text-base lg:text-base">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bringing the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </header>
      <section className="container mx-auto px-5 ">
        <img className="bg-barista-movil"></img>
        <div>
          <h2 className="text-3xl my-10 opacity-80 font-fraunces font-extrabold lg:text-5xl">
            Our commitment
          </h2>
          <p className="font-barlow opacity-80 text-base text-center md:text-start">
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
      </section>
      <section>
        <div>
          <h1>Uncompromising quality</h1>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <img src={coffeHandDesktop}></img>
      </section>
      <section>
        <h1>Our headquarters</h1>
        <div>
          {locations.map((location) => (
            <CardLocation objeto={location}></CardLocation>
          ))}
        </div>
      </section>
    </>
  );
};
