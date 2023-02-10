import { useState, useEffect} from "react";
const useFetch = (url)=> {
    const [blogs, setBlogs] = useState (null);
    const [pending, setPending] = useState (true);
    const [error, setError] = useState (null);
 
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter (blog => blog.id !== id);
    //     setBlogs (newBlogs); 
    // }

    useEffect (() => {
        setTimeout(() =>{
            fetch (url)
            .then (res => {
                if (!res.ok){
                    throw Error ('Resource cant be fetched');
                }
            return res.json ();
            })
            .then (data => {
            setBlogs (data);
            setPending (false);
            })
            .catch (err =>{
                setPending (false);
                setError (err.message);
            })
        }, 1000);
    },[url]);

    return {blogs, pending, error}
}

export default useFetch;