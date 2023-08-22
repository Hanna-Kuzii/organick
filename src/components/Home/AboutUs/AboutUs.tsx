import organicImg from "../../../images/aboutus__organic.svg";
import qualityImg from "../../../images/aboutus__quality.svg";

export const AboutUs = () => {
  return (
    <>
      <div className="home__aboutus aboutus">
        <div className="aboutus__content">
          <div className="aboutus__info">
            <div className="aboutus__subtitle italic">About us</div>
            <div className="aboutus__title textH2">
              We Believe in Working Accredited Farmers
            </div>
            <div className="aboutus__description paragraph">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </div>
          </div>
          <div className="aboutus__options">
            <div className="aboutus__option option">
              <div className="option__icon">
                <img src={organicImg} alt="organic" className="option__image" />
              </div>
              <div className="option__title textH6">Organic Foods Only</div>
              <div className="option__text paragraph">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </div>
            </div>
            <div className="aboutus__option option">
              <div className="option__icon">
                <img src={qualityImg} alt="quality" className="option__image" />
              </div>
              <div className="option__title textH6">Quality Standards</div>
              <div className="option__text paragraph">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </div>
            </div>
          </div>
          <button className="aboutus__button default-button default-button_dark">
            Shop now
          </button>
        </div>
      </div>
    </>
  );
};
