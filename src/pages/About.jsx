import { useState } from "react";
//Our commitent
import { LocateUs } from "../componentes/DataList";
import { CardLocation } from "../componentes/Cards";
export const About = () => {
  const [locations, setLocations] = useState(LocateUs);
  return (
    <>
      <header className="container mx-auto px-5">
        <div className="lg:bg-banner-about-desktop lg:px-20 grid px-10 content-center md:bg-banner-about-tablet bg-banner-about-mobile h-[400px] lg:h-[450px] bg-no-repeat bg-cover rounded-xl gap-7 text-white text-center md:text-start lg:text-start">
          <h1 className="text-3xl font-fraunces lg:text-5xl">
            Sobre nosotros
          </h1>
          <p className="font-barlow text-sm md:text-base lg:text-base lg:w-[445px] md:w-[300px]">
          CoffeeroSters comenzó su viaje de descubrimiento exótico en 1999, destacando historias de café de todo el mundo. Desde entonces nos hemos dedicado a traer la taza perfecta, desde frijoles hasta cerveza, en cada envío.
          </p>
        </div>
      </header>
      <section className="container mx-auto px-5 my-24">
        <div className="space-y-10 md:grid md:grid-cols-[280px_1fr] md:space-y-0 md:gap-24 md:items-center xl:grid-cols-[445px_1fr] lg:px-24 xl:gap-48">
          
          <div className="bg-barista-movil w-full h-[400px] bg-no-repeat bg-cover bg-bottom rounded-xl md:bg-barista-tablet md:h-[470px] lg:bg-barista-desktop lg:h-[520px]"></div>
          <div className="text-center space-y-10 lg:text-start">
            <h2 className="text-3xl text-slate-800 font-fraunces lg:text-4xl">
            Nuestro compromiso
            </h2>
            <p className="font-barlow text-slate-700">
            Estamos construidos en una misión simple y un compromiso de hacer el bien en el camino. Queremos facilitarle que descubra y prepare el mejor café del mundo en casa. Todo comienza en la fuente. Para localizar los lotes específicos que queremos comprar, viajamos casi 60 días al año tratando de comprender los desafíos y las oportunidades en cada uno de estos lugares. Colaboramos con cafeteros excepcionales y empoderamos a una comunidad global de agricultores con puntos de referencia muy por encima del comercio justo. También ofrecemos capacitación, apoya iniciativas de la comunidad agrícola e invertimos en ciencias de las plantas de café. Curando solo a las mejores mezclas, asamos cada lote para resaltar los perfiles de degustación distintivos para su región de crecimiento nativo.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5">
        <div className="bg-dark-indigo rounded-xl text-center xl:text-start text-white px-5 py-14 lg:grid lg:grid-cols-[1fr_445px] lg:items-center lg:gap-20 lg:px-10 xl:grid-cols-[540px_445px] xl:justify-center">
          <div className="bg-coffeHand-movil w-[279px] h-[156px] bg-contain mx-auto bg-no-repeat rounded-xl md:w-[573px] md:h-[320px] lg:order-last lg:w-[445px] lg:h-[474px] lg:bg-cover lg:bg-center"></div>
          <div className="">
            <h1 className="font-fraunces text-3xl mt-14 xl:text-5xl">Calidad intransigente</h1>
            <p className="mt-8 font-barlow text-slate-300">
            Aunque trabajamos con los productores que prestan mucha atención a todas las etapas de cosecha y procesamiento, empleamos, por nuestro fin, un riguroso programa de control de calidad para evitar que se secan la creciente o hornear el café. Cada bolsa de café está etiquetada con una fecha de asado y un número de lotes. Nuestro objetivo es asar café consistente y fácil de usar, para que la elaboración de cerveza sea fácil y agradable.
            </p>
          </div>
        </div>
        {/* <img src={coffeHandDesktop}></img> */}
      </section>
      <section className="container mx-auto px-5 my-20">
        <div className="text-center md:text-start">
          <h1 className="font-fraunces text-2xl mb-10 text-slate-500">Nuestra sede</h1>
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
