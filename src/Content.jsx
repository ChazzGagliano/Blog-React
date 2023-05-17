import { BlogsIndex } from "./BlogsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { BlogsNew } from "./BlogsNew" ;
import { Modal } from "./Modal";
import { BlogsShow } from "./BlogsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogOutLink";

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

   const handleCreateBlog = (params) => {
    axios.post('http://localhost:3000/posts.json', params).then(response => {
      console.log(response.data);
      // take everything that's in blogs and add response.data
      setBlogs([...blogs, response.data])
    })
    console.log('handling create blog')
  }

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


  const handleUpdateBlog = (postId, params) => {
    console.log('handling update blog...');
    axios.patch(`http://localhost:3000/posts/${postId}.json`, params).then(response => {
      console.log(response.data);
      setBlogs(
        blogs.map(blog => {
          if (blog.id === response.data.id) {
            return response.data;
          } else {
            return blog;
          }
        })
      )
      setIsBlogsShowVisible(false);

    })
  }
 
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
    <BlogsNew onCreateBlog={handleCreateBlog}/>
    <BlogsIndex blogs={blogs} onShowBlog={handleShowBlog} />
    <Modal show={isBlogsShowVisible} onClose={handleClose}>
    <BlogsShow currentBlog={currentBlog} onUpdateBlog={handleUpdateBlog} />
     </Modal>
    </div>
  );
}
