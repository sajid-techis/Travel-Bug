import { useState } from "react";
import { useDispatch } from "react-redux";
import IconSmallMenu from "../../assets/img/icon-small-menu.svg";
import IconUser from "../../assets/img/user-icon.jpg";
import { deletePost } from "../../reducks/posts/operations";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <li>
      <img
        className="menu_icon"
        alt="manu_icon"
        onClick={() => setMenuToggle(!menuToggle)}
        src={IconSmallMenu}
      />
      {menuToggle && (
        <div className="menu">
          <span onClick={() => dispatch(deletePost(post.id))}>Delete</span>
        </div>
      )}
      <div className="logo">
        <img src={IconUser} alt="user_icon" />
      </div>
      <div className="name_body">
        <div className="name">{post.name}</div>
        <div className="datetime">{post.created_at}</div>
        <p>{post.body}</p>
        {post.image && (
          <a href={post.image} target="_blank">
            <img className="post-image" src={post.image} alt="post_image" />
          </a>
        )}
      </div>
    </li>
  );
};

export default Post;
