import './index.css'

const BlogItem = props => {
  const {blog} = props
  return (
    <li className="list-container">
      <div className="flex-container">
        <div className="directon-container">
          <h1 className="head">{blog.title}</h1>
          <p className="para">{blog.publishedDate}</p>
        </div>

        <div>
          <li>{blog.description}</li>
        </div>
        <hr className="horizantalina" />
      </div>
    </li>
  )
}
export default BlogItem
