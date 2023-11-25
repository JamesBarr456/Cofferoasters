const sectionStyle = {
  backgroundImage: "url(src/assets/home/image-hero-coffeepress.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
export const Home = () => {
  return (
    <>
      <section style={sectionStyle}>
        <h1>Great coffe made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button type="button">Create your plan</button>
      </section>
      <section>
        <div>
          <img
            src="src/assets/home/image-gran-espresso.png"
            alt="gran espresso"
          />
          <h2>Gran Espresso</h2>
          <p>
            Light and flavorful blend with cocoa and black pepper for an intense
            experience
          </p>
        </div>
        <div>
          <img src="src/assets/home/image-planalto.png" alt="planalto" />
          <h2>Planalto</h2>
          <p></p>
        </div>
        <div>
          <img src="src/assets/home/image-piccollo.png" alt="piccollo" />
          <h2>Piccollo</h2>
          <p>
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts
          </p>
        </div>
        <div>
          <img src="src/assets/home/image-danche.png" alt="danche" />
          <h2>Danche</h2>
          <p>
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes
          </p>
        </div>
      </section>
      <secction>
        <h1>Why choose us?</h1>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
        <div>
          <img src="src/assets/home/icon-coffee-bean.svg" alt="piccollo" />
          <h2>Best quality</h2>
          <p>
            Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.
          </p>
        </div>
        <div>
          <img src="src/assets/home/icon-gift.svg" alt="piccollo" />
          <h2>Exclusive benefits</h2>
          <p>
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>
        </div>
        <div>
          <img src="src/assets/home/icon-truck.svg" alt="piccollo" />
          <h2>Free shipping</h2>
          <p>
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
        </div>
      </secction>
      <section>
        <h2>How it works</h2>
        <div>
          <ul>
            <li>
              <span >01</span>
              <h3 >Pick your coffe</h3>
              <p>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out</p>
            </li>
          </ul>
          <div>
            <button type="button">Create your plan</button>
          </div>
        </div>
      </section>
    </>
  );
};
