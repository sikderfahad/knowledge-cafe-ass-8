import React, { useEffect, useState } from 'react';
import './Main.css'
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';

const Main = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <main>
            <section>
                <div className="blog-container">
                    {
                        blogs.map(blog => <Blog
                            blog={blog}
                            key={blog.id}
                        ></Blog>)
                    }
                </div>
                <Bookmark></Bookmark>
            </section>
        </main>
    );
};

export default Main;