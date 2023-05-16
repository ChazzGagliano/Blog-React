export function BlogsNew(props) {

   const handleSubmit = (event) => {
     event.preventDefault();
     const params = new FormData(event.target);
     props.onCreateBlog(params, () => event.target.reset());
   };
  return (
    <div>
      <h1>New Posts</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <div>
          Image_url: <input name="Image" type="text" />
        </div>
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}