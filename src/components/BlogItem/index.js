import './index.css'

const BlogItem = props => {
  const {eachitem} = props
  const {title, description, publishedDate} = eachitem
  return (
    <div>
      <li>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{publishedDate}</p>
      </li>
    </div>
  )
}
export default BlogItem
