import React, { useEffect, useState } from 'react'
import Card from "../../../../components/fragments/Card"
import styles from "./blog.module.css"

const BlogSection = () => {
    const [posts, setPosts] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    const handleSearch = (e) => {
        setSearchQuery(e.target.value)
    }

    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <section className={styles.blogSection}>
            <h2>Latest Blog Posts</h2>
            
            <div className={styles.searchWrapper}>
                <div className={styles.searchBox}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input 
                        type="text" 
                        placeholder="Search blog posts..." 
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            </div>

            <div className={styles.postWrapper}>
                {filteredPosts.map((item, index) => (
                    <Card
                        key={index}
                        title={item.title}
                    >
                        {item.body}
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default BlogSection