import BlogItem from '../BlogItem'

const BlogList = props => {
  const {items} = props
  console.log(items)

  return (
    <div>
      <ul>
        {items.map(eachitem => (
          <BlogItem eachitem={eachitem} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
