import { useState } from "react";
import { Card, CardQuality, Card2 } from "../../componentes/Cards";
import { Collections, CardList, Works } from "../../componentes/DataList";
import banner from '../../assets/home/png/image-hero-mobile-coffeepress.jpg'



export const Home = () => {
  const [coffes, setCoffes] = useState(Collections);
  const [qualities, setQualities] = useState(CardList);
  const [works, setWorks] = useState(Works);
  return (
    <>
      <header className= "container mx-auto px-5">
        <div className="lg:bg-banner-desktop bg-banner-mobile h-[500px] lg:h-[600px] bg-no-repeat bg-cover rounded-xl px-5 grid content-center lg:px-20">
          <div className="space-y-7 text-white text-center lg:w-[493px] lg:text-start">
            <h2 className="text-4xl font-fraunces font-extrabold lg:text-7xl">Great coffe made simple.</h2>
            <p className="font-barlow text-sm lg:text-base">
              Start your mornings with the world’s best coffees. Try our expertly
              curated artisan coffees from our best roasters delivered directly to
              your door, at your schedule.
            </p>
            <button className="bg-teal-600 font-fraunces p-4 rounded-xl text-lg hover:bg-sky-300 transition-colors" type="button">Create your plan</button>
          </div>
        </div>
      </header>
      <section className="container mx-auto px-5 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {coffes.map((coffe) => (
          <Card objeto={coffe}></Card>
        ))}
      </section>
      <section className="container mx-auto px-5 text-center">
        <div className="bg-dark-indigo rounded-xl px-4 text-white">
          <h2 className="font-fraunces text-3xl">Why choose us?</h2>
          <p className="font-barlow text-slate-300">
            A large part of our role is choosing which particular coffees will be
            featured in our range. This means working closely with the best coffee
            growers to give you a more impactful experience on every level.
          </p>
          <div>
            {qualities.map((qualitie) => (
              <Card2 objeto={qualitie}></Card2>
            ))}
          </div>
        </div>
      </section>
      <section className=" container mx-auto px-5">
        <div className=" text-center">
          <h2 className="font-fraunces text-2xl text-slate-500">How it works</h2>
          <div className="space-y-14">
            {works.map((work) => (
              <CardQuality objeto={work}></CardQuality>
            ))}
          </div>
          <div>
            <button type="button">Create your plan</button>
          </div>
        </div>
      </section>
    </>
  );
};
