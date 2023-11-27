import { useState } from "react";
import { Card, CardQuality, Card2 } from "../componentes/Cards";
import { Collections, CardList, Works } from "../componentes/DataList";
import { Navbar } from "../componentes/Navbar";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const [coffes, setCoffes] = useState(Collections);
  const [qualities, setQualities] = useState(CardList);
  const [works, setWorks] = useState(Works);
  return (
    <>
      <header className="container mx-auto px-5">
        <div className="lg:bg-banner-desktop bg-banner-mobile h-[500px] lg:h-[600px] bg-no-repeat bg-cover rounded-xl px-5 grid content-center lg:px-20">
          <div className="space-y-7 text-white text-center lg:w-[493px] lg:text-start">
            <h2 className="text-4xl font-fraunces font-extrabold lg:text-7xl">
            Gran café hecho simple.
            </h2>
            <p className="font-barlow text-sm lg:text-base">
            Comience sus mañanas con los mejores cafés del mundo. Pruebe nuestros cafés artesanales curados por expertos de nuestros mejores tostadores entregados directamente a su puerta, en su horario.
            </p>
            <button
              className="bg-teal-600 font-fraunces p-4 rounded-xl text-lg hover:bg-sky-300 transition-colors"
              type="button"
            ><NavLink to="/about">Sobre Nosotros</NavLink></button>
          </div>
        </div>

        {/* Offcamnbas */}
        <div className="fixed top-0 bottom-0 left-0 right-0 bg-neutral-200 px-5 -translate-x-full invisible transition-transform z-10">
          <Navbar modal={true}/>
          <nav className="container mx-auto px-5 mt-20">
            <ul className="bg-gradient-to-b from-neutral-200 to-neutral-500 rounded-xl text-center h-[600px] font-fraunces text-2xl space-y-10">
              <li className=""><NavLink to="/">Inicio</NavLink></li>
              <li className=""><NavLink to="/about">Sobre nosotros</NavLink></li>
            </ul>
          </nav>
        </div>
        {/* Fin de offcanbas */}

      </header>
      <section className="container mx-auto px-5 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {coffes.map((coffe) => (
          <Card objeto={coffe}></Card>
        ))}
      </section>
      <section className="container mx-auto px-5 text-center">
        <div className="bg-dark-indigo rounded-xl px-4 py-24 space-y-8 text-white">
          <h2 className="font-fraunces text-3xl lg:text-5xl">¿Por qué elegirnos?</h2>
          <p className="font-barlow text-slate-300">
          Una gran parte de nuestro papel es elegir qué cafés particular se presentarán en nuestro rango. Esto significa trabajar estrechamente con los mejores cafeteros para brindarle una experiencia más impactante en todos los niveles.
          </p>
          <div className="space-y-7 lg:grid lg:grid-cols-3 lg:gap-7 lg:space-y-0 lg:w-10/12 lg:mx-auto">
            {qualities.map((qualitie) => (
              <Card2 objeto={qualitie}></Card2>
            ))}
          </div>
        </div>
      </section>
      <section className=" container mx-auto px-5">
        <div className=" text-center lg:text-start my-20">
          <h2 className="font-fraunces text-2xl text-slate-500">
          Cómo funciona
          </h2>
          <div className="space-y-14 lg:grid lg:grid-cols-3 lg:space-y-0 lg:w-11/12 lg:gap-16">
            {works.map((work) => (
              <CardQuality objeto={work}></CardQuality>
            ))}
          </div>
          <div className="mt-20 bor">
            <button className="bg-teal-600 text-white font-fraunces p-4 rounded-xl text-lg hover:bg-sky-300 transition-colors" type="button"><NavLink to="/about">Sobre nosotros</NavLink></button>
          </div>
        </div>
      </section>
    </>
  );
};
