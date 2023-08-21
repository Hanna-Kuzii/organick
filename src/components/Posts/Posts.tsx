import { Post } from "../../types/post";
import profile from '../../images/components/posts/profile.svg';
interface PostsProps {
  posts: Post[];
}

export const Posts: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      <div className="posts">
        {posts.map((post: Post) => (
          <div className="posts__post post">
            <div className="post__picture post__picture_vitaminD">
              <img
                src={require("../../images/components/posts/" + post.image)}
                alt={post.title}
                className="post__image"
              />
              <div className="post__date textH6">
                <div className="post__date_day">{post.dateDay}</div>
                <div className="post__date_month">{post.dateMonth}</div>
              </div>
            </div>

            <div className="post__content">
              <div className="post__authour">
                <img src={profile} alt="profile" className="post__profile" />
                <div className="post__authour-name paragraph">
                  By {post.authour}
                </div>
              </div>
              <div className="post__title textH6">
                {post.title}
              </div>
              <div className="post__text paragraph">
                {post.text}
              </div>
              <button className="post__button default-button default-button_yellow">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
