import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {bloglist} = props
  return (
    <ul className="flex-mid-container">
      {bloglist.map(eachblog => (
        <BlogItem blog={eachblog} blogKey={eachblog.id} />
      ))}
    </ul>
  )
}

export default BlogList
