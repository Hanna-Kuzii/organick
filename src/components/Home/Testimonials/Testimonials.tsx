import star from "../../../images/products/star.svg";
import avatar from "../../../images/testimonials__avatar.svg";

export const Testimonials = () => {
  return (
    <>
      <div className="home__testimonials testimonials">
        <div className="testimonials__content">
          <div className="testimonials__titles">
            <div className="testimonials__subtitle italic">Testimonials</div>
            <div className="testimonials__title textH6">
              What Our Customer Saying?
            </div>
          </div>
          <div className="testimonials__review review">
            <img src={avatar} alt="avatar" className="review__avatar" />
            <div className="review__mark">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <div className="review__text paragraph">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </div>
            <div className="review__info">
              <div className="review__name textH6">Sara Taylor</div>
              <div className="review__position paragraph">Consumer</div>
            </div>
            <div className="review__dots"></div>
          </div>
        </div>
        <hr className="testimonials__hr" />
        <div className="testimonials__statistic statistic">
          <div className="statistic__item">
            <div className="statistic__count textH2">100%</div>
            <div className="statistic__text paragraph">Organic</div>
          </div>
          <div className="statistic__item">
            <div className="statistic__count textH2">285</div>
            <div className="statistic__text paragraph">Active Product</div>
          </div>
          <div className="statistic__item">
            <div className="statistic__count textH2">350+</div>
            <div className="statistic__text paragraph">Organic Orchads</div>
          </div>
          <div className="statistic__item">
            <div className="statistic__count textH2">25+</div>
            <div className="statistic__text paragraph">Years of Farming</div>
          </div>
        </div>
      </div>
    </>
  );
};
