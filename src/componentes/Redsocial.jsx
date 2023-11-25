import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import instagram from '../assets/icons/instagram.svg'
export const Redsocial = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.facebook.com">
            <img src={facebook} alt="visit our facebook page" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            <img src={twitter} alt="lets chat on twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com">
            <img src={instagram} alt="meet us on instagram" />
          </a>
        </li>
      </ul>
    </div>
  );
};
