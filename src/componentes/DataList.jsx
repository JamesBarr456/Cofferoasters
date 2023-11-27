// Coffes
import gran from "../assets/home/png/image-gran-espresso.png";
import planalto from "../assets/home/png/image-planalto.png";
import piccolo from "../assets/home/png/image-piccollo.png";
import danche from "../assets/home/png/image-danche.png";

//cardlist images
import quality from "../assets/home/svg/icon-coffee-bean.svg";
import gifts from "../assets/home/svg/icon-gift.svg";
import truck from "../assets/home/svg/icon-truck.svg";

//location images
import UK from '../assets/about/svg/illustration-uk.svg'
import Canada from '../assets/about/svg/illustration-canada.svg'
import Australia from '../assets/about/svg/illustration-australia.svg'

export const Collections = [
  {
    id: "1",
    title: "Espresso",
    summary:
      "Mezcla ligera y sabrosa con cacao y pimienta negra para una experiencia intensa",
    imgUrl: gran,
  },
  {
    id: "2",
    title: "Planalto",
    summary:
      "Brasileño asado oscuro con cuerpo rico y aterciopelado, y toques de frutas y nueces",
    imgUrl: planalto,
  },
  {
    id: "3",
    title: "Piccollo",
    summary:
      "Mezcla suave y suave con notas de almendras tostadas y cereza seca",
    imgUrl: piccolo,
  },
  {
    id: "4",
    title: "Danche",
    summary:
      "Mezcla etíope halada de mano densamente repleta de notas vibrantes de frutas",
    imgUrl: danche,
  },
];

export const CardList = [
  {
    id: "10",
    title: "Mejor calidad",
    summary:
      "Descubra una variedad interminable del mejor café artesanal del mundo de cada uno de nuestros tostadores.",
    imgUrl: quality,
  },
  {
    id: "11",
    title: "Beneficios exclusivos",
    summary:
      "Ofertas especiales y botín cuando se suscribe, incluido un 30% de descuento en su primer envío.",
    imgUrl: gifts,
  },
  {
    id: "12",
    title: "Envío gratis",
    summary:
      "Cubrimos el costo y el café se entrega rápidamente. Peakness Peak: Garantizado.",
    imgUrl: truck,
  },
];

export const Works = [
    {
        id: '21',
        title: 'Elige tu café',
        sub: '01',
        summary: `Seleccione de nuestra gama evolutiva de cafés artesanales. Nuestros frijoles son de origen ético y les pagamos precios justos por ellos. Hay nuevos cafés en todos los perfiles cada mes para que lo pruebes.`
    },
    {
        id: '22',
        title: 'Elija la frecuencia',
        sub: '02',
        summary: `Personalice su frecuencia de pedido, cantidad, incluso su estilo de asado y su tipo de rutina. Pausa, omita o cancele su suscripción sin compromiso a través de nuestro portal en línea.`
    },
    {
        id: '23',
        title: '¡Recibe y disfruta!',
        sub: '03',
        summary: `Enviamos su paquete en 48 horas, recién asada. Siéntese y disfrute de los galardonados cafés de clase mundial seleccionados para proporcionar una experiencia de degustación distinta.`
    },

]

export const LocateUs = [
    {
        id: 41,
        city: 'United Kingdom',
        street: '68 Asfordby Rd',
        town: 'Alcaston',
        code: 'SY6 1YA',
        phone: '+44 1241 918425',
        locationMap: UK,
        alt: "our location in the united kingdom"
    },
    {
        id: 42,
        city: 'Canada',
        street: '1528 Eglinton Avenue',
        town: 'Toronto',
        code: 'Ontario M4P 1A6',
        phone: '+1 416 485 2997',
        locationMap: Canada,
        alt: "our location in canada"
    },
    {
        id: 43,
        city: 'Australia',
        street: '36 Swanston Street',
        town: ' Kewell',
        code: 'Victoria',
        phone: '+61 4 9928 3629',
        locationMap: Australia,
        alt: "our location in the australia"
    }

]