import "./BlogPost.css"

const BlogPost = (props) => {

  return (

    <div>

        <p className="details">{props.title}</p>
        <p className="content">{props.author}</p>
        <p className="content">{props.content}</p>
        <p className="content">{props.date}</p>

    </div>
    
    
  );
};

export default BlogPost;
