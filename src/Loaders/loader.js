export const blogLoader = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
}

export const postLoader = ({params}) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

}