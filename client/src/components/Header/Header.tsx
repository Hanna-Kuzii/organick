import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import logo from "../../images/logo_organick.svg";
import search from "../../images/header__search.svg";
import cart from "../../images/header__cart.svg";
import { OrderListContext } from "../../hooks/OrderListContext";

export const Header = () => {
  const { orderList, setOrderList } = useContext(OrderListContext);

  return (
    <>
      <div className="app__header header">
        <div className="header__logo">
          <Link to={"/"} className="logo">
            <img src={logo} alt="logo" className="logo__image" />
            <div className="logo__title">Organick</div>
          </Link>
        </div>
        <div className="header__navigation navigation">
          <input id="navigation__list-toggle"  className="navigation__list-toggle" type="checkbox" />
          <label className="navigation__list-button-container" htmlFor="navigation__list-toggle">
            <div className="navigation__list-button"></div>
          </label>
          <ul className="navigation__list">
            <li className="navigation__item textH6">
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending navigation__link"
                    : isActive
                    ? "active navigation__link"
                    : "navigation__link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="navigation__item textH6">
              <NavLink
                to={"/aboutus"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending navigation__link"
                    : isActive
                    ? "active navigation__link"
                    : "navigation__link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="navigation__item textH6 navigation__dropdown">
              <span className="navigation__pages-title">Pages</span>
              <div className="navigation__content">
                <NavLink
                  to={"/quality"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending navigation__link"
                      : isActive
                      ? "active navigation__link"
                      : "navigation__link"
                  }
                >
                  Quality
                </NavLink>{" "}
                <NavLink
                  to={"/services"}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending navigation__link"
                      : isActive
                      ? "active navigation__link"
                      : "navigation__link"
                  }
                >
                  Services
                </NavLink>
              </div>
            </li>
            <li className="navigation__item textH6">
              <NavLink
                to={"/shop"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending navigation__link"
                    : isActive
                    ? "active navigation__link"
                    : "navigation__link"
                }
              >
                Shop
              </NavLink>
            </li>
            <li className="navigation__item textH6">
              <NavLink
                to={"/projects"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending navigation__link"
                    : isActive
                    ? "active navigation__link"
                    : "navigation__link"
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="navigation__item textH6">
              <NavLink
                to={"/news"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending navigation__link"
                    : isActive
                    ? "active navigation__link"
                    : "navigation__link"
                }
              >
                News
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header__search search">
          <input
            type="text"
            className="search__input"
            placeholder="Search..."
          />
          <button className="search__button circle">
            <img src={search} alt="search" className="search__icon" />
          </button>
        </div>
        <Link to={"/cart"} className="header__cart-icon cart-icon">
          <div className="cart-icon__image circle">
            <img src={cart} alt="cart" className="cart-icon__icon" />
          </div>
          <div className="cart-icon__title textH6">
            Cart ({orderList.length})
          </div>
        </Link>
      </div>
    </>
  );
};
