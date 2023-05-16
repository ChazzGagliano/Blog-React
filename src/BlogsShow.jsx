export function BlogsShow(props) {
  console.log(props.currentBlog)
  return (
    <div>
      <h1>Post information</h1>
      <p>title: {props.currentBlog.title}</p>
      <p>Body: {props.currentBlog.body}</p>
      <p>Image: {props.currentBlog.image}</p>
    </div>
  );
}