import logo from "../../images/logo_organick.svg";
import facebook from "../../images/social__facebook.svg";
import instagram from "../../images/social__instagram.svg";
import twitter from "../../images/social__twitter.svg";
import pinterest from "../../images/social__pinterest.svg";

export const Footer = () => {
  return (
    <>
      <div className="app__footer footer">
        <div className="footer__contacts contacts">
          <div className="contacts__title textH5">Contact Us</div>
          <div className="contacts__points">
            <div className="contacts__point">
              <div className="contacts__name quotes">Email</div>
              <div className="contacts__value paragraph">
                <a href="mailto:needhelp@Organia.com">needhelp@Organia.com</a>
              </div>
            </div>
            <div className="contacts__point">
              <div className="contacts__name quotes">Phone</div>
              <div className="contacts__value paragraph">
                <a href="tel:666 888 888">666 888 888</a>
              </div>
            </div>
            <div className="contacts__point">
              <div className="contacts__name quotes">Adress</div>
              <div className="contacts__value paragraph">
                <a href="https://www.google.com/maps/place/88th+St,+Brooklyn,+NY,+USA/data=!4m2!3m1!1s0x89c24f8a621ff737:0x63b87b08f5ac9099?sa=X&ved=2ahUKEwjsuOug7OiAAxVpJRAIHRRPDjoQ8gF6BAgaEAA&ved=2ahUKEwjsuOug7OiAAxVpJRAIHRRPDjoQ8gF6BAgbEAI">
                  88 road, borklyn street, USA
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__comunication comunication">
          <div className="comunication__company">
            <div className="comunication__logo logo">
              <img
                src={logo}
                alt="logo"
                className="comunication__image logo__image"
              />
              <div className="comunication__title logo__title">Organick</div>
            </div>
            <div className="comunication__motto paragraph">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </div>
          </div>
          <div className="comunication__social social">
            <a href="/" className="social__link">
              <img src={instagram} alt="instagram" className="social__icon" />
            </a>
            <a href="/" className="social__link">
              <img src={facebook} alt="facebook" className="social__icon" />
            </a>
            <a href="/" className="social__link">
              <img src={twitter} alt="twitter" className="social__icon" />
            </a>
            <a href="/" className="social__link">
              <img src={pinterest} alt="pinterest" className="social__icon" />
            </a>
          </div>
        </div>
        <div className="footer__utility utility">
          <div className="utility__title textH5">Utility Pages</div>
          <ul className="utility__links">
            <li className="utility__item paragraph">
              <a href="/" className="utility__link">
                Style Guide
              </a>
            </li>
            <li className="utility__item paragraph">
              <a href="/" className="utility__link">
                404 Not Found
              </a>
            </li>
            <li className="utility__item paragraph">
              <a href="/" className="utility__link">
                Password Protected
              </a>
            </li>
            <li className="utility__item paragraph">
              <a href="/" className="utility__link">
                Licences
              </a>
            </li>
            <li className="utility__item paragraph">
              <a href="/" className="utility__link">
                Changelog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="app__copyright copyright">
        <div className="copyright__content paragraph">
          Copyright © <span className="copyright__bold quotes">Organick</span> |
          Designed by
          <span className="copyright__bold quotes"> VictorFlow</span> Templates
          - Powered by <span className="copyright__bold quotes">Webflow</span>
        </div>
      </div>
    </>
  );
};
