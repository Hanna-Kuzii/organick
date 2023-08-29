import { Subscribe } from "../../components/Subscribe/Subscribe";
import team from "../../json/team.json";
import {
  cardSecurity,
  chemicalPlant,
  differentVegetable,
  facebook,
  fruits,
  greenVegetable,
  instagram,
  naturalFood,
  nutsFeesd,
  phoneTime,
  returnPurchase,
  spicy,
  tractor,
  twitter,
  vegetables,
} from ".";

interface Person {
  id: number;
  photo: string;
  name: string;
  position: string;
  links: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
}

export const AboutUsPage = () => {
  return (
    <>
      <div className="app__about-us-page about-us-page">
        <div className="about-us-page__header textH1 headerText">About us</div>
        <div className="about-us-page__main-info main-info">
          <div className="main-info__picture">
            <img
              src={differentVegetable}
              alt="vegetables"
              className="main-info__image"
            />
          </div>
          <div className="main-info__content">
            <div className="main-info__subtitle italic">About us</div>
            <div className="main-info__title textH2">
              We do Creative Things for Success
            </div>
            <div className="main-info__text paragraph">
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <div className="main-info__points">
              <div className="main-info__point">
                <img src={tractor} alt="tractor" className="main-info__icon" />
                <div className="main-info__text textH6">
                  Modern Agriculture Equipment
                </div>
              </div>
              <div className="main-info__point">
                <img
                  src={chemicalPlant}
                  alt="chemical plant"
                  className="main-info__icon"
                />
                <div className="main-info__text textH6">
                  No growth hormones are used
                </div>
              </div>
            </div>
            <button className="main-info__button default-button default-button_dark">
              Explore More
            </button>
          </div>
        </div>
        <div className="about-us-page__whyus whyus">
          <div className="whyus__content">
            <div className="whyus__description">
              <div className="whyus__subtitle italic">Why choose us?</div>
              <div className="whyus__title textH2">
                We do not buy from the open market & traders.
              </div>
              <div className="whyus__text paragraph">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </div>
            </div>
            <div className="whyus__points">
              <div className="whyus__point">
                <div className="whyus__point__title textH6">
                  100% Natural Product
                </div>
                <div className="whyus__point__text paragraph">
                  Simply dummy text of the printing and typesetting industry
                  Lorem Ipsum
                </div>
              </div>
              <div className="whyus__point">
                <div className="whyus__point__title textH6">
                  Increases resistance
                </div>
                <div className="whyus__point__text paragraph">
                  Filling, and temptingly healthy, our Biona Organic Granola
                  with Wild Berries is just the thing
                </div>
              </div>
            </div>
          </div>
          <div className="whyus__picture">
            <img
              src={greenVegetable}
              alt="green vegetables"
              className="whyus__image"
            />
          </div>
        </div>
        <div className="about-us-page__options options">
          <ul className="options__list">
            <li className="options__item">
              <div className="options__pic">
                <img
                  src={returnPurchase}
                  alt="return policy"
                  className="options__icon"
                />
              </div>
              <div className="options__title textH6">Return Policy</div>
              <div className="options__text paragraph">
                Simply dummy text of the printintypesetting industry.
              </div>
            </li>
            <li className="options__item">
              <div className="options__pic">
                <img
                  src={naturalFood}
                  alt="100% fresh"
                  className="options__icon"
                />
              </div>
              <div className="options__title textH6">100% Fresh</div>
              <div className="options__text paragraph">
                Simply dummy text of the printintypesetting industry.
              </div>
            </li>
            <li className="options__item">
              <div className="options__pic">
                <img
                  src={phoneTime}
                  alt="support 24/7"
                  className="options__icon"
                />
              </div>
              <div className="options__title textH6">Support 24/7</div>
              <div className="options__text paragraph">
                Simply dummy text of the printintypesetting industry.
              </div>
            </li>
            <li className="options__item">
              <div className="options__pic">
                <img
                  src={cardSecurity}
                  alt="secured payment"
                  className="options__icon"
                />
              </div>
              <div className="options__title textH6">Secured Payment</div>
              <div className="options__text paragraph">
                Simply dummy text of the printintypesetting industry.
              </div>
            </li>
          </ul>
        </div>
        <div className="about-us-page__team team">
          <div className="team__titles">
            <div className="team__subtitle italic">Team</div>
            <div className="team__title textH1">Our Organic Experts</div>
            <div className="team__description paragraph">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </div>
          </div>
          <ul className="team__list">
            {team.map((person: Person) => (
              <li className="team__person" key={person.id}>
                <img
                  src={require("../../images/pages/aboutUsPage/" +
                    person.photo)}
                  alt={person.name}
                  className="team__photo"
                />
                <div className="team__details">
                  <div className="team__name textH6">{person.name}</div>
                  <div className="team__position italic">{person.position}</div>
                  <ul className="team__links">
                    <li className="team__instagram team__item">
                      <a href={person.links.instagram} className="team__link">
                        <img
                          src={instagram}
                          alt="instagram"
                          className="team__link_pic"
                        />
                      </a>
                    </li>
                    <li className="team__facebook">
                      <a href={person.links.facebook} className="team__link">
                        <img
                          src={facebook}
                          alt="facebook"
                          className="team__link_pic"
                        />
                      </a>
                    </li>
                    <li className="team__twitter">
                      <a href={person.links.twitter} className="team__link">
                        <img
                          src={twitter}
                          alt="twitter"
                          className="team__link_pic"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="about-us__we-offer we-offer">
          <div className="we-offer__titles">
            <div className="we-offer__subtitle italic">About Us</div>
            <div className="we-offer__title textH2">What We Offer for You</div>
          </div>
          <ul className="we-offer__categories">
            <li className="we-offer__category">
              <div className="we-offer__pic">
                <img src={spicy} alt="spicy" className="we-offer__image" />
              </div>
              <div className="we-offer__name textH6">Spicy</div>
            </li>
            <li className="we-offer__category">
              <div className="we-offer__pic">
                <img
                  src={nutsFeesd}
                  alt="nuts & feesd"
                  className="we-offer__image"
                />
              </div>
              <div className="we-offer__name textH6">Nuts & Feesd</div>
            </li>
            <li className="we-offer__category">
              <div className="we-offer__pic">
                <img src={fruits} alt="fruits" className="we-offer__image" />
              </div>
              <div className="we-offer__name textH6">Fruits</div>
            </li>
            <li className="we-offer__category">
              <div className="we-offer__pic">
                <img
                  src={vegetables}
                  alt="vegetables"
                  className="we-offer__image"
                />
              </div>

              <div className="we-offer__name textH6">Vegetable</div>
            </li>
          </ul>
        </div>
      </div>
      <Subscribe />
    </>
  );
};
