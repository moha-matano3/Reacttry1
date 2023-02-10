import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Create = () => {

    const [title, setTitle] = useState ('');
    const [body, setBody] = useState ('');
    const [author, setAuthor] = useState ('');


    const handleSubmit = (e)=> {
        e.preventDefault();
        const blog = {title,body,author}

        fetch('http://localhost:5500/blogs',{
            method:'POST',
            headers: {"content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then (()=>{
            alert('New blog added');
        })
    }

    return ( 
        <div className="create">
            <h3> Add Your new blog Captain </h3>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label> Title </Form.Label>
                    <Form.Control type="text" required name="title" placeholder="Enter Title"
                    value={title} onChange={(e)=>setTitle(e.target.value)} /> 
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Enter Post </Form.Label>
                    <Form.Control as="textarea" required name="body" placeholder="Type Blog..." rows={3}
                    value={body} onChange={(e)=>setBody(e.target.value)} /> 
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Author </Form.Label>
                    <Form.Control type="text" required name="Author" placeholder="Author of the Blog"
                    value={author} onChange={(e)=>setAuthor(e.target.value)} /> 
                </Form.Group>

                <Button variant = "primary" type="submit">
                    Save Blog
                </Button>
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}

            </Form>

        </div>
     );
}
 
export default Create;