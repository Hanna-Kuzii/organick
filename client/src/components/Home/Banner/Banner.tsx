export const Banner = () => {
  return (
    <>
      <div className="home__banner banner">
        <div className="banner__content">
          <div className="banner__subtitle italic">100% Natural Food</div>
          <div className="banner__title textH1">
            Choose the best healthier way of life
          </div>
          <button className="banner__button default-button default-button_yellow">
            Explore Now
          </button>
        </div>
      </div>
      <div className="home__offer-banner offer-banner">
        <div className="offer-banner__item offer-banner__item_natural">
          <div className="offer-banner__content">
            <div className="offer-banner__subtitle italic">Natural!!!</div>
            <div className="offer-banner__title textH3">
              Get Garden Fresh Fruits
            </div>
          </div>
        </div>
        <div className="offer-banner__item offer-banner__item_offer">
          <div className="offer-banner__content">
            <div className="offer-banner__subtitle italic">Offer</div>
            <div className="offer-banner__title textH3">
              Get 10% off on Vegetables
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
