//import { useEffect, useState } from "react";
import BlogList from "./bloglist";
import useFetch from "../useFetch";

const Home = () => {  

    // const [blogs, setBlogs] = useState (null);
    // const [pending, setPending] = useState (true);
    // const [error, setError] = useState (null);
 
    const {blogs, pending, error} = useFetch ('http://localhost:5500/blogs');

    /*
    const [name, setName]= useState ('Mary');
    const handleclick1 = () => {
        setName ('Mohamed');
    }   
    const [age, setCount]= useState ('22');
    const handleclick2 = () => {
        setCount ('24');
    }

    const handleclick3 = () => {
        handleclick1();
        handleclick2();
    } 

    return (

        <div className = "Home">
            <h1> Flying in Kenya Blogs </h1>
            <p> Hello {name} hope you are doing fine, based on the info provided, your age is {age} years old. </p>
            <button onClick={handleclick3}> Change </button>
        </div>
    );
    */
   
    

    return (

        <div className = "Home">
            <h2> Pilots' Blogs </h2>
            {error && <div> {error} </div>}
            {pending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title = "Pilots' Blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Capt. Nyaa')} title = "Nyaa's Blogs" /> */}

        </div>
    );
}
 
export default Home;