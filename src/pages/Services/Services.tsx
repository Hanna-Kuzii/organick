import {
  delivery,
  milkBottle,
  naturalFood,
  onlineStore,
  pistachios,
  radish,
  vegetablesBag,
} from ".";

export const Services = () => {
  return (
    <>
      <div className="app__services services">
        <div className="services__header textH1 headerText">Services</div>
        <div className="services__grow grow">
          <div className="grow__titles titles">
            <div className="grow__subtitle italic">What We Grow</div>
            <div className="grow__title textH2">
              Better Agriculture for Better Future
            </div>
          </div>
          <div className="grow__content">
            <div className="grow__points grow__points_left">
              <div className="grow__point">
                <div className="grow__icon">
                  <img
                    src={milkBottle}
                    alt="milk bottle"
                    className="grow__pic"
                  />
                </div>
                <div className="grow__name textH6">Dairy Products</div>
                <div className="grow__text paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </div>
              </div>
              <div className="grow__point">
                <div className="grow__icon">
                  <img
                    src={onlineStore}
                    alt="online store"
                    className="grow__pic"
                  />
                </div>
                <div className="grow__name textH6">Store Services</div>
                <div className="grow__text paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </div>
              </div>
              <div className="grow__point">
                <div className="grow__icon">
                  <img src={delivery} alt="delivery" className="grow__pic" />
                </div>
                <div className="grow__name textH6">Delivery Services</div>
                <div className="grow__text paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </div>
              </div>
            </div>
            <div className="grow__picture">
              <img src={pistachios} alt="pistachios" className="grow__image" />
            </div>
            <div className="grow__points grow__points_right">
              <div className="grow__point">
                <div className="grow__icon">
                  <img
                    src={naturalFood}
                    alt="natural food"
                    className="grow__pic"
                  />
                </div>
                <div className="grow__name textH6">Agricultural Services</div>
                <div className="grow__text paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </div>
              </div>
              <div className="grow__point">
                <div className="grow__icon">
                  <img
                    src={vegetablesBag}
                    alt="vegetables bag"
                    className="grow__pic"
                  />
                </div>

                <div className="grow__name textH6">Organic Products</div>
                <div className="grow__text paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </div>
              </div>
              <div className="grow__point">
                <div className="grow__icon">
                  <img src={radish} alt="radish" className="grow__pic" />
                </div>
                <div className="grow__name textH6">Fresh Vegetables</div>
                <div className="grow__text paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  accusantium doloremqlaudantium. Sed ut perspiciatis
                </div>
              </div>
            </div>
          </div>
          <div className="grow__buttons">
            <button className="grow__button default-button default-button_white">
              Explore More
            </button>
          </div>
        </div>
        <div className="services__organic organic">
          <div className="organic__titles titles">
            <div className="organic__subtitle italic">Organic Only</div>
            <div className="organic__title textH2">Everyday Fresh & Clean</div>
            <div className="organic__text paragraph">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the
            </div>
            <button className="organic__button"></button>
          </div>
        </div>
      </div>
    </>
  );
};
