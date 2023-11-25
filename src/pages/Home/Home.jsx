import { useState } from "react";
import { Card, CardQuality } from "../../componentes/Cards";
import { Collections, CardList, Works } from "../../componentes/DataList";


export const Home = () => {
  const [coffes, setCoffes] = useState(Collections);
  const [qualities, setQualities] = useState(CardList);
  const [works, setWorks] = useState(Works);
  return (
    <>
      <section>
        <h1>Great coffe made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button type="button">Create your plan</button>
      </section>
      <section>
        {coffes.map((coffe) => (
          <Card objeto={coffe}></Card>
        ))}
      </section>
      <section>
        <h1>Why choose us?</h1>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div>
          {qualities.map((qualitie) => (
            <Card objeto={qualitie}></Card>
          ))}
        </div>
      </section>
      <section>
        <h2>How it works</h2>
        <div>
          {works.map((work) => (
            <CardQuality objeto={work}></CardQuality>
          ))}
        </div>
        <div>
          <button type="button">Create your plan</button>
        </div>
      </section>
    </>
  );
};
