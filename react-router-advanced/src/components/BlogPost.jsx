import { useParams } from "react-router-dom";

function BlogPost() {
  let { id } = useParams(); // Get dynamic parameter from URL

  return (
    <div>
      <h2>Blog Post</h2>
      <p>Viewing post ID: {id}</p>
    </div>
  );
}

export default BlogPost;
