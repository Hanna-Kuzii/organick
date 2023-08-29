import { ground, plants, working } from ".";
import { Subscribe } from "../../components/Subscribe/Subscribe";

export const Quality = () => {
  return (
    <>
      <div className="app__quality quality">
        <div className="quality__header headerText textH1">
          Quality Standart
        </div>
        <div className="quality__picture">
          <img src={working} alt="working man" className="quality__image" />
        </div>
        <div className="quality__store-services store-services">
          <div className="store-services__header textH2">
            Organic Store Services
          </div>
          <div className="store-services__description paragraph">
            <p className="store-services__p">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="store-services__p">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and auncover many web
              sites still in their infancy. Various versions have evolved over
              the years
            </p>
          </div>
          <div className="store-services__content">
            <div className="store-services__point">
              <div className="store-services__pic">
                <img
                  src={ground}
                  alt="ground"
                  className="store-services__image"
                />
              </div>
              <div className="store-services__info">
                <div className="store-services__subtitle textH6">
                  Why Organic
                </div>
                <div className="store-services__text paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </div>
              </div>
            </div>{" "}
            <div className="store-services__point store-services__point_speciality">
              <div className="store-services__info">
                <div className="store-services__subtitle textH6">
                  Speciality Produce
                </div>
                <div className="store-services__text paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat.
                  page editors now use Lorem Ipsum as their default model text,
                  and auncover.
                </div>
              </div>
              <div className="store-services__pic">
                <img
                  src={plants}
                  alt="ground"
                  className="store-services__image"
                />
              </div>
            </div>
          </div>
          <div className="store-services__farm farm">
            <div className="farm__title textH4">We farm your land</div>
            <div className="farm__description paragraph">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </div>
            <div className="farm__steps">
              <div className="farm__step">
                <div className="farm__number textH6">01</div>
                <div className="farm__text textH6">Best quality support</div>
              </div>
              <div className="farm__step">
                <div className="farm__number textH6">02</div>
                <div className="farm__text textH6">Money back guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};
