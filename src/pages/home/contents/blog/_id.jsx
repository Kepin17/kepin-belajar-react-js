import { useLoaderData } from "react-router-dom"


const PostPage = () => {

    const post = useLoaderData()

  return (
    <>
        <h1>Post</h1>
        <p>{post?.title}</p>
        <p>{post?.body}</p>
    </>
  )
}

export default PostPage