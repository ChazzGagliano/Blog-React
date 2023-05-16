import { BlogsIndex } from "./BlogsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { BlogsNew } from "./BlogsNew" ;
import { Modal } from "./Modal";
import { BlogsShow } from "./BlogsShow";
import { Signup } from "./Signup";

export function Content() {
   const [blogs, setBlogs] = useState([]);
   const [isBlogsShowVisible, setIsBlogsShowVisible] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({});

   const handleIndexBlogs = () => {
     console.log("handleIndexBlogs");
     axios.get("http://localhost:3000/posts.json").then((response) => {
       console.log(response.data);
       setBlogs(response.data);
     });
   };

   const handleCreateBlog = (params, successCallback) => {
        console.log("handleCreateBlog", params);
        axios.post("http://localhost:3000/posts.json", params).then((response) => {
          setBlogs([...blogs, response.data]);
          successCallback();
        });
      };

      const handleShowBlog = (blog) => {
     console.log("handleShowBlog", blog);
     setIsBlogsShowVisible(true);
     setCurrentBlog(blog);
   };
        
   const handleClose = () => {
     console.log("handleClose");
     setIsBlogsShowVisible(false);
   };
  
   useEffect(handleIndexBlogs, []);
 
  return (
    <div>
      <Signup />
    <BlogsNew onCreateBlog={handleCreateBlog} />
    <BlogsIndex blogs={blogs} onShowBlog={handleShowBlog} />
    <Modal show={isBlogsShowVisible} onClose={handleClose}>
    <BlogsShow currentBlog={currentBlog} />
     </Modal>
    </div>
  );
}
