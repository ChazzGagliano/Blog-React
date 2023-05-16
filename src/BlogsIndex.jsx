
 export function BlogsIndex(props) {
  return (
    <div>
      <h1>All Posts</h1>
      {props.blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Text: {blog.body} </p>
          <img src={blog.image_url} alt=""/>
          <button onClick={() => props.onShowBlog(blog)}>More info</button>
        </div>
      ))}
    </div>
  );
}