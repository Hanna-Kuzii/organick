import { Posts } from "../../components/Posts/Posts";
import { Subscribe } from "../../components/Subscribe/Subscribe";
import posts from "../../json/posts.json";

export const News = () => {
  return (
    <>
      <div className="app__news news">
        <div className="news__header textH1 headerText">Recent News</div>
        <div className="news__posts">
          <Posts posts={posts} />
        </div>
      </div>

      <Subscribe />
    </>
  );
};
