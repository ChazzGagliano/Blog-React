

export function BlogsShow(props) {
  console.log(props.currentBlog)
  
  const handleSubmit = (event) => {
    
      event.preventDefault();
    
      const params = new FormData(event.target);
         
      props.onUpdateBlog(props.currentBlog.id, params);
  
      console.log('handling submit');
    }
    console.log(props.currentBlog)

    const handleClick = () => {
      console.log('handling click')
      props.onDestroyBlog(props.currentBlog.id)

    }
  
  return (
    <div>
        <h1>Post information</h1>
        <p>title: {props.currentBlog.title}</p>
        <p>Body: {props.currentBlog.body}</p>
        <p>Image: {props.currentBlog.image}</p>

         <form onSubmit={handleSubmit}>
         <div>
           Title: <input defaultValue={props.currentBlog.title} name="title" type="text" />
         </div>
         <div>
           Body: <input defaultValue={props.currentBlog.body} name="body" type="text" />
         </div>
         <div>
           Image: <input defaultValue={props.currentBlog.image} name="image" type="text" />
         </div>
         <button type="submit">Update post</button>
         <button onClick={handleClick}>Destroy photo</button>
       </form>
    </div>
  );
}