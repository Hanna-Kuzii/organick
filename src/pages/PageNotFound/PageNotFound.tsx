import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <div className="app__not-found not-found">
        <div className="not-found__content">
          <div className="not-found__description">
            <div className="not-found__number textH1">404</div>
            <div className="not-found__text textH1">Page not found</div>
            <div className="not-found__more paragraph">
              The page you are looking for doesn't exist or has been moved
            </div>
          </div>
          <Link to={"/home"} className="not-found__gohome">
            <button className="not-found__button default-button default-button_dark">
              Go to homepage
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
