import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

const [blogs, setBlogs] = useState([
    {title:'My New Website',
     body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, voluptatem? Voluptate harum, nisi ab dolorem obcaecati animi itaque dolor, eum earum praesentium facere a sequi! Rem excepturi eos laboriosam quas',
     author: 'Chegbe',
     id: 1},
     
     {title:'My Tech Journey',
     body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, voluptatem? Voluptate harum, nisi ab dolorem obcaecati animi itaque dolor, eum earum praesentium facere a sequi! Rem excepturi eos laboriosam quas',
     author: 'UniqueOJ',
     id: 2},

     {title:'Software Dev Tips',
     body:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, voluptatem? Voluptate harum, nisi ab dolorem obcaecati animi itaque dolor, eum earum praesentium facere a sequi! Rem excepturi eos laboriosam quas',
     author: 'Chegbe',
     id: 3}
]); 

const handleDelete = (id) => {
 const newBlogs = blogs.filter (blog => blog.id  !== id);
 setBlogs(newBlogs);
}

useEffect(() => {
    
});

    return ( 
        <div className="Home">
           <BlogList blogs={blogs} title="All Blogs!" handleDelete = { handleDelete }  />
           {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Chegbe")} title="Chegbe's Blogs!" /> */}
        </div>
     );
}
 

export default Home;