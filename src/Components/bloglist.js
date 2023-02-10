import {Link} from "react-router-dom";

const BlogList = ({blogs, title}) => {
    //const blogs = props.blogs;

    return (
        <div className = "blog-list">
            {blogs.map((blog) => (
                <div className="preview" key={blog.id}>

                    <Link to={`/blog/${blog.id}`}>
                        <h3> {blog.title} </h3>
                        <p> Done by: {blog.author} </p>
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default BlogList;