import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../../../../components/fragments/Card';
const blog = () => {
    const posts = useLoaderData();
  return (
    <>
      {posts.map((item) => (
        <Card key={item.id} linkTo={`/blog/${item.id}`}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h1>
          <p style={{ fontSize: '1rem', color: '#666' }}>{item.body}</p>
        </Card>
      ))}
    </>
  )
}

export default blog