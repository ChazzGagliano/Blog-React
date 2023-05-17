

export function BlogsNew(props) {

   const handleSubmit = (event) => {
     event.preventDefault();
     console.log('handling submit');

     const params = new FormData(event.target);
     props.onCreateBlog(params)
     event.target.reset()
   };

  return (
    <div id="blogs id">
      <h1>New Posts</h1>
      <form onSubmit={handleSubmit}>  
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <div>
        Image: <input name="image" type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}