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
    title: "Gran Espresso",
    summary:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
    imgUrl: gran,
  },
  {
    id: "2",
    title: "Planalto",
    summary:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    imgUrl: planalto,
  },
  {
    id: "3",
    title: "Piccollo",
    summary:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    imgUrl: piccolo,
  },
  {
    id: "4",
    title: "Danche",
    summary:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    imgUrl: danche,
  },
];

export const CardList = [
  {
    id: "10",
    title: "Best quality",
    summary:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    imgUrl: quality,
  },
  {
    id: "11",
    title: "Exclusive benefits",
    summary:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
    imgUrl: gifts,
  },
  {
    id: "12",
    title: "Free shipping",
    summary:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    imgUrl: truck,
  },
];

export const Works = [
    {
        id: '21',
        title: 'Pick your coffee',
        sub: '01',
        summary: `Select from our evolving range of artisan coffees. Our beans are ethically 
        sourced and we pay fair prices for them. There are new coffees in all profiles 
        every month for you to try out.`
    },
    {
        id: '22',
        title: ' Choose the frequency',
        sub: '02',
        summary: `Customize your order frequency, quantity, even your roast style and grind type. 
    Pause, skip or cancel your subscription with no commitment through our online portal.`
    },
    {
        id: '23',
        title: 'Receive and enjoy!',
        sub: '03',
        summary: `We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
    world-class coffees curated to provide a distinct tasting experience.`
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