import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const  BlogDetails = () => {
    const {id} = useParams();
    const {blogs, pending, error} = useFetch('http://localhost:5500/blogs/'+id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:5500/blogs/' +blogs.id,{
            method: 'DELETE'
        }).then (()=>{
            history.push('/');
        });
    } 
    

    return ( 
        <div className="blog-details">
            {/*<h2> Blog Details {id} </h2>*/}
            {error && <div> {error} </div>}
            {pending && <div> Loading... </div>}
            {blogs && (
                <article>
                    <h2> {blogs.title} </h2>
                    <p> Done by: {blogs.author} </p>
                    <div> {blogs.body} </div>
                    <Button variant = "danger" className="btn" onClick={handleClick}> Delete </Button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;