import vitaminD from "../../../images/blog__vitaminD.svg";
import tommeto from "../../../images/blog__tommeto.svg";
import profile from "../../../images/blog__profile.svg";
import posts from "../../../json/posts.json";
import { Posts } from "../../Posts/Posts";
import { NavLink } from "react-router-dom";

export const Blog = () => {
  const blogPost = [posts[0], posts[1]];
  return (
    <>
      <div className="home__blog blog">
        <div className="blog__header">
          <div className="blog__titles">
            <div className="blog__subtitle italic">News</div>
            <div className="blog__title textH2">
              Discover weekly content about organic food, & more
            </div>
          </div>
          <button className="blog__button default-button default-button_white">
            <NavLink to={"/news"}>More News</NavLink>
          </button>
        </div>
        <div className="blog__posts">
          <Posts posts={blogPost} />
        </div>
      </div>
    </>
  );
};
